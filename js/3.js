var config = {
    width: 800,
    height: 600,
   type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

var graphics;

//var game = new Phaser.Game(config);

function create ()
{

    var gl = this.sys.game.renderer.gl;

    var renderer = this.sys.game.renderer;


    var graphics = this.add.graphics();

    var color = 0xffffff;
    var alpha = 1;

    graphics.fillStyle(color, alpha);

    graphics.fillCircle(400, 100, 40);

    graphics.fillStyle(color, alpha);

    graphics.fillCircle(400, 350, 100);
}

    //var gl = this.sys.game.renderer.gl;

    //var renderer = this.sys.game.renderer;

    //var modeIndex = renderer.addBlendMode([ gl.ZERO, gl.SRC_COLOR ], gl.FUNC_ADD);

    //var graphics = this.add.graphics();

   // var color = 0xffffff;
    //var alpha = 1;

  //  graphics.fillStyle(color, alpha);

   // graphics.fillCircle(400, 100, 80);

    //this.add.image(400, 300, 'turkey').setBlendMode(modeIndex);


