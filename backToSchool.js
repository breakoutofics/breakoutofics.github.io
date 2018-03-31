var BreakoutICS = BreakoutICS || {};

BreakoutICS.backToSchool = {

    init: function() {
        this.game.stage.backgroundColor = "#4488AA";
    },
    create: function() {

    this.textTitle;
    this.frontWheel;
    this.backWheel;
    this.style;
    this.amountHeld = 0;
    this.dirtBackGround = this.game.add.tileSprite(0,0,this.game.width / 2, this.game.height / 2, 'backgroundTile');
    this.dirtBackGround.scale.setTo(2);

    // creates a sprite using the truck image we loaded above and positions it at 200 x 200
    this.moveTruck = 460;
    this.truckscale = 0.4;

    this.truck = this.game.add.sprite(200, this.moveTruck+200, 'truck');
    this.truck.anchor.setTo(0.5);
    this.frontWheel = this.game.add.sprite(420, this.moveTruck-90, 'wheel');
    this.frontWheel.anchor.setTo(0.5);
    this.backWheel = this.game.add.sprite(-30, this.moveTruck-90, 'wheel');
    this.backWheel.anchor.setTo(0.5);

    this.game.add.tween(this.frontWheel).to( { angle: 545 }, 2000, Phaser.Easing.Linear.None, true).loop(true);
    this.game.add.tween(this.backWheel).to( { angle: 545 }, 2000, Phaser.Easing.Linear.None, true).loop(true);
    // startBounceTweenWheel();


    this.keys = this.game.input.keyboard.createCursorKeys();

    this.startBounceTween();
    this.titleText();


    },



    titleText: function(){


      var style = { 
                    font: "bold 50px Arial", 
                    fill: "#CC0000", 
                    align: "center",
                    stroke:'#000000',
                    strokeThickness: 6,    
                    fill: '#FFC300' 
                  };

      var styleForSecondText = {
                          font: "bold 35px Arial", 
                          fill: "#CC0000", 
                          align: "center",
                          stroke:'#000000',
                          strokeThickness: 6,    
                          fill: '#FFC300' 
                        };

      var styleForThirdText = {
                          font: "bold 20px Arial", 
                          fill: "#CC0000", 
                          align: "center",
                          stroke:'#000000',
                          strokeThickness: 6,    
                          fill: '#FFC300' 
                        };

        //var title = "AT&T HACKATHON!";

      

        // var sign = this.game.add.text(this.game.width/2, this.game.world.height/2 -90, title, style);
        //     sign.anchor.set(0.5);
        //     //sign.setShadow(5, 5, 'rgba(0,0,0,0.5)', 15);
 

        // var secondTitleText = "Here We Come!";
        // var secondTextTitle = this.game.add.text(this.game.width/2, this.game.world.height/2 - 50, secondTitleText, styleForSecondText);
        //     secondTextTitle.anchor.set(0.5);
        //    // secondTextTitle.setShadow(5, 5, 'rgba(0,0,0,0.5)', 15);

    
        // var blueButtonFiveText = "Here We Come!";     
        // var blueButtonFiveTextOnScreen = this.game.add.text(this.game.width/2, this.game.height/2-130, blueButtonFiveText,styleForThirdText);
        //     blueButtonFiveTextOnScreen.anchor.set(0.5);


        var alohaText = ["\" Cheeee Heee!\""];
        var randomAlohaText = Phaser.ArrayUtils.getRandomItem(alohaText);

        var alohaText = this.game.add.text(this.game.width/2-150, this.game.height/2-150, randomAlohaText, styleForSecondText);

        // var playButton = this.game.add.button(this.game.width / 2, this.game.height - 150, "playButton", this.startGame, this);
            alohaText.anchor.set(0.5);
            alohaText.angle = -15;
            alohaText.tint = 0xFCBE12;

            //tween(target).to(properties, ease, autoStart, delay, repeat)
            var alohaTween = this.game.add.tween(alohaText).to({
                width: 220,
                height: 91
            }, 1500, "Linear", true, 0, -1);

            //yoyo method gives yoyo effect plays forward then reverses if set to true.
            //if yoyo method is set to false it will repeat without reversing.
            alohaTween.yoyo(true);
    },








    update: function() {

        this.dirtBackGround.tilePosition.x -=10;
        this.truck.x += 2;
        this.frontWheel.x += 2;
        this.backWheel.x += 2;
        this.amountHeld++;

        // Poll the arrow keys to move the ball
        // if (this.keys.left.isDown) {
        //     this.truck.x -= 5;
        //     this.frontWheel.x -= 5;
        //     this.backWheel.x -= 5;
        //     this.amountHeld++;
        // }

        if (this.keys.right.isDown) {
            this.truck.x += 5;
            this.frontWheel.x += 5;
            this.backWheel.x += 5;
            this.amountHeld++;
        }
        if (this.keys.up.isDown) {
            console.log("up is being test");
            // truck.y -= 5;
        }
        if (this.keys.down.isDown) {
            // truck.y += BallWorld.velocity;
            console.log("down");
        }

         if (this.truck.x >= this.game.width+691/2) {
            // truck.y += BallWorld.velocity;
            console.log("next Scene");
            this.state.start("choicesToMake");
        }
    },

startBounceTween: function() {
        this.truck.y = 255;
        var bounce=this.game.add.tween(this.truck);

        bounce.to({ y: 300 }, 1000 + Math.random() * 3000, Phaser.Easing.Bounce.In);
        bounce.onComplete.add(this.startBounceTween, this);
        bounce.start();
    },

   
};