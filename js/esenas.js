var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics:{
    default:'arcade',
    arcade:{
      gravity: { y:400},
      dubug: false
    }
  },
  scene:{
    preload: preload,
    create: create,
    update: update,
  }
};

var game = new Phaser.Game(config);

//aqui estan las imagenes .
function preload() {
this.load.image('sky','assets/Palabrados.png');
this.load.image('comienzo','assets/play.png');
this.load.image('bomb', 'assets/bomb.png');
this.load.spritesheet(
  'dude',
  'assets/dude.png',
  { frameWidth: 15, frameHeight: 40}
);
}

//sirve para hacer mas grande las imagenes.
function create(){
const background = this.add.image(400, 300, 'sky');
background.displayWidth = game.config.width;
background.displayHeight = game.config.height;

const play = this.add.image(400, 500, 'comienzo');
play.displayWidth = 100;
play.displayHeight = 80;


cursors =  this.input.keyboard.createCursorKeys();

}



function update(){

}
