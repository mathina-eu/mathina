/**
 * This monstrosity of a plugin enables embedding Videos and allowing defining an Image/Video Size
 *
 * It merges:
 *  - an internal plugin of markdown-it-vue, called markdown-it-image which adds Image size
 *  - markdown-it-html5-media plugin which adds support for Video embedding
 *
 *  Both of these plugins work by reimplementing markdown-it's image parsing and extending it.
 *  We merge both... and as a bonus add sizing support for Videos as well.
 */

/* eslint complexity: "off" */
function parseNextNumber(str, pos, max) {
  var code,
    start = pos,
    result = {
      ok: false,
      pos: pos,
      value: ''
    };

  code = str.charCodeAt(pos);

  while (
    (pos < max && code >= 0x30 /* 0 */ && code <= 0x39 /* 9 */) ||
    code === 0x25 /* % */
  ) {
    code = str.charCodeAt(++pos);
  }

  result.ok = true;
  result.pos = pos;
  result.value = str.slice(start, pos);

  return result;
}

function parseImageSize(str, pos, max) {
  var code,
    result = {
      ok: false,
      pos: 0,
      width: '',
      height: ''
    };

  if (pos >= max) {
    return result;
  }

  code = str.charCodeAt(pos);

  if (code !== 0x3d /* = */) {
    return result;
  }

  pos++;

  // size must follow = without any white spaces as follows
  // (1) =300x200
  // (2) =300x
  // (3) =x200
  code = str.charCodeAt(pos);
  if (code !== 0x78 /* x */ && (code < 0x30 || code > 0x39) /* [0-9] */) {
    return result;
  }

  // parse width
  var resultW = parseNextNumber(str, pos, max);
  pos = resultW.pos;

  // next charactor must be 'x'
  code = str.charCodeAt(pos);
  if (code !== 0x78 /* x */) {
    return result;
  }

  pos++;

  // parse height
  var resultH = parseNextNumber(str, pos, max);
  pos = resultH.pos;

  result.width = resultW.value;
  result.height = resultH.value;
  result.pos = pos;
  result.ok = true;
  return result;
}


/**
 * A minimalist `markdown-it` plugin for parsing video/audio references inside
 * markdown image syntax as `<video>` / `<audio>` tags.
 *
 * @namespace HTML5Media
 */

// We can only detect video/audio files from the extension in the URL.
// We ignore MP1 and MP2 (not in active use) and default to video for ambiguous
// extensions (MPG, MP4)
const validAudioExtensions = ['aac', 'm4a', 'mp3', 'oga', 'ogg', 'wav'];
const validVideoExtensions = ['mp4', 'm4v', 'ogv', 'webm', 'mpg', 'mpeg'];

/**
 * @property {Object} messages
 * @property {Object} messages.languageCode
 *  a set of messages identified with a language code, typically an ISO639 code
 * @property {String} messages.languageCode.messageKey
 *  an individual translation of a message to that language, identified with a
 *  message key
 * @typedef {Object} MessagesObj
 */
let messages = {
  en: {
    'html5 video not supported': 'Your browser does not support playing HTML5 video.',
    'html5 audio not supported': 'Your browser does not support playing HTML5 audio.',
    'html5 media fallback link': 'You can <a href="%s" download>download the file</a> instead.',
    'html5 media description': 'Here is a description of the content: %s'
  }
};

/**
 * You can override this function using options.translateFn.
 *
 * @param {String} language
 *  a language code, typically an ISO 639-[1-3] code.
 * @param {String} messageKey
 *  an identifier for the message, typically a short descriptive text
 * @param {String[]} messageParams
 *  Strings to be substituted into the message using some pattern, e.g., %s or
 *  %1$s, %2$s. By default we only use a simple %s pattern.
 * @returns {String}
 *  the translation to use
 * @memberof HTML5Media
 */
let translate = function(language, messageKey, messageParams) {

  // Revert back to English default if no message object, or no translation
  // for this language
  if (!messages[language] || !messages[language][messageKey])
  {language = 'en';}

  if (!messages[language])
  {return '';}

  let message = messages[language][messageKey] || '';

  if (messageParams)
  {for (let param of messageParams)
  {message = message.replace('%s', param);}}

  return message;
};


/**
 * A fork of the built-in image tokenizer which guesses video/audio files based
 * on their extension, and tokenizes them accordingly.
 *
 * @param {Object} state
 *  Markdown-It state
 * @param {Boolean} silent
 *  if true, only validate, don't tokenize
 * @param {MarkdownIt} md
 *  instance of Markdown-It used for utility functions
 * @returns {Boolean}
 * @memberof HTML5Media
 */
