var wKey;
var aKey;
var sKey;
var dKey;
var score = 0;

var PuzzleGame = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function () {
        Phaser.Scene.call(this, { "key": "Puzzle_Game" });
    },
    init: function () { },
    preload: function () {

    },
    create: function () {
      console.log('Start Game')
        let background = this.add.image(0, 0, 'background');
        background.setScale(3);
        
        // //Create Button
        // this.clickButton = this.add.image(50, 50, 'button_grey')
        //     .setInteractive()
        //     .setScale(0.15)
        //     .on('pointerdown', () => this.getToStartScreen())
        // // End Create Button
   
        this_won = false;

        if (difficulty === 'easy') {
          this.square = 3;
        } else if (difficulty === 'normal') {
          this.square = 5;
        } else if (difficulty === 'hard') {
          this.square = 10;
        }
    
        // this.puzzles = ['cat','prehistory','skyscrapers','boxing'];
        // this.puzzles = ['horse','cat','apple','flower',];
    
        this.puzzle = new Puzzle(this, level.toString(), this.square);
        this.puzzle.scatter();
    
        // Preview Button
        this.preview_button = this.add.button(this.w - 70, 10, 'previewButton', this.puzzle.preview_toggle, this.puzzle);//this.makeBox(75, 75)
        this.preview_button.tint = 0xff43601c;
        this.add.image(this.w - 60, 20, 'preview');
    
        // Menu Button, kann ich hier mit Bildern arbeiten?
        this.menu_button = this.add.button(0, 10, 'menuButton', this.gotoMenu, this); // this.makeBox(75, 75)
        this.menu_button.tint = 0xff00ff;
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
    
        // Kann man hier einbauen, dass nach einem gewonnen Spiel, direkt wieder in die Gallery gesprungen wird?
        if (this.puzzle.won === true) {
          this.input.onUp.add(this.nextLevel, this);
          // this.win_text = this.add.bitmapText(this.w / 2, this.h / 2, 'minecraftia', 'GREAT JOB!\nClick to Play Again.', 24);
          // this.win_text.anchor.setTo(0.5);
        }
    
      },

      nextLevel: function () {
        this.scene.start('Puzzle_Select');
      }
});

