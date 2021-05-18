import { gsap } from 'gsap';

export const GENERIC_CHAR = 'generic-char';

class Action {
  constructor(props) {
    this.autoProgress = false;
    this.tag = props.tag || '';
  }

  execute() {}
}

export class AnimationAction extends Action {
  constructor({ vars, varsBack, target, ...rest }) {
    super(rest);
    this.target = target;
    this.type = 'animation';
    this.vars = vars;
    this.varsBack = varsBack;
    this.autoProgress = true;
    this.historyStack = [];
  }

  execute(context) {
    super.execute();
    if (context.activeDirection === 'back') {
      const el = document.getElementById(this.target);
      if (this.varsBack) {
        gsap.to(`#${this.target}`, {
          ...this.varsBack, onComplete: () => {
            el._gsap = undefined;
          }
        });
      } else {
        el.style.cssText = this.historyStack.pop();
      }
    } else {
      const el = document.getElementById(this.target);
      if (!this.varsBack) {
        this.historyStack.push(document.getElementById(this.target).style.cssText);
      }
      gsap.to(`#${this.target}`, { ...this.vars, onComplete: () => { el._gsap = undefined; } });
    }
  }
}

export class BackgroundAction extends Action {
  constructor({ id, src, style, parallax = 'back1', ...rest }) {
    super(rest);
    this.style = style;
    this.type = 'background';
    this.src = src;
    this.autoProgress = true;
    this.id = id;
    this.parallax = parallax;
  }

  execute(context) {
    super.execute();
    const path = this.getAssetPath(context.imgRoot);

    if (context.activeDirection === 'back') {
      context.backgrounds = context.backgrounds.filter(bg => bg.src !== path);
      return;
    }

    const bgs = context.backgrounds.filter(bg => bg.src !== path);
    context.backgrounds = [...bgs, { id: this.id, src: path, style: this.style, parallax: this.parallax }];
  }

  getAssetPath(imgRoot) {
    let path;
    if (this.src.startsWith('$COMMON')) {
      path = `/stories/common/${this.src.replace('$COMMON/', '')}`;
    } else {
      path = `${imgRoot}/bg/${this.src}`;
    }
    return path;
  }
}

export class VideoAction extends Action {
  constructor({ image, entries, width, height, text, ...rest }) {
    super(rest);
    this.type = 'video';
    this.image = image || '';
    this.entries = entries;
    this.width = width;
    this.text = text || '';
  }

  execute(context) {
    super.execute();
    for (let e of this.entries) {
      e.path = `${context.storyRoot}/video/${e.src}`;
    }

    if (this.image) {
      this.imagePath = `${context.storyRoot}/img/${this.image}`;
    } else {
      this.imagePath = null;
    }
  }
}

export class ClearBackgroundAction extends Action {
  constructor({ id, ...rest }) {
    super(rest);
    this.type = 'clearBackground';
    this.id = id;
    this.autoProgress = true;
    this.historyStack = [];
  }

  execute(context) {
    super.execute();

    if (context.activeDirection === 'back') {
      if (this.historyStack.length > 0) {
        context.backgrounds = [...context.backgrounds, this.historyStack.pop()];
      }
      return;
    }

    if (this.src) {
      const path = `${context.imgRoot}/bg/${this.src}`;
      context.backgrounds = context.backgrounds.filter(bg => bg.src !== path);
    } else {
      const bg = context.backgrounds.find(bg => bg.id === this.id);
      this.historyStack.push(bg);
      context.backgrounds = context.backgrounds.filter(bg => bg.id !== this.id);
    }
  }
}

export class ImageAction extends Action {
  constructor({ id, noOverflow, src, align, valign, style, autoProgress, parallax = 'back1', ...rest }) {
    super(rest);
    this.type = 'image';
    this.id = id;
    this.src = src;
    this.align = align ? align : 'none';
    this.valign = valign ? valign : 'none';
    this.style = style;
    this.autoProgress = autoProgress !== 'false';
    this.parallax = parallax;
    this.noOverflow = noOverflow || false;
  }

