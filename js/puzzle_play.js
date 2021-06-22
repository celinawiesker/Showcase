var wKey;
var aKey;
var sKey;
var dKey;
var score = 0;

var PuzzlePlay = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function () {
        Phaser.Scene.call(this, { "key": "Puzzle_Play" });
    },
    init: function () { },
    preload: function () {

    },
    create: function () {
      console.log('PuzzlePlay', this)

        let background = this.add.image(0, 0, 'background');
        background.setScale(3);

        // //Create Button
        // this.clickButton = this.add.image(50, 50, 'button_grey')
        //     .setInteractive()
        //     .setScale(0.15)
        //     .on('pointerdown', () => this.getToStartScreen())
        // // End Create Button

        this_won = false;
        difficulty = 'easy';
        if (difficulty === 'easy') {
          this.square = 3;
        } else if (difficulty === 'normal') {
          this.square = 5;
        } else if (difficulty === 'hard') {
          this.square = 10;
        }
        console.log(this.square, difficulty, level.toString(), this)

        this.puzzle = new Puzzle(this, level.toString(), this.square);
        console.log(this.puzzle)
        this.puzzle.create();
        this.puzzle.scatter();

        // Preview Button
        // this.preview_button = this.add.button(this.w - 70, 10, 'previewButton', this.puzzle.preview_toggle, this.puzzle);//this.makeBox(75, 75)
        // this.preview_button.tint = 0xff43601c;
        preview_button = this.add.image(this.w - 60, 20, 'preview');

        // Menu Button, kann ich hier mit Bildern arbeiten?
        // this.menu_button = this.add.button(0, 10, 'menuButton', this.gotoMenu, this); // this.makeBox(75, 75)
        // this.menu_button.tint = 0xff00ff;
        settingsbtn = this.add.image(10, 20, 'settings');
        //settingsbtn.setScale(0.5);
        console.log('End Game')

      },


      gotoMenu: function () {
        this.scene.start('Puzzle_Menu');
      },

      makeBox: function (x, y) {
        var bmd = this.add.bitmapData(x, y);
        bmd.ctx.beginPath();
        bmd.ctx.rect(0, 0, x, y);
        bmd.ctx.fillStyle = '#fff';
        bmd.ctx.fill();
        return bmd;
      },

      update: function () {

        if (this.puzzle.won === true) {
          this.input.onUp.add(this.nextLevel, this);
        }

      },

      nextLevel: function () {
        this.scene.start('Puzzle_Gallery');
      },




});
