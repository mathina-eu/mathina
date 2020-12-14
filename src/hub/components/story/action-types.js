class Action {
  constructor(props) {
    this.autoProgress = false;
  }
}

export class BackgroundAction extends Action {
  constructor({ src, style, ...rest }) {
    super(rest);
    this.style = style;
    this.type = 'background';
    this.src = src;
    this.autoProgress = true;
  }
}

export class ImageAction extends Action {
  constructor({ id, src, align, style, autoProgress, ...rest }) {
    super(rest);
    this.type = 'image';
    this.id = id;
    this.src = src;
    this.align = align ? align : 'center';
    this.style = style;
    console.log('Auto Progress', autoProgress, true, false, 'true');
    this.autoProgress = autoProgress !== 'false';
  }
}

export class SceneTextAction extends Action {
  constructor({ text, ...rest }) {
    super(rest);
    this.type = 'sceneText';
    this.text = text;
  }
}

export class DialogAction extends Action {
  /**
   *
   * @param {{text: String, char: String, [mood]: String}[]} entries
   * @param {Object} avatarAlign - { mathina: 'right', wizard: 'left', ... }
   * @param rest
   */
  constructor({ entries, avatarAlign, ...rest }) {
    super(rest);
    this.type = 'dialog';
    this.entries = entries.map(({ text, char, mood }) => {
      return {
        text,
        char,
        mood: mood ? mood : 'normal',
      };
    });

    this.avatarAlign = avatarAlign;
  }
}

export class GameAction extends Action {
  constructor({ text, cta = 'Try it yourself!', url, ...rest }) {
    super(rest);
    this.type = 'game';
    this.text = text;
    this.cta = cta;
    this.url = url;
  }
}

export class ClearImageAction extends Action {
  constructor({ id, ...rest }) {
    super(rest);
    this.type = 'clearImage';
    this.id = id;
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
  }

  static create({ type, ...props }) {
    const actionClassName = `${type.charAt(0).toUpperCase()}${type.slice(1)}Action`;
    return new this.classes[actionClassName](props);
  }
}
