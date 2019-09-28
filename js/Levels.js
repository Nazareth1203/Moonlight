class Levels extends Phaser.Scene {
  constructor() {
    super({ key: 'levels' });
  }

  preload() {
    this.load.image('background','assets/levels/background.png');
    this.load.image('number-one','assets/levels/number-one.png');
    //this.load.image('number-two','assets/levels/number-two.png');

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
    graphics.fillCircle(400, 150, 40);

    // segundo circulo:
    graphics.fillStyle(color, alpha);
    graphics.fillCircle(400, 350, 100);

    // tercer circulo:
    graphics.fillStyle(color, alpha);
    graphics.fillCircle(400, 530, 40);

    // cuarto circulo:
    graphics.fillStyle(color, alpha);
    graphics.fillCircle(625, 340, 40);

    //quinto circulo:
    graphics.fillStyle(color, alpha);
    graphics.fillCircle(165, 340, 40);

    const numberOne = this.add.image(400, 530, 'number-one');
    numberOne.displayWidth = 80;
    numberOne.displayHeight = 80;
    numberOne.setInteractive();
    numberOne.once('pointerup', () => this.scene.start('space'), this);

    //const numberTwo = this.add.image(400, 530, 'number-two');
    //numberOne.displayWidth = 80;
    //numberOne.displayHeight = 80;
    //numberOne.setInteractive();
  }
}
