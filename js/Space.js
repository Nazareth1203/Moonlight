class Space extends Phaser.Scene {
  constructor() {
    super({ key: 'space' });
  }

  preload() {
    this.load.image('nave','assets/space/navenumber-one.png');
    this.load.image('bomba', 'assets/levels/bomba.png');
  }

  create() {
    const nave = this.add.image(400, 520, 'nave');
    nave.displayWidth = 100;
    nave.displayHeight = 145;

    const bomba = this.add.image(100, 250, 'bomba');
    // bomba.displayWidth = 50;
    // bomba.displayHeight = 90;

  }
}
