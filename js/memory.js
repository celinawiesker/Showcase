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
        let cards;

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

        function init() {
            cloud1.setName('1');
            cloud2.setName('2');
            cloud3.setName('3');
            cloud4.setName('4');
            cloud5.setName('5');
            cloud6.setName('6');
            cloud7.setName('7');
            cloud8.setName('8');
            cloud9.setName('9');
            cloud10.setName('10');
            cloud11.setName('11');
            cloud12.setName('12');
            cloud13.setName('1');
            cloud14.setName('2');
            cloud15.setName('3');
            cloud16.setName('4');
            cloud17.setName('5');
            cloud18.setName('6');
            cloud19.setName('7');
            cloud20.setName('8');
            cloud21.setName('9');
            cloud22.setName('10');
            cloud23.setName('11');
            cloud24.setName('12');

            cards = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7, cloud8, cloud9, cloud10, cloud11, cloud12, cloud13, cloud14, cloud15, cloud16, cloud17, cloud18, cloud19, cloud20, cloud21, cloud22, cloud23, cloud24];

            shuffleArray(cards);
        }

        init();

        function shuffleArray(inputArray) {
            inputArray.sort(() => Math.random() - 0.5);
        }

        function reset() {
            shuffleArray(cards);
            for (let i = 0; i < 24; i++) {
                cards[i].visible = true;
                cards[i].clearTint();
                successful = 0;
            }
            console.log('working')
        }

        // Grid    //
        let rows = 6;
        let columns = 4;
        let rowDist = 185;
        let columnDist = 170;
        //rows + columns == cards.length;

        // For Loop //
        let k = 0;
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                //console.log('i', i, 'j', j, 'k', k)
                cards[k].setPosition(150 + rowDist * j, 170 + columnDist * i);
                cards[k].setScale(0.3);
                cards[k].setInteractive();
                //console.log(cards[k])
                //console.log('name', cards[k].name, 'location', cards[k].x, cards[k].y)
                k++;
            }
        }
        // End for loop //
        // End Grid //


        let firstPress;
        firstPress = 0;
        this.input.on('gameobjectdown', function (pointer, gameObject) {

            checkMatch(gameObject);

        });

        //this.input.on('pointerdown', checkMatch());
        //Create Button
        // this.clickGameObject.on('pointerdown', () => this.checkMatch())
        // End Create Button
        let successful = 0;

        function checkMatch(card) {
            if (!card.isTinted) {
                //console.log(card.name, firstPress)

                // Lila = 0xffb9b3fa
                // Hellblau = 0xffb3fbff
                // Hellgelb = 0xffffffbf
                // Hellgrau = 0xffd7d7d6
                card.setTint(0xffd7d7d6);
                if (firstPress != 0) {
                    // we have to check if it's a match
                    if (card.name == firstPress.name) {
                        //
                        card.visible = false;
                        firstPress.visible = false;
                        //card.destroy();
                        //firstPress.destroy();
                        // console.log('Name', card.name)
                        // console.log('First press', firstPress)
                        console.log("Match!")
                        successful = successful + 1;

                        if (successful == 12) {
                            console.log("nextLevel")
                            reset();
                        }

                    }
                    else {
                        card.clearTint()
                        firstPress.clearTint()
                        console.log("No Match!")
                    }
                    firstPress = 0;
                }

                else {
                    // this is the firstpress
                    firstPress = card;
                }
            }

        };

    }, //End create ()

    update: function () { },

    // Button Functions
    getToStartScreen() {
        this.scene.start('StartScreen');
    },
    // End Buttons function



});