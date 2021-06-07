var Puzzle = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function () {
        Phaser.Scene.call(this, { "key": "Puzzle" });
    },
    init: function () { },
    preload: function () {
        this.load.image("button_grey", "../img/button_grey.png")
        this.load.image("button_green", "../img/button_green.png")
    },
    create: function () {

        var text = this.add.text(
            640,
            360,
            "Puzzle",
            {
                fontSize: 50,
                color: "#000000",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);


        //Create Button
        this.clickButton = this.add.image(50, 50, 'button_grey')
            .setInteractive()
            .setScale(0.15)
            .on('pointerdown', () => this.getToStartScreen())
        // End Create Button
    },


    update: function () { },

    // Button Functions
    getToStartScreen() {
        this.scene.start('StartScreen');
    }
    // End Buttons functions 
});

