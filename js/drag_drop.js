var DragAndDrop = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function () {
        Phaser.Scene.call(this, { "key": "DragAndDrop" });
    },
    init: function () { },
    preload: function () {

        this.load.image("shell_green", "../img/underwater/shell_green.png")
        this.load.image("shell_yellow", "../img/underwater/shell_yellow.png")
        this.load.image("shell_pink", "../img/underwater/shell_pink.png")
        this.load.image("shell_purple", "../img/underwater/shell_purple.png")
        this.load.image("stone_green", "../img/underwater/stone_green.png")
        this.load.image("stone_yellow", "../img/underwater/stone_yellow.png")
        this.load.image("stone_pink", "../img/underwater/stone_pink.png")
        this.load.image("stone_purple", "../img/underwater/stone_purple.png")
        this.load.image("underwater_bg", "../img/underwater/underwater_bg.png")
        this.load.image("button_grey", "../img/button_grey.png")

    },
    create: function () {
        /* BACKGROUND */
        // Insert Background
        let underwater_bg = this.add.image(0, 0, 'underwater_bg');
        underwater_bg.setOrigin(0, 0);
        //this.underwater_bg.scale.startFullscreen();

        /*STONES*/
        // Lade die Bilder
        let stone_green = this.add.image(0, 0, 'stone_green');
        let stone_pink = this.add.image(0, 0, 'stone_pink');
        let stone_yellow = this.add.image(0, 0, 'stone_yellow');
        let stone_purple = this.add.image(0, 0, 'stone_purple');


        // Array mit möglichen Positionen, die ich mit einem for Loop zuweise 
        var stonesPos = [
            {
                "x": 150,
                "y": 675
            },
            {
                "x": 470,
                "y": 675
            },
            {
                "x": 800,
                "y": 675
            },
            {
                "x": 1125,
                "y": 675
            }
        ]
        /*SHELLS*/
        // Lade die Bilder
        let shell_green = this.add.image(0, 0, 'shell_green');
        let shell_pink = this.add.image(0, 0, 'shell_pink');
        let shell_yellow = this.add.image(0, 0, 'shell_yellow');
        let shell_purple = this.add.image(0, 0, 'shell_purple');

        // Array mit möglichen Positionen, die ich mit einem for Loop zuweise 
        var shellsPos = [
            {
                "x": 250,
                "y": 275
            },
            {
                "x": 500,
                "y": 275
            },
            {
                "x": 750,
                "y": 275
            },
            {
                "x": 1000,
                "y": 275
            }
        ]

        let shells = [shell_green, shell_pink, shell_yellow, shell_purple];
        let stones = [stone_green, stone_pink, stone_yellow, stone_purple];

        function between(min, max) {
            return Math.floor(
                Math.random() * (max - min + 1) + min
            )
        }

        // https://futurestud.io/tutorials/generate-a-random-number-in-range-with-javascript-node-js

        // between funktion, die Zahl random generiert zwischen 0 und 3
        var i = between(0, 3)
        var j = between(0, 3)

        // for loop, der die Steine darstellt und positioniert
        for (var index in stones) {



            // referenziere die Steine aus dem Array und setzte gleiche Merkmale
            //stones[index].setOrigin(0, 0);
            stones[index].setScale(0.5)
            stones[index].setPosition(stonesPos[i].x, stonesPos[i].y);
            stones[index].setName(index)


            // referenziere die Shells aus dem Array und setzte gleiche Merkmale
            //shells[index].setOrigin(0, 0);
            shells[index].setScale(0.3)
            shells[index].setPosition(shellsPos[j].x, shellsPos[j].y);
            shells[index].setInteractive();
            shells[index].setName(index)

            this.input.setDraggable(shells[index]);

            // [i] bezieht sich auf infos aus shells.pos array und stones.pos während [index] bezieht sich auf die array shells und stones
            var zone = this.add.zone(stonesPos[i].x, stonesPos[i].y, stones[index].width * 0.6, stones[index].height * 0.9).setRectangleDropZone(stones[index].width * 0.6, stones[index].height * 0.9);

            zone.setScale(0.4);
            zone.setName(index);
            // Random Zahl increment um 1 und wenn die Zahl höher als 3 ist, dann wieder auf Null, also zum Anfang

            //  Just a visual display of the drop zone

            var graphics = this.add.graphics();
            graphics.lineStyle(2, 0xffff00);
            //graphics.setOrigin(0,0);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);



            this.input.on('dragstart', function (pointer, gameObject) {

                this.children.bringToTop(gameObject);

            }, this);

            this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

                gameObject.x = dragX;
                gameObject.y = dragY;
            });

            this.input.on('dragenter', function (pointer, gameObject, dropZone) {
                graphics.clear();
                graphics.lineStyle(2, 0x00ffff);
                graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

            });

            this.input.on('dragleave', function (pointer, gameObject, dropZone) {
                graphics.clear();
                graphics.lineStyle(2, 0xffff00);
                graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

            });

            let successful = 0;
            this.input.on('drop', function (pointer, gameObject, dropZone) {
                if (dropZone.name == gameObject.name) {
                    gameObject.x = dropZone.x;
                    gameObject.y = dropZone.y;

                    gameObject.input.enabled = false;
                    successful = successful + 1;

                    if (successful == 4) {
                        console.log("nextLevel",)
                        this.scene.start('DragAndDrop');
                    }

                }
                else {
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;
                }
            });

            this.input.on('dragend', function (pointer, gameObject, dropped) {
                if (!dropped) {
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;
                }

                graphics.clear();
                graphics.lineStyle(2, 0xffff00);
                graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

            });

            // Random Zahl increment um 1 und wenn die Zahl höher als 3 ist, dann wieder auf Null, also zum Anfang
            i = i + 1;
            if (i == 4) {
                i = 0;
            }

            j = j + 1;
            if (j == 4) {
                j = 0;
            }

        }

        //Create Button
        this.clickButton = this.add.image(50, 50, 'button_grey')
            .setInteractive()
            .setScale(0.15)
            .on('pointerdown', () => this.getToStartScreen())
        // End Button


    }, // End create
    update: function () { },

    // Button Function
    getToStartScreen() {
        this.scene.start('StartScreen');
    },
    // End Buttons function

});

//References:
// Code components from: https://phaser.io/examples/v3/view/input/zones/drop-zone
// Scene Layout from: https://www.thepolyglotdeveloper.com/2020/09/switch-between-scenes-phaser-game/