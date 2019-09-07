var balas;
var nave;
var speed;
var stats;
var cursors;
var lastFired = 0;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('nave', 'assets/nave.png');
    this.load.image('balas', 'assets/bala.png');
}

function create ()
{
    var Balas = new Phaser.Class({

        Extends: Phaser.GameObjects.Image,

        initialize:

        function balas (scene)
        {
            Phaser.GameObjects.Image.call(this, scene, 0, 0, 'balas');

            this.speed = Phaser.Math.GetSpeed(400, 1);
        },

        fire: function (x, y)
        {
            this.setPosition(x, y - 50);

            this.setActive(true);
            this.setVisible(true);
        },

        update: function (time, delta)
        {
            this.y -= this.speed * delta;

            if (this.y < -50)
            {
                this.setActive(false);
                this.setVisible(false);
            }
        }

    });

    balas = this.add.group({
        classType: Balas,
        maxSize: 10,
        runChildUpdate: true
    });

    nave = this.add.sprite(400, 500, 'nave').setDepth(1);

    cursors = this.input.keyboard.createCursorKeys();

    speed = Phaser.Math.GetSpeed(300, 1);
}

function update (time, delta)
{
    if (cursors.left.isDown)
    {
        nave.x -= speed * delta;
    }
    else if (cursors.right.isDown)
    {
        nave.x += speed * delta;
    }

    if (cursors.up.isDown && time > lastFired)
    {
        var balas = balas.get();

        if (bullet)
        {
            balas.fire(ship.x, ship.y);
            lastFired = time + 50;
        }
     }
   }
