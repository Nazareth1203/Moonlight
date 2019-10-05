class Space extends Phaser.Scene {
  constructor() {
    super({ key: 'space' });
  }

  preload() {
    this.load.image('nave','assets/space/navenumber-one.png');
    this.load.image('bomb', 'assets/space/bomb.png');
    this.load.image('bomb', 'assets/space/bomb.png');
    this.load.image('bomb', 'assets/space/bomb.png');
    this.load.image('bomb', 'assets/space/bomb.png');
    this.load.image('bomb', 'assets/space/bomb.png');
    this.load.image('bomb', 'assets/space/bomb.png');
    this.load.image('bomb', 'assets/space/bomb.png');
    this.load.image('bomb', 'assets/space/bomb.png');
    this.load.image('bomb', 'assets/space/bomb.png');
    this.load.image('bomb', 'assets/space/bomb.png');
  }

  create() {
    this.ship = this.physics.add.image(400, 520, 'nave');
    this.ship.displayWidth = 100;
    this.ship.displayHeight = 145;
    this.ship.setCollideWorldBounds(true);

    this.add.image(100, 250, 'bomb');
    this.add.image(150, 290, 'bomb');
    this.add.image(200, 250, 'bomb');
    this.add.image(250, 250, 'bomb');
    this.add.image(300, 280, 'bomb');
    this.add.image(350, 250, 'bomb');
    this.add.image(400, 260, 'bomb');
    this.add.image(450, 250, 'bomb');
    this.add.image(500, 295, 'bomb');
    this.add.image(550, 280, 'bomb');
    this.add.image(600, 250, 'bomb');
    this.add.image(650, 265, 'bomb');



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
