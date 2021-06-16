/*global Game*/
var difficulty;

var PuzzleMenu = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { "key": "Puzzle_Menu" });
  },
  init: function () { },
  preload: function () {

  },
  create: function () {
    console.log('Start Menu')
    difficulty = 'normal';

    this.puzzle = new Puzzle(this.game, this.makeBox(500,500), 5);  
    this.puzzle.scatter();

    this.puzzle.pieces.forEach(function(piece) {
      piece.inputEnabled = false;
      piece.input.enableDrag(false);
    });


    //Hintergrund & Title
    //this.backgroundColor = '#2d2d2d';
    // this.background = this.add.image(0,0,'background')
    // background.setScale(3)
    // Background
    let background = this.add.image(0, 0, 'background');
    //background.setScale(3);
    // End Background

    this.titleText = this.add.image(this.w / 2, 250, 'difficulty');
    // this.titleText.anchor.setTo(0.5);
    // this.titleText.tint = 0x00ff00;

    //==============================================================================================


    // Buttons für die Schwierigkeit
    this.difficultyButtons = this.add.group();

    this.easyButton = this.add.button(this.w / 2, this.h / 2 + 75, 'easy', this.difficultySelect, this);
    this.easyButton.anchor.setTo(0.5);
    this.difficultyButtons.add(this.easyButton);

    this.normalButton = this.add.button(this.w / 2, this.h / 2 + 110, 'normal', this.difficultySelect, this);
    this.normalButton.anchor.setTo(0.5);
    this.normalButton.tint = 0xff00ff;
    this.difficultyButtons.add(this.normalButton);

    this.hardButton = this.add.button(this.w / 2, this.h / 2 + 155, 'hard', this.difficultySelect, this);
    this.hardButton.anchor.setTo(0.5);

    this.difficultyButtons.add(this.hardButton);
    //==============================================================================================

    // Start Message
    this.startButton = this.add.button(this.w / 2, this.h / 2 + 220, 'startbtn', this.begin, this, 1);
    this.startButton.anchor.setTo(0.5);

    console.log('End menu')

  },

  begin: function () {
    this.scene.start('Puzzle_Gallery');
  },
  difficultySelect: function (button) {
    this.difficultyButtons.forEach(function (btn) {
      btn.tint = 0xffffff;
    });
    button.tint = 0xff00ff;
    difficulty = button.key;
  }, 
    makeBox: function(x,y) {
      var bmd = this.game.add.bitmapData(x, y);
      bmd.ctx.beginPath();
      bmd.ctx.rect(0, 0, x, y);
      bmd.ctx.fillStyle = '#0000ff';
			bmd.ctx.lineStyle = 4;
      bmd.ctx.strokeStyle = '#ff00ff';
      bmd.ctx.fill();
      return bmd;
    }

});
