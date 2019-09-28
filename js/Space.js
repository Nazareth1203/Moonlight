class Space extends Phaser.Scene {
    constructor() {
        super({ key: 'space' });
    }

    preload() {
      this.load.image('nave','assets/space/navenumber-one.png');
    //  this.load.image('fondo', 'assets/space/estrellado.png');
      this.load.image('bomba', 'assets/levels/bomba.png');
      //this.load.image('bomba', 'assets/levels/bomba.png');

    }

    create() {

    //  const background = this.add.image(400, 300, 'fondo');
      //background.displayWidth = this.game.config.width;
    //  background.displayHeight = this.game.config.height;

   const nave = this.add.image(400, 520, 'nave');
    nave.displayWidth = 100;
    nave.displayHeight = 145;

    const bomba = this.add.image(100, 250, 'bomba');
     bombas.displayWidth = 50;
     bombas.displayHeight = 90;

     //const bomba = this.add.image(90, 240, 'bomba');
      //bombas.displayWidth = 50;
      //bombas.displayHeight = 90;



    }
}
