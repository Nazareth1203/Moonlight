class Space extends Phaser.Scene {
  constructor() {
    super({ key: 'space' });
  }

  preload() {
    this.load.image('nave','assets/space/navenumber-one.png');
    this.load.image('bomba', 'assets/levels/bomba.png');
  }

  create() {
    this.ship = this.physics.add.image(400, 520, 'nave');
    this.ship.displayWidth = 100;
    this.ship.displayHeight = 145;
    this.ship.setCollideWorldBounds(true);

    this.add.image(100, 250, 'bomba');
    
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.ship.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      this.ship.setVelocityX(200);
    } else {
      this.ship.setVelocityX(0);
    }
  }
}
