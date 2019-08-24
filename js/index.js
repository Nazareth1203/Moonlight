const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      dubug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('control', 'assets/control.jpg');
}

function create(){
  const background = this.add.image(400, 300, 'control');
  background.displayWidth = game.config.width;
  background.displayHeight = game.config.height;
}

function update() { }
