var PuzzleLoad = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { "key": "Puzzle_Load" });
  },
  init: function () { },
  preload: function () {

    this.load.image('play_bg', 'img/puzzle/play_bg.png');
    this.load.image("button_grey", "../img/button_grey.png")
  },
  create: function () {

    var background = this.add.image(0, 0, 'play_bg')
    background.setOrigin(0, 0)

    //Create Button
    this.clickButton = this.add.image(50, 50, 'button_grey')
      .setInteractive()
      .setScale(0.15)
      .on('pointerdown', () => this.getToStartScreen())
    // End Create Button
  },

  // Button Functions
  getToStartScreen() {
    this.scene.start('StartScreen');
  },
  // End Buttons function
});