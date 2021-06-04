var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1024,
  height: 600,
  scene: {
      preload: preload,
      create: create
  },
  scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

var game = new Phaser.Game(config);

// Muss dieser obere Teil nur einmal im Main genutzt werden oder bei jeden MiniSpiel?

function preload () {

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
}


function create () {

  // background: #2980B9;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  this.camera.setBackgroundColor('#FFFFFF')


  //game.backgroundColor = "#6DD5FA";

  // let cherry = this.add.image(100, 300, 'cherry');
  // let cake_rosa = this.add.image(200, 300, 'cake_rosa');
  // let cake_orange = this.add.image(300, 300, 'cake_orange');
  // let cake_strawb = this.add.image(400, 300, 'cake_strawb');
  // let bananas = this.add.image(500, 300, 'bananas');
  // let sandwich = this.add.image(400, 100, 'sandwich');
  // let muffin = this.add.image(400, 200, 'muffin');
  // let orange = this.add.image(400, 300, 'orange');
  // let cake_choc = this.add.image(400, 400, 'cake_choc');
  // let big_cake_choc = this.add.image(400, 500, 'big_cake_choc');
  // let cherry_cake = this.add.image(400, 600, 'cherry_cake');
  // let waffer = this.add.image(400, 700, 'waffer');

  var memoryGroup = game.add.group();

  memoryGroup.add(cherry),
  memoryGroup.add(cake_rosa);
  memoryGroup.add(cake_orange);
  memoryGroup.add(cake_strawb);
  memoryGroup.add(bananas);
  memoryGroup.add(sandwich);
  memoryGroup.add(muffin);
  memoryGroup.add(orange);
  memoryGroup.add(cake_choc);
  memoryGroup.add(big_cake_choc);
  memoryGroup.add(cherry_cake);
  memoryGroup.add(waffer);

  group.align(12, -1, 48, 48);


  // for (i = 0; i < memoryGroup.length; i++)
  // {
  //   var img = new Image(50, 50);
  //   img.src = memoryGroup[i];
  //   x += 50;
  //   y += 50;

  //   var src = document.getElementById("elementid");
  //   src.appendChild(img);
  // }

  //memoryCards.create

  //let randomSprite = Phaser.Utils.Array.GetRandom(group.getChildren());

  // Phaser.Actions.GridAlign(memoryGroup.getChildren(), {
  //     width: 10,
  //     height: 10,
  //     cellWidth: 32,
  //     cellHeight: 32,
  //     x: 100,
  //     y: 100
  // });

}

function update () {


}