function tokenizeImagesAndMedia(state, silent, md) {
  let attrs, code, content, label, labelEnd, labelStart, pos, ref, res, title,
    token, tokens, start;
  let href = '',
    oldPos = state.pos,
    max = state.posMax,
    width = '',
    height = '';

  // Exclamation mark followed by open square bracket - ![ - otherwise abort
  if (state.src.charCodeAt(state.pos) !== 0x21 ||
    state.src.charCodeAt(state.pos + 1) !== 0x5B)
  {return false;}

  labelStart = state.pos + 2;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);

  // Parser failed to find ']', so it's not a valid link
  if (labelEnd < 0)
  {return false;}

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28) { // Parenthesis: (
    //
    // Inline link
    //

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!md.utils.isSpace(code) && code !== 0x0A) // LF \n
      {break;}
    }
    if (pos >= max)
    {return false;}

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!md.utils.isSpace(code) && code !== 0x0A)
      {break;}
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!md.utils.isSpace(code) && code !== 0x0A)
        {break;}
      }
    } else {
      title = '';
    }

    // [link](  <href>  "title" =WxH  )
    //                          ^^^^ parsing image size
    if (pos - 1 >= 0) {
      code = state.src.charCodeAt(pos - 1);

      // there must be at least one white spaces
      // between previous field and the size
      if (code === 0x20) {
        res = parseImageSize(state.src, pos, state.posMax);
        if (res.ok) {
          width = res.width;
          height = res.height;
          pos = res.pos;

          // [link](  <href>  "title" =WxH  )
          //                              ^^ skipping these spaces
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (code !== 0x20 && code !== 0x0a) {
              break;
            }
          }
        }
      }
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29) { // Parenthesis: )
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined')
    {return false;}

    if (pos < max && state.src.charCodeAt(pos) === 0x5B) { // Bracket: [
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label)
    {label = state.src.slice(labelStart, labelEnd);}

    ref = state.env.references[md.utils.normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  state.pos = pos;
  state.posMax = max;

  if (silent)
  {return true;}

  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  content = state.src.slice(labelStart, labelEnd);

  state.md.inline.parse(
    content,
    state.md,
    state.env,
    tokens = []
  );

  const mediaType = guessMediaType(href);
  const tag = mediaType == 'image' ? 'img' : mediaType;

  token = state.push(mediaType, tag, 0);
  token.attrs = attrs = [
    ['src', href]
  ];
  if (mediaType == 'image')
  {attrs.push(['alt', '']);}
  token.children = tokens;
  token.content = content;

  if (title)
  {attrs.push(['title', title]);}

  if (width !== '') {
    attrs.push(['width', width]);
  }

  if (height !== '') {
    attrs.push(['height', height]);
  }

  state.pos = pos;
  state.posMax = max;
  return true;

}


/**
 * Guess the media type represented by a URL based on the file extension,
 * if any
 *
 * @param {String} url
 *  any valid URL
 * @returns {String}
 *  a type identifier: 'image' (default for all unrecognized URLs), 'audio'
 *  or 'video'
 * @memberof HTML5Media
 */
function guessMediaType(url) {
  const extensionMatch = url.match(/\.([^/.]+)$/);
  if (extensionMatch === null)
  {return 'image';}
  const extension = extensionMatch[1];
  if (validAudioExtensions.indexOf(extension.toLowerCase()) != -1)
  {return 'audio';}
  else if (validVideoExtensions.indexOf(extension.toLowerCase()) != -1)
  {return 'video';}
  else
  {return 'image';}
}


/**
 * Render tokens of the video/audio type to HTML5 tags
 *
 * @param {Object} tokens
 *  token stream
 * @param {Number} idx
 *  which token are we rendering
 * @param {Object} options
 *  Markdown-It options, including this plugin's settings
 * @param {Object} env
 *  Markdown-It environment, potentially including language setting
 * @param {MarkdownIt} md
 *  instance used for utilities access
 * @returns {String}
 *  rendered token
 * @memberof HTML5Media
 */
function renderMedia(tokens, idx, options, env, md) {
  const token = tokens[idx];
  const type = token.type;
  if (type !== 'video' && type !== 'audio')
  {return '';}
  let attrs = options.html5Media[`${type}Attrs`].trim();
  if (attrs)
  {attrs = ` ${  attrs}`;}

  // We'll always have a URL for non-image media: they are detected by URL
  const url = token.attrs[token.attrIndex('src')][1];

  let width = '';
  let height = '';
  if (token.attrIndex('width') !== -1) {
    width = ` width=${token.attrs[token.attrIndex('width')][1]}`;
  }

  if (token.attrIndex('height') !== -1) {
    height = ` height=${token.attrs[token.attrIndex('height')][1]}`;
  }

  // Title is set like this: ![descriptive text](video.mp4 "title")
  const title = token.attrIndex('title') != -1 ?
    ` title="${md.utils.escapeHtml(token.attrs[token.attrIndex('title')][1])}"` :
    '';

  const fallbackText =
    `${translate(env.language, `html5 ${type} not supported`)  }\n${
      translate(env.language, 'html5 media fallback link', [url])}`;

  const description = token.content ?
    `\n${  translate(env.language, 'html5 media description', [md.utils.escapeHtml(token.content)])}` :
    '';

  return `<${type} src="${url}"${title}${attrs}${width}${height}>\n` +
    `${fallbackText}${description}\n` +
    `</${type}>`;
}


/**
 * The main plugin function, exported as module.exports
 *
 * @param {MarkdownIt} md
 *  instance, automatically passed by md.use
 * @param {Object} [options]
 *  configuration
 * @param {String} [options.videoAttrs='controls class="html5-video-player"']
 *  attributes to include inside `<video>` tags
 * @param {String} [options.audioAttrs='controls class="html5-audio-player"']
 *  attributes to include inside `<audio>` tags
 * @param {MessagesObj} [options.messages=built-in messages]
 *  human-readable text that is part of the output
 * @memberof HTML5Media
 */
function html5Media(md, options = {}) {
  if (options.messages)
  {messages = options.messages;}
  if (options.translateFn)
  {translate = options.translateFn;}

  const videoAttrs = options.videoAttrs !== undefined ?
    options.videoAttrs :
    'controls class="html5-video-player"';
  const audioAttrs = options.audioAttrs !== undefined ?
    options.audioAttrs :
    'controls class="html5-audio-player"';

  md.inline.ruler.at('image', (tokens, silent) => tokenizeImagesAndMedia(tokens, silent, md));

  md.renderer.rules.video = md.renderer.rules.audio =
    (tokens, idx, opt, env) => {
      opt.html5Media = {
        videoAttrs,
        audioAttrs
      };
      return renderMedia(tokens, idx, opt, env, md);
    };
}

module.exports = {
  html5Media,
  messages, // For partial customization of messages
  guessMediaType
};
