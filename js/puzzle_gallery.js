var level = 1;

var PuzzleGallery = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { "key": "Puzzle_Gallery" });
  },
  init: function () { },
  preload: function () { },
  create: function () {
    console.log('Start Gallery')

    //this.backgroundColor = '#dcdcdc';
    //this.background = this.add.image(0,0,'play_bg')
    //background.setScale(3)

    let settingsbtn = this.add.image(10, 20, 'settings');
    settingsbtn.setInteractive();
    settingsbtn.on('pointerdown', () => this.scene.start('Puzzle_Menu'))
    //settingsbtn.setScale(0.5);

    //==============================================================================================

    // Text oberhalb der Bilder, der die Schwierigkeit anzeigt
    //this.add.bitmapText(this.w / 2, 40, 'minecraftia', difficulty, 36).anchor.setTo(0.5);;

    //==============================================================================================

    x = 220;
    y = 160;
    count = 0
    for (var i = 1; i < 10; i++) {
      count += 1;
      var b = this.add.image(x, y, i.toString());

     // b.gallery = i.toString();
      b.setOrigin(0.5);
      b.scale.x = 0.3;
      b.scale.y = 0.3;
      b.on('pointerdown', () => this.scene.start('Puzzle_Play'))
      x += 300;
      // y += 20;

      if (count === 3) {
        count = 0;
        y += 220;
        x = 220;
      }
    }

    console.log('End Gallery')
  },

  // gotoMenu() {
  //   this.scene.start('Puzzle_Menu');
  // },

  makeBox(x, y) {
    var bmd = this.game.add.bitmapData(x, y);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, x, y);
    bmd.ctx.fillStyle = '#fff';
    bmd.ctx.fill();
    return bmd;
  },

  loadLevel() {
    // console.log(arguments[0].key);
    level = arguments[0].key;
    this.scene.start('Puzzle_Play');
  }


});
