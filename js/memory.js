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

        cloud1.setName('c1');
        cloud2.setName('c2');
        cloud3.setName('c3');
        cloud4.setName('c4');
        cloud5.setName('c5');
        cloud6.setName('c6');
        cloud7.setName('c7');
        cloud8.setName('c8');
        cloud9.setName('c9');
        cloud10.setName('c10');
        cloud11.setName('c11');
        cloud12.setName('c12');

        let cards = [cloud1, cloud2, cloud3, cloud4 ,cloud5, cloud6, cloud7, cloud8, cloud9, cloud10, cloud11, cloud12, cloud1, cloud2, cloud3, cloud4 ,cloud5, cloud6, cloud7, cloud8, cloud9, cloud10, cloud11, cloud12]

        function shuffleArray(inputArray) {
            inputArray.sort(() => Math.random() - 0.5);
        }

        shuffleArray(cards);
        //console.log(cards);

        // Grid    //
        let rows = 3;
        let columns = 4;
        let rowDist = 10;
        let columnDist = 10;
        rows + columns == cards.length;

        // For Loop //
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                cards[i + j].setPosition(rowDist * rows, columnDist * columns);
                cards[i + j].setScale(0.3);
                cards[i + j].setInteractive();
            }
        }
        // End for loop //     
        // End Grid //
    },

    update: function () { },

    // Button Functions
    getToStartScreen() {
        this.scene.start('StartScreen');
    },
    // End Buttons functions 

    // Shuffle function
    //     function shuffle(a) {
    //         for(let i = a.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [a[i], a[j]] = [a[j], a[i]];
    // }
    // return a;
    //         },

    // Object.defineProperty(Array.prototype, 'shuffle', {
    //     value: function() {
    //         for (let i = this.length - 1; i > 0; i--) {
    //             const j = Math.floor(Math.random() * (i + 1));
    //             [this[i], this[j]] = [this[j], this[i]];
    //         }
    //         return this;
    //     }
    // });

    // End shuffle function//
    //https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array//

});