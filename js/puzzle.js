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
            // .on('pointerover', () => this.enterButtonHoverState())
            // .on('pointerout', () => this.enterButtonRestState());

        // End Create Button
    },


    update: function () { },

    // Button Functions
    getToStartScreen() {
        this.scene.start('StartScreen');
    },

    // enterButtonHoverState() {
    //     this.clickButton.setStyle({ fill: '#ff0' });
    // },

    // enterButtonRestState() {
    //     this.clickButton.setStyle({ fill: '#0f0' });
    //   }

    // End Buttons functions 
});

