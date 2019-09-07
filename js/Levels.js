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


    var gl = this.sys.game.renderer.gl;
    var renderer = this.sys.game.renderer;

    var graphics = this.add.graphics();
    var color = 0xffffff;
    var alpha = 1;

    graphics.fillStyle(color, alpha);
    graphics.fillCircle(400, 100, 40);

//segundo circulo

    graphics.fillStyle(color, alpha);
    graphics.fillCircle(400, 350, 100);
  }
}