  execute(context) {
    super.execute();
    const path = this.getAssetPath(context.imgRoot);

    if (context.activeDirection === 'back') {
      context.images = context.images.filter(img => img.src !== path);
      return;
    }

    const images = context.images.filter(img => {
      if (this.id) {
        return img.id !== this.id;
      }
      return img.src !== path;
    });
    images.push({
      id: this.id,
      src: path,
      style: this.style,
      position: { vertical: this.valign, horizontal: this.align },
      parallax: this.parallax,
      noOverflow: this.noOverflow,
    });
    context.images = images;
  }

  getAssetPath(imgRoot) {
    let path;
    if (this.src.startsWith('$COMMON')) {
      path = `/stories/common/${this.src.replace('$COMMON/', '')}`;
    } else {
      path = `${imgRoot}/${this.src}`;
    }
    return path;
  }
}

export class SceneTextAction extends Action {
  constructor({ text, style, ...rest }) {
    super(rest);
    this.type = 'sceneText';
    this.text = text;
    this.style = style;
  }
}

export class DialogAction extends Action {
  /**
   *
   * @param {{text: String, char: String, [mood]: String}[]} entries
   * @param {Object}
   * @param rest
   */
  constructor({ entries, style, avatarAlign, ...rest }) {
    super(rest);
    this.style = style;
    this.type = 'dialog';
    this.avatarAlign = avatarAlign || {};
    this.entries = entries.map((
      { text, char = GENERIC_CHAR, mood= 'normal', charName = null, exposition = null }
    ) => {
      return {
        text,
        char,
        charName,
        mood,
        exposition,
      };
    });
  }

  execute(context) {
    super.execute();
    if (context.activeDirection === 'back') {
      context.dialog.current = this.entries.length - 1;
    } else {
      context.dialog.current = 0;
    }
    context.dialog.entries = this.entries;
    context.dialog.avatarAlign = this.avatarAlign;
    context.dialog.style = this.style;
  }
}

export class GameAction extends Action {
  constructor({
    text,
    cta = 'Try it yourself!',
    toolbarText = '',
    url,
    img,
    toolbarImg,
    ...rest
  }) {
    super(rest);
    this.type = 'game';
    this.text = text;
    this.toolbarText = toolbarText;
    this.cta = cta;
    this.url = url;
    this.img = img;
    this.toolbarImg = toolbarImg;
  }

  execute(context) {
    super.execute();
    context.isLastGameFinished = false;
  }
}

export class ClearImageAction extends Action {
  constructor({ id, ...rest }) {
    super(rest);
    this.type = 'clearImage';
    this.id = id;
    this.autoProgress = true;
    this.historyStack = [];
  }

  execute(context) {
    super.execute();

    if (context.activeDirection === 'back') {
      if (this.historyStack.length > 0) {
        context.images = [...context.images, this.historyStack.pop()];
      }
      return;
    }

    if (this.src) {
      // TODO: undocumented and doesn't work with back...
      const path = `${context.imgRoot}/${this.src}`;
      context.images = context.images.filter(img => img.src !== path);
    } else {
      const img = context.images.find(img => img.id === this.id);
      let el = document.getElementById(this.id);
      img.style = el?.style?.cssText;
      this.historyStack.push(img);
      context.images = context.images.filter(img => img.id !== this.id);
    }
  }
}

export class ActionFactory {
  static classes = {
    BackgroundAction,
    ImageAction,
    SceneTextAction,
    DialogAction,
    GameAction,
    ClearImageAction,
    AnimationAction,
    ClearBackgroundAction,
    VideoAction,
  }

  static create({ type, ...props }) {
    const actionClassName = `${type.charAt(0).toUpperCase()}${type.slice(1)}Action`;
    return new this.classes[actionClassName](props);
  }
}
