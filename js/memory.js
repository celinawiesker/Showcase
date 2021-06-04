var MemoryGame = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function () {
        Phaser.Scene.call(this, { "key": "Memory" });
    },
    init: function () { },
    preload: function () {
        this.load.image("button_grey", "../img/button_grey.png")
        this.load.image("memory_bg", "../img/memory_bg.png")

        this.load.image('cherry', '../img/sky/cloud_1.png');
        this.load.image('cake_rosa', '../img/sky/cloud_2.png');
        this.load.image('cake_orange', '../img/sky/cloud_3.png');
        this.load.image('cake_strawb', '../img/sky/cloud_4.png');
        this.load.image('bananas', '../img/sky/cloud_5.png');
        this.load.image('sandwich', '../img/sky/cloud_6.png');
        this.load.image('muffin', '../img/sky/cloud_7.png');
        this.load.image('orange', '../img/sky/cloud_8.png');
        this.load.image('cake_choc', '../img/sky/cloud_9.png');
        this.load.image('big_cake_choc', '../img/sky/cloud_10.png');
        this.load.image('cherry_cake', '../img/sky/cloud_11.png');
        this.load.image('waffer', '../img/sky/cloud_12.png');
    },
    create: function () {

        // Background
        let memory_bg = this.add.image(0, 0, 'memory_bg');
        memory_bg.setOrigin(0, 0);
        // End Background

        //Create Button
        this.clickButton = this.add.image(50, 50, 'button_grey')
            .setInteractive()
            .setScale(0.15)
            .on('pointerdown', () => this.getToStartScreen())
        // End Create Button

        //Loading the images
        let cloud1 = this.add.image(0, 0, 'cherry');
        let cloud2 = this.add.image(0, 0, 'cake_rosa');
        let cloud3 = this.add.image(0, 0, 'cake_orange');
        let cloud4 = this.add.image(0, 0, 'cake_strawb');
        let cloud5 = this.add.image(0, 0, 'bananas');
        let cloud6 = this.add.image(0, 0, 'sandwich');
        let cloud7 = this.add.image(0, 0, 'muffin');
        let cloud8 = this.add.image(0, 0, 'orange');
        let cloud9 = this.add.image(0, 0, 'cake_choc');
        let cloud10 = this.add.image(0, 0, 'big_cake_choc');
        let cloud11 = this.add.image(0, 0, 'cherry_cake');
        let cloud12 = this.add.image(0, 0, 'waffer');
        // End Loading Images 

        // Creating an Array with the images
        let cards = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7, cloud8, cloud9, cloud10, cloud11, cloud12]
        let openedCards = []
        // End Array

        
        function between(min, max) {
            return Math.floor(
                Math.random() * (max - min + 1) + min
            )
        }

        // Kann ich das hier nutzen, um meine Karten neu 
        //zu sortieren oder reicht neu laden, um die Karten neu zu verteilen?
        
        // function shuffle(array) {
        //     var currentIndex = array.length, temporaryValue, randomIndex;

        //     while (currentIndex !== 0) {
        //         randomIndex = Math.floor(Math.random() * currentIndex);
        //         currentIndex -= 1;
        //         temporaryValue = array[currentIndex];
        //         array[currentIndex] = array[randomIndex];
        //         array[randomIndex] = temporaryValue;
        //     }

        //     return array;
        // };

        // empty the openCards array
        openedCards = [];

        //Positioning with for-loop
        var i = between(0, cards.length)
        var j = between(0, cards.length)

        // Wieso sehe ich keine Images und wie bekomme ich die in einem Ratser dargestellt?
        for (i = 0; i < cards.length; i++) {
            for (i = 0; i < cards.length; i++) {
                cards[index].setScale(0.3)
                cards[index].setPosition(cards[j].x, cards[j].y);
                cards[index].setInteractive();
                cards[index].setName(index)
            }
        }

        // Random Zahl increment um 1 und wenn die Zahl höher als 3 ist, dann wieder auf Null, also zum Anfang
        i = i + 1;
        if (i == 4) {
            i = 0;
        }

        j = j + 1;
        if (j == 4) {
            j = 0;
        }
    },

    update: function () { },

    // Button Functions
    getToStartScreen() {
        this.scene.start('StartScreen');
    },
    // End Buttons functions 
});