//_______________________________________________________

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: '100%',
    height: '100%',
    scene: {
        preload: preload,
        create: create
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

var game = new Phaser.Game(config);
var json = {};

function preload ()
{
    this.load.image("shell_green", "../img/underwater/shell_green.png")
    this.load.image("shell_yellow", "../img/underwater/shell_yellow.png")
    this.load.image("shell_pink", "../img/underwater/shell_pink.png")
    this.load.image("shell_purple", "../img/underwater/shell_purple.png")
    this.load.image("stone_green", "../img/underwater/stone_green.png")
    this.load.image("stone_yellow", "../img/underwater/stone_yellow.png")
    this.load.image("stone_pink", "../img/underwater/stone_pink.png")
    this.load.image("stone_purple", "../img/underwater/stone_purple.png")
    this.load.image("underwater_bg", "../img/underwater/underwater_bg.png")

    json = {
        "shells": {
          "pos": [
            {
              "x": 1,
              "y": 2
            },
            {
              "x": 4,
              "y": 5
            },
            {
              "x": 7,
              "y": 8
            },
            {
              "x": 9,
              "y": 10
            }
          ],
          "color": [
            "yellow",
            "pink",
            "green",
            "purple"
          ]
        }
      };
      
}

function create ()
{
    // Insert Background
    let underwater_bg = this.add.image(0, 0, 'underwater_bg');
    underwater_bg.setOrigin(0,0);

    // Lade die Bilder
    let stone_green = this.add.image(0,0,'stone_green');
    let stone_pink = this.add.image(0,0,'stone_pink');
    let stone_yellow = this.add.image(0,0,'stone_yellow');
    let stone_purple = this.add.image(0,0,'stone_purple');


    // Array Bilder der Steine
  let  stones = [stone_green, stone_pink, stone_yellow, stone_purple];
  // Array mit möglichen Positionen, die ich mit einem for Loop zuweise 
   var stonesPos = [
        {
          "x": 45,
          "y": 400
        },
        {
          "x": 290,
          "y": 400
        },
        {
          "x": 535,
          "y": 400
        },
        {
          "x": 790,
          "y": 400
        }
      ]


// https://futurestud.io/tutorials/generate-a-random-number-in-range-with-javascript-node-js
  
// between funktion, die Zahl random generiert zwischen 0 und3 3
var i = between(0, 3)
  console.log(i)

  // for loop, der die Steine darstellt und positioniert
    for (var stone in stones) {
        console.log(stones[stone])
        // referenziere die Steine aus dem Array und setzte gleiche Merkmale
        stones[stone].setOrigin(0,0);
        stones[stone].setScale(0.4)
        stones[stone].setPosition(stonesPos[i].x, stonesPos[i].y);
        // Random Zahl increment um 1 und wenn die Zahl höher als 3 ist, dann wieder auf Null, also zum Anfang
        i = i+1;
        if (i==4){
            i=0;
        }
    }

    // Insert Stones ___________________________________________

    // x : 1024-800 (800 = 4x das Bild in 0.4 Scale) = 224 px left in between; 224:5 = 44,8 ~ 45
    // y : Bild original 500px*500px, 0.4 = 200px*200px; Origin in the Mitte + 600px height = 600-400

    // x : 45 + 200 (Stone width) + 45 Abstand = 290
    // y : Bild original 500px*500px, 0.4 = 200px*200px; Origin in the Mitte + 600px height = 600-400

    // x : 290 + 200 (Stone width) + 45 Abstand = 535
    // y : Bild original 500px*500px, 0.4 = 200px*200px; Origin in the Mitte + 600px height = 600-400



    // x : 535 + 200 (Stone width) + 45 Abstand = 780
    // y : Bild original 500px*500px, 0.4 = 200px*200px; Origin in the Mitte + 600px height = 600-400

    // End Insert Stones ______________________________________

    // Drop Interaction _GREEN _______________________________________





    // Lade die Bilder
    let shell_green = this.add.image(0,0,'shell_green');
    let shell_pink = this.add.image(0,0,'shell_pink');
    let shell_yellow = this.add.image(0,0,'shell_yellow');
    let shell_purple = this.add.image(0,0,'shell_purple');


    // Array Bilder der Steine
    let shells = [shell_green, shell_pink, shell_yellow, shell_purple];

      // Array mit möglichen Positionen, die ich mit einem for Loop zuweise 
   var shellPos = [
    {
      "x": 45,
      "y": 400
    },
    {
      "x": 290,
      "y": 400
    },
    {
      "x": 535,
      "y": 400
    },
    {
      "x": 790,
      "y": 400
    }
  ]

    // Shell interaction
        var frames = this.textures.get('shell_green').getFrameNames();

        var x = 100;
        var y = 100;
    
        var shell_green = this.add.image(150, 200, 'shell_green', Phaser.Math.RND.pick(frames)).setInteractive();
        var x = + 150;
        //var y = + 0;
        shell_green.setScale(0.3);
        this.input.setDraggable(shell_green);
     
            
    //  A drop zone
    var zone = this.add.zone(stone_green.x, stone_green.y, stone_green.width, stone_green.height).setRectangleDropZone(200, 200);
    zone.setOrigin(0,0);
    zone.setPosition(145,500);
    zone.setScale(0.4);

    //  Just a visual display of the drop zone
    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    this.input.on('dragstart', function (pointer, gameObject) {

        this.children.bringToTop(gameObject);

    }, this);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    this.input.on('dragenter', function (pointer, gameObject, dropZone) {

        graphics.clear();
        graphics.lineStyle(2, 0x00ffff);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    });

    this.input.on('dragleave', function (pointer, gameObject, dropZone) {

        graphics.clear();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    });

    this.input.on('drop', function (pointer, gameObject, dropZone) {

        gameObject.x = dropZone.x;
        gameObject.y = dropZone.y;

        gameObject.input.enabled = false;

    });

    this.input.on('dragend', function (pointer, gameObject, dropped) {

        if (!dropped)
        {
            gameObject.x = gameObject.input.dragStartX;
            gameObject.y = gameObject.input.dragStartY;
        }

        graphics.clear();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    });


    // End Drop Interaction _GREEN __________________________________

    // Drop Interaction _YELLOW _______________________________________

    // Shell interaction
    var frames = this.textures.get('shell_yellow').getFrameNames();
    var x = 400;
    var y = 100;

    var shell_yellow = this.add.image(800, 200, 'shell_yellow', Phaser.Math.RND.pick(frames)).setInteractive();
    //var x = + 150;
    //var y = + 0;
    shell_yellow.setScale(0.3);
    this.input.setDraggable(shell_yellow);
 
        
    //  A drop zone
    var zone = this.add.zone(stone_yellow.x, stone_yellow.y, stone_yellow.width, stone_yellow.height).setRectangleDropZone(200, 200);
    zone.setOrigin(0,0);
    zone.setPosition(635,500);
    zone.setScale(0.4);

    //  Just a visual display of the drop zone
    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    this.input.on('dragstart', function (pointer, gameObject) {

        this.children.bringToTop(gameObject);

    }, this);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    this.input.on('dragenter', function (pointer, gameObject, dropZone) {

        graphics.clear();
        graphics.lineStyle(2, 0x00ffff);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    });

    this.input.on('dragleave', function (pointer, gameObject, dropZone) {

        graphics.clear();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    });

    this.input.on('drop', function (pointer, gameObject, dropZone) {

        gameObject.x = dropZone.x;
        gameObject.y = dropZone.y;

        gameObject.input.enabled = false;

    });

    this.input.on('dragend', function (pointer, gameObject, dropped) {

        if (!dropped)
        {
            gameObject.x = gameObject.input.dragStartX;
            gameObject.y = gameObject.input.dragStartY;
        }

        graphics.clear();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    });


    // End Drop Interaction _Yellow __________________________________


}

function update () {


}

/**
 * Returns a random number between min (inclusive) and max (inclusive)
 */
 function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }




//References:
// Code components from: https://phaser.io/examples/v3/view/input/zones/drop-zone