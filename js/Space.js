class Space extends Phaser.Scene {
  constructor() {
    super({ key: 'space' });
  }

  preload() {
    this.load.image('nave','assets/space/navenumber-one.png');
    this.load.image('bomb', 'assets/space/bomb.png');
    this.load.image('fondo', 'assets/levels/fondo.jpg');

  }

  create() {
    const fondo = this.add.image(400, 300, 'fondo');
    background.displayWidth = this.game.config.width;
    background.displayHeight = this.game.config.height;

    this.ship = this.physics.add.image(400, 520, 'nave');
    this.ship.displayWidth = 100;
    this.ship.displayHeight = 145;
    this.ship.setCollideWorldBounds(true);

    this.bombs = this.add.group();
    this.bombs.enableBody = true;
    this.bombs.physicsBodyType = Phaser.Physics.ARCADE;

    this.cursors = this.input.keyboard.createCursorKeys();

    //const atras = this.add.image(500, 460, 'atras');
    //numbertree.displayWidth =90;
    //numbertree.displayHeight = 90;
    //numbertree.setInteractive();
    //
    //numbertree.once('pointerup', () => this.scene.start('levels'), this);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.ship.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      this.ship.setVelocityX(200);
    } else {
      this.ship.setVelocityX(0);
    }

    // Create random bombs
    if (this.bombs.children.lenght < 25) {
      const bomb = this.bombs.create((Math.random() * 650) + 50, 650, 'bomb');
      bomb.body.velocity.y = -100;
      bomb.anchor.set(.5);
      bomb.width = 50;
      bomb.height = 50;
    }

    for (let i = 0; i < this.bombs.children.lenght; i += 1) {
      if (this.bombs.children[i].y < 10) {
        const bomb = this.bombs.children[i];
        bomb.y = 650;
        bomb.x = (Math.random() * 650) + 50;
      }
    }
  }
}
