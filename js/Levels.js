class Levels extends Phaser.Scene {
  constructor() {
    super({ key: 'levels' });
  }

  preload() {
    this.load.image('universe','assets/universe.jpg');
  }

  create() {
    const background = this.add.image(400, 300, 'universe');
    background.displayWidth = this.game.config.width;
    background.displayHeight = this.game.config.height;
  }
}
