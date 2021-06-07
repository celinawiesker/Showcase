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
        let cloud13 = this.add.image(0, 0, 'cherry');
        let cloud14 = this.add.image(0, 0, 'cake_rosa');
        let cloud15 = this.add.image(0, 0, 'cake_orange');
        let cloud16 = this.add.image(0, 0, 'cake_strawb');
        let cloud17 = this.add.image(0, 0, 'bananas');
        let cloud18 = this.add.image(0, 0, 'sandwich');
        let cloud19 = this.add.image(0, 0, 'muffin');
        let cloud20 = this.add.image(0, 0, 'orange');
        let cloud21 = this.add.image(0, 0, 'cake_choc');
        let cloud22 = this.add.image(0, 0, 'big_cake_choc');
        let cloud23 = this.add.image(0, 0, 'cherry_cake');
        let cloud24 = this.add.image(0, 0, 'waffer');
        // End Loading Images

        cloud1.setName('cloud1');
        cloud2.setName('cloud2');
        cloud3.setName('cloud3');
        cloud4.setName('cloud4');
        cloud5.setName('cloud5');
        cloud6.setName('cloud6');
        cloud7.setName('cloud7');
        cloud8.setName('cloud8');
        cloud9.setName('cloud9');
        cloud10.setName('cloud10');
        cloud11.setName('cloud11');
        cloud12.setName('cloud12');
        cloud13.setName('cloud1');
        cloud14.setName('cloud2');
        cloud15.setName('cloud3');
        cloud16.setName('cloud4');
        cloud17.setName('cloud5');
        cloud18.setName('cloud6');
        cloud19.setName('cloud7');
        cloud20.setName('cloud8');
        cloud21.setName('cloud9');
        cloud22.setName('cloud10');
        cloud23.setName('cloud11');
        cloud24.setName('cloud12');

        let cards = [cloud1, cloud2, cloud3, cloud4 ,cloud5, cloud6, cloud7, cloud8, cloud9, cloud10, cloud11, cloud12, cloud1, cloud2, cloud3, cloud4 , cloud5, cloud6, cloud7, cloud8, cloud9, cloud10, cloud11, cloud12]

        function shuffleArray(inputArray) {
            inputArray.sort(() => Math.random() - 0.5);
        }

        shuffleArray(cards);
        //console.log(cards);

        // Grid    //
        let rows = 3;
        let columns = 4;
        let rowDist = 100;
        let columnDist = 100;
        //rows + columns == cards.length;

        // For Loop //
        let k=1;
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                console.log(i, j)
                cards[k].setPosition(100 + rowDist * j, 100 + columnDist * i);
                cards[k].setScale(0.3);
                cards[k].setInteractive();
                console.log(cards[k].position, typeof (cards[i+j]))
                k++;
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