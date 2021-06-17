var PuzzleLoad = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { "key": "Puzzle_Load" });
  },
  init: function () { },
  preload: function () {
    //Debug Plugin
    // this.add.plugin(Phaser.Plugin.Debug);

    this.load.image('easy', 'img/puzzle/easy.png');
    this.load.image('normal', 'img/puzzle/normal.png');
    this.load.image('hard', 'img/puzzle/hard.png');
    this.load.atlasXML('startbtn', 'img/puzzle/startbtn.png', 'img/puzzle/atlas/startbtn.xml');
    this.load.image('settings', 'img/puzzle/settings.png');
    this.load.image('preview', 'img/puzzle/preview.png');
    this.load.image('difficulty', 'img/puzzle/difficulty.png');
    this.load.image('background', 'img/puzzle/title.png');
    this.load.image('play_bg', 'img/puzzle/play_bg.png');

    this.load.image("button_grey", "../img/button_grey.png")

    for (var i = 1; i < 10; i++) {
      this.load.image(i.toString(), 'img/puzzle/' + i.toString() + '.png');
    }


    // console.log('custom'+this.net.getQueryString('custom'))
    // var custom_uri = this.net.getQueryString('custom');
  },
  create: function () {
    console.log('Start Load')
    this.scene.start('Puzzle_Gallery');
    console.log('End Load')
  }
});