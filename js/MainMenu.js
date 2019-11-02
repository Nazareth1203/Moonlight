class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'mainmenu' });
    }

    preload() {
        this.load.image('control', 'assets/space/fondoinicio1.png');
        this.load.image('play', 'assets/mainmenu/play.png');
    }

    create() {
        const background = this.add.image(400, 300, 'control');
        background.displayWidth = this.game.config.width;
        background.displayHeight = this.game.config.height;

        const play = this.add.image(400, 530, 'play');
        play.setInteractive();
        play.once('pointerup', () => this.scene.start('levels'), this);
    }
}
