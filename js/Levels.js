class Levels extends Phaser.Scene {
  constructor() {
    super({ key: 'levels' });
  }

  preload() {
    this.load.image('background','assets/levels/background.png');
    this.load.image('number-one','assets/levels/number-one.png');
<<<<<<< HEAD
    //this.load.image('number-two','assets/levels/number-two.png');

=======
    this.load.image('number-two','assets/levels/number-two.png');
    this.load.image('number-tree','assets/levels/number-tree.png');
>>>>>>> d9590f5c843f093c82c4c73ce3146e073419862f
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

    //number-one
    const numberOne = this.add.image(400, 530, 'number-one');
    numberOne.displayWidth = 80;
    numberOne.displayHeight = 80;
    numberOne.setInteractive();
    numberOne.once('pointerup', () => this.scene.start('space'), this);

<<<<<<< HEAD
    //const numberTwo = this.add.image(400, 530, 'number-two');
    //numberOne.displayWidth = 80;
    //numberOne.displayHeight = 80;
    //numberOne.setInteractive();
=======
    //nunber-two
    const numbertwo = this.add.image(625, 340, 'number-two');
    numbertwo.displayWidth = 80;
    numbertwo.displayHeight = 80;
    numbertwo.setInteractive();
    numbertwo.once('pointerup', () => this.scene.start('nevel'), this);

        const numbertree = this.add.image(400, 150, 'number-tree');
    numbertree.displayWidth = 80;
    numbertree.displayHeight = 80;
    numbertree.setInteractive();
    numbertree.once('pointerup', () => this.scene.start('nevel'), this);
>>>>>>> d9590f5c843f093c82c4c73ce3146e073419862f
  }
}
