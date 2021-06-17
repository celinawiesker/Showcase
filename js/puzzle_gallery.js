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

    let settingsbtn = this.add.image(1225, 50, 'settings');
    settingsbtn.setInteractive();
    settingsbtn.on('pointerdown', () => this.scene.start('Puzzle_Menu'))
    //settingsbtn.setScale(0.5);

    let clickButton = this.add.image(50, 50, 'button_grey')
      clickButton.setInteractive()
      clickButton.setScale(0.15)
      clickButton.on('pointerdown', () => this.scene.start('StartScreen'))


    //==============================================================================================

    // Text oberhalb der Bilder, der die Schwierigkeit anzeigt
    //this.add.bitmapText(this.w / 2, 40, 'minecraftia', difficulty, 36).anchor.setTo(0.5);;

    //==============================================================================================
    x = 250;
    y = 50;
    count = 0
    for (var i = 1; i < 10; i++) {
      count += 1;
      var b = this.add.image(x, y, i.toString());

     // b.gallery = i.toString();
      b.setOrigin(0, 0);
      b.scale = 0.35;
      b.setInteractive();
      b.on('pointerdown', () => {
        this["puzzleImage"] = b;
        console.log(this)
        this.scene.start('Puzzle_Play')
      })
      x += 250;
      // y += 20;

      if (count === 3) {
        count = 0;
        y += 250;
        x = 250;
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
