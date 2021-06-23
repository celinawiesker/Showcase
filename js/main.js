var StartScreen = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function () {
        Phaser.Scene.call(this, { "key": "StartScreen" });
    },
    init: function () { },
    preload: function () {
        this.load.image("startScreen_bg", "../img/startScreen_bg.png")
        this.load.image("stoneAndShell", "../img/stoneAndShell.svg")
        this.load.image("clouds", "../img/clouds.svg")
        this.load.image("sign", "../img/sign.svg")
    },
    create: function () {
        /* BACKGROUND */
        // Insert Background
        let startScreen_bg = this.add.image(0, 0, 'startScreen_bg');
        startScreen_bg.setOrigin(0, 0);


        // Create Boxes for the touch-areas 0xffff69b4, 0xff90ee90, 0xff7ff7ff

        this.box_memory = this.add.rectangle(0, 0, 1280, 245)
            .setOrigin(0, 0)
            .setInteractive()
            .on('pointerdown', () => this.getToMemory())

        this.box_dragAndDrop = this.add.rectangle(625, 250, 620, 445)
            .setOrigin(0, 0)
            .setInteractive()
            .on('pointerdown', () => this.getToDragAndDrop())

        this.box_puzzle = this.add.rectangle(0, 250, 620, 445)
            .setOrigin(0, 0)
            .setInteractive()
            .on('pointerdown', () => this.getToPuzzle())

        // End Create Boxes for the touch-areas

        // Insert Inmages that get bigger when the mouse hovers over them 
        //to show that the area is clickable, but the 
        //complete area is the button so that it is easier to touch it.

        this.stone_hover = this.add.image(690, 600, 'stoneAndShell')
            .setOrigin(0, 0)
            .setScale(2)
            .setInteractive()
            .on('pointerover', () => this.hoverOverStoneAndShell())
            .on('pointerout', () => this.hoverOutStoneAndShell())


        this.cloud_hover = this.add.image(400, 50, 'clouds')
            .setOrigin(0, 0)
            .setScale(1.5)
            .setInteractive()
            .on('pointerover', () => this.hoverOverClouds())
            .on('pointerout', () => this.hoverOutClouds())

        this.sign_hover = this.add.image(150, 600, 'sign')
            .setOrigin(0, 0)
            .setScale(1.5)
            .setInteractive()
            .on('pointerover', () => this.hoverOverSign())
            .on('pointerout', () => this.hoverOutSign())

    },


    update: function () { },

    // Button Functions
    getToMemory() {
        this.scene.start('Memory');
    },

    getToPuzzle() {
        this.scene.start('Puzzle_Load');
    },

    getToDragAndDrop() {
        this.scene.start('DragAndDrop');
    },
    // End Buttons functions 

    // Hover over functions

    hoverOverStoneAndShell() {
        this.stone_hover.setScale(2.5)
        this.stone_hover.setPosition(660, 550)
            .on('pointerdown', () => this.getToDragAndDrop())
    },

    hoverOutStoneAndShell() {
        this.stone_hover.setScale(2)
        this.stone_hover.setPosition(690, 600)
    },

    hoverOverClouds() {
        this.cloud_hover.setScale(2)
        this.cloud_hover.setPosition(350, 50)
            .on('pointerdown', () => this.getToMemory())
    },

    hoverOutClouds() {
        this.cloud_hover.setScale(1.5)
        this.cloud_hover.setPosition(400, 50)
    },

    hoverOverSign() {
        this.sign_hover.setScale(2)
        this.sign_hover.setPosition(100, 500)
            .on('pointerdown', () => this.getToPuzzle())
    },

    hoverOutSign() {
        this.sign_hover.setScale(1.5)
        this.sign_hover.setPosition(150, 600)
    }

    // End Hover Over functions

});

