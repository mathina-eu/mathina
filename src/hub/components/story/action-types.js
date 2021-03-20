import { gsap } from 'gsap';

class Action {
  constructor(props) {
    this.autoProgress = false;
  }

  execute() {}
}

export class AnimationAction extends Action {
  constructor({ vars, target, ...rest }) {
    super(rest);
    this.target = target;
    this.type = 'animation';
    this.vars = vars;
    this.autoProgress = true;
  }

  execute() {
    super.execute();
    gsap.to(`#${this.target}`, this.vars);
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

  execute(context) {
    super.execute();
    const path = `${context.imgRoot}/bg/${this.src}`;
    const bgs = context.backgrounds.filter(bg => bg.src !== path);
    context.backgrounds = [...bgs, { src: path, style: this.style }];
  }
}

export class ImageAction extends Action {
  constructor({ id, src, align, valign, style, autoProgress, ...rest }) {
    super(rest);
    this.type = 'image';
    this.id = id;
    this.src = src;
    this.align = align ? align : 'none';
    this.valign = valign ? valign : 'none';
    this.style = style;
    this.autoProgress = autoProgress !== 'false';
  }

  execute(context) {
    super.execute();
    const path = `${context.imgRoot}/${this.src}`;

    if (context.activeDirection === 'back') {
      context.images = context.images.filter(img => img.src !== path);
      return;
    }

    const images = context.images.filter(img => img.src !== path && (!img.id || img.id !== this.id));
    images.push({
      id: this.id,
      src: path,
      style: this.style,
      position: { vertical: this.valign, horizontal: this.align }
    });
    context.images = images;
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
   * @param {Object}
   * @param rest
   */
  constructor({ entries, ...rest }) {
    super(rest);
    this.type = 'dialog';
    this.entries = entries.map(({ text, char, mood }) => {
      return {
        text,
        char,
        mood: mood ? mood : 'normal',
      };
    });
  }

  execute(context) {
    super.execute();
    context.dialog.entries = this.entries;
    context.dialog.current = 0;
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
  }

  execute(context) {
    super.execute();

    if (this.src) {
      const path = `${context.imgRoot}/${this.src}`;
      context.images = context.images.filter(img => img.src !== path);
    } else {
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
  }

  static create({ type, ...props }) {
    const actionClassName = `${type.charAt(0).toUpperCase()}${type.slice(1)}Action`;
    return new this.classes[actionClassName](props);
  }
}
