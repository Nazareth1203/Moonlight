const config = {
  height: 600,
  physics: {
    default: 'arcade'
  },
  scene: [MainMenu, Levels, Space, Nevel, Nivel ],
  type: Phaser.AUTO,
  width: 800
};

new Phaser.Game(config);
