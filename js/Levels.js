class Levels extends Phaser.Scene {
  constructor() {
    super({ key: 'levels' });
  }

  preload() {
    this.load.image('background','assets/levels/nivel.png');
    this.load.image('number-one','assets/levels/number-one.png');
    this.load.image('number-two','assets/levels/number-two.png');
    this.load.image('number-tree','assets/levels/number-tree.png');
    //this.load.image('number-four','assets/levels/number-four.png');
    //this.load.image('number-five','assets/levels/number-five.png');
  }

  create() {
    const background = this.add.image(400, 300, 'background');
    background.displayWidth = this.game.config.width;
    background.displayHeight = this.game.config.height;

    var graphics = this.add.graphics();
    var color = 0xffffff;
    var alpha = 1;

    // primero circulo:
    graphics.fillStyle(color, alpha);
    graphics.fillCircle(490, 220, 80);

    // segundo circulo:
    graphics.fillStyle(color, alpha);
    graphics.fillCircle(280, 340, 80);

    // tercer circulo:
    graphics.fillStyle(color, alpha);
    graphics.fillCircle(500, 460, 80);

     //cuarto circulo:
  //  graphics.fillStyle(color, alpha);
    //graphics.fillCircle(625, 340, 40);

  //  quinto circulo:
   //graphics.fillStyle(color, alpha);
    //graphics.fillCircle(165, 340, 40);

    //number-one
    const numberOne = this.add.image(490, 210, 'number-one');
    numberOne.displayWidth = 90;
    numberOne.displayHeight = 90;
    numberOne.setInteractive();
    numberOne.once('pointerup', () => this.scene.start('space'), this);

    //nunber-two
  const numbertwo = this.add.image(280, 340, 'number-two');
  numbertwo.displayWidth = 80;
  numbertwo.displayHeight = 80;
  numbertwo.setInteractive();
  numbertwo.once('pointerup', () => this.scene.start('nevel'), this);

    const numbertree = this.add.image(500, 460, 'number-tree');
    numbertree.displayWidth =90;
    numbertree.displayHeight = 90;
    numbertree.setInteractive();
    numbertree.once('pointerup', () => this.scene.start('nivel'), this);

  //const numberfour = this.add.image(160, 340, 'number-four');
    //numberfour.displayWidth = 80;
    //numberfour.displayHeight = 80;
    //numberfour.setInteractive();
    //numberfour.once('pointerup', () => this.scene.start('nivel4'), this);

    //const numberfive = this.add.image(400, 350, 'number-five');
    //numberfive.displayWidth = 80;
    //numberfive.displayHeight = 80;
    //numberfive.setInteractive();
    //numberfive.once('pointerup', () => this.scene.start('final'), this);
  }
}
