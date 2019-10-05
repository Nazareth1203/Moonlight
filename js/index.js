const config = {
  height: 600,
  physics: {
    default: 'arcade'
  },
  scene: [MainMenu, Levels, Space, ],
  type: Phaser.AUTO,
  width: 800
};

new Phaser.Game(config);
