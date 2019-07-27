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

var player;
var stars;
 var cursors;

var game = new Phaser.Game(config);

function preload() {
this.load.image('sky','assets/animado.jpg');
this.load.image('ground', 'assets/platform.png');
this.load.image('star' , 'assets/star.png');
this.load.image('bomb', 'assets/bomb.png');
this.load.spritesheet(
  'dude',
  'assets/dude.png',
  { frameWidth: 32, frameHeight: 48}
);
}

function create(){
this.add.image(400, 300, 'sky');


createPlayer(this);

createAnimations(this);

cursors =  this.input.keyboard.createCursorKeys();

stars = this.physics.add.group({
  key: 'star',
  repeat: 11,
  setXY: { x: 12, y: 0, stepX: 70}
});

stars.children.iterate(function(child){
child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
});

this.physics.add.collider(player, platforms);
this.physics.add.collider(stars, platforms);

this.physics.add.overlap(player, stars, collectStar, null, this);
}

function update(){
if (cursors.left.isDown) {
  player.setVelocityX(-160);
  player.anims.play('left', true);
}else if(cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play('right', true);
}else {
  player.setVelocityX(0);
  // player.anims.play('turn', true);
}
if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
}
}



function createPlayer(crep){
  player = crep.physics.add.sprite(100, 450, 'dude');

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
}

function createAnimations(creA){
  creA.anims.create({
    key: 'left',
    frames: creA.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate:10,
    repeat:-1
  });

creA.anims.create({
    key: 'turn',
    frames: ({key: 'dude', frame: 4 }),
    frameRate:20,
  });

  creA.anims.create({
    key: 'right',
    frames: creA.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate:10,
    repeat:-1
  });
}

function collectStar(player, star){
  star.disableBody(true, true);
}

