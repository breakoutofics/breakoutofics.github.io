var BreakoutICS = BreakoutICS || {};
BreakoutICS.eatLunch = {

	init: function() {

		this.game.world.setBounds(0, 0, 700, 414);
		//constants
        this.RUNNING_SPEED = 380;
        this.JUMPING_SPEED = 500;
        this.BOUNCING_SPEED = 150;
		this.chaChing = this.game.add.audio('cheer');
	    this.cursors = this.game.input.keyboard.createCursorKeys();
	},

	create: function() {
  //       this.game.physics.arcade.gravity.y = 1000;
		var backgroundPic = this.game.add.image(this.game.width / 2, this.game.height / 2, "emptyPlate");
	    backgroundPic.anchor.set(0.5);
	    backgroundPic.scale.setTo(0.4);
	    this.playerAlive = true;
        this.loadLevel();
  //   	this.createOnscreenControls();
	},

	update: function(){

		this.doneEating();
	    //this.player.body.velocity.x = 0;

		// if (this.cursors.left.isDown || this.player.customParams.isMovingLeft) {
		//     this.player.body.velocity.x = -this.RUNNING_SPEED;
		//     this.player.scale.setTo(-1.5, 1.5);
		//     this.player.play("player");
		// } else if (this.cursors.right.isDown || this.player.customParams.isMovingRight) {
		//     this.player.body.velocity.x = this.RUNNING_SPEED;
		//     this.player.scale.setTo(1.5, 1.5);
		//     this.player.play("player");
		// } else {
		//     this.player.animations.stop();
		//     this.player.frame = 5;
		// }

  //     if ((this.cursors.up.isDown || this.player.customParams.mustJump) && (this.player.body.blocked.down || this.player.body.touching.down)) {
  //           this.player.body.velocity.y = -this.JUMPING_SPEED;
  //           this.player.customParams.mustJump = false;
  //           var jumper = this.game.add.audio("jumpPark");
  //           console.log("jump");
  //           var jump = this.game.add.tween(this.player).to({
  //               //x: this.player.x + this.game.rnd.between(100, 200),
  //               //y: this.player.y + this.game.rnd.between(-500, 800),
  //               rotation: 6.3
  //           }, 1000, Phaser.Easing.Linear.None, true);
  //           jumper.play();
  //       }
	},

	loadLevel: function() {


		

		// charger
		this.charger = this.add.sprite(this.game.width/2, this.game.height/2, "noodles");
		this.charger.anchor.set(0.5);
		this.charger.scale.set(0.6);
		this.charger.inputEnabled = true;
		this.charger.useHandCursor = true;

		// laptop
		this.lapTop = this.add.sprite(this.game.width/2+40, this.game.height/2-40, "noodles");
		    this.lapTop.anchor.set(0.5);
		    this.lapTop.scale.set(0.6);
		    this.lapTop.inputEnabled = true;
		    this.lapTop.useHandCursor = true;

		// keys
		this.keys = this.add.sprite(this.game.width/2-50, this.game.height/2-50, "noodles");
		    this.keys.anchor.set(0.5);
		    this.keys.scale.set(0.7);
		    this.keys.inputEnabled = true;
		    this.keys.useHandCursor = true;

		this.style = {  font: "bold 30px Arial", 
			            fill: "#CC0000", 
			            align: "center",
			            stroke:'#000000',
			            strokeThickness: 3,    
			            fill: '#FFC300'  };

		this.updateUrMonies = this.add.text(this.game.width/2, 40, "", this.style);
		this.updateUrMonies.anchor.set(0.5);
		this.updateUrMonies.fixedToCamera = true;

		//southpark 
		//this.game.time.events.loop(Phaser.Timer.SECOND*7.5, this.smackTalk, this);
		
		//create player.
  //       this.player = this.add.sprite(this.game.width/2, this.game.height, 'player', 5);
  //       this.player.anchor.setTo(0.5);
  //       this.player.scale.setTo(1.5, 1.5);
   
  //       this.player.animations.add("player", [0, 1, 2, 3, 4, 5], 7, true);
  //       // this.player.animations.add("playerJump", [6, 7], 7, true);
  //               this.player.animations.add("playerIdle", [0, 1], 5, true);

  //       this.game.physics.arcade.enable(this.player);
  //       //create a custom object for the player controls.
  //       this.player.customParams = {};
  //       this.player.body.collideWorldBounds = true;
  //       this.player.body.bounce.set(1, 0);
  //       //follow player with the camera.
  //       this.game.camera.follow(this.player);

		// //beg text
		// this.game.time.events.loop(Phaser.Timer.SECOND*6, this.lookForStuff, this);

		//destroy dollar and stuff.
		this.lapTop.events.onInputDown.add(this.destroyLapTop, this);
		this.keys.events.onInputDown.add(this.destroyKeys, this);
		this.charger.events.onInputDown.add(this.destroyCharger, this);
		// this.quarterTwo.events.onInputDown.add(this.destroyQuarterTwo, this);
	},

	destroyLapTop: function(){
		this.chaChing.play();
		this.lapTop.destroy();
		this.updateUrMonies.destroy();

        BreakoutICS.game.global.food = BreakoutICS.game.global.food + 1;
        console.log(BreakoutICS.game.global.food);

        this.updateUrMonies = this.add.text(this.game.width/2, this.game.height - 30, " " + " Yum", this.style);
		this.updateUrMonies.anchor.set(0.5);
	    this.updateUrMonies.fixedToCamera = true;
	},

	destroyKeys: function(style){
		this.chaChing.play();
		this.keys.destroy();
		this.updateUrMonies.destroy();

        BreakoutICS.game.global.food = BreakoutICS.game.global.food + 1;
        console.log(BreakoutICS.game.global.food);

        this.updateUrMonies = this.add.text(this.game.width/2, this.game.height - 30, " " + " Yummy!", this.style);
		this.updateUrMonies.anchor.set(0.5);
	    this.updateUrMonies.fixedToCamera = true;
	},

	destroyCharger: function(style){
        this.chaChing.play();
		this.charger.destroy();
		this.updateUrMonies.destroy();

        BreakoutICS.game.global.food = BreakoutICS.game.global.food + 1;
        console.log(BreakoutICS.game.global.food);

        this.updateUrMonies = this.add.text(this.game.width/2, this.game.height - 30, " " + "I'm ready to code!", this.style);
		this.updateUrMonies.anchor.set(0.5);
	    this.updateUrMonies.fixedToCamera = true;
	},

	lookForStuff: function(){

		var helpPls = ["Where are my Keys?!?!",
						"I need my laptop...",
						"I need my laptop charger..."
					  ];

		var randomHelpPls = Phaser.ArrayUtils.getRandomItem(helpPls);
		var style = { font: "20px Arial",
					  fill: "CC0000",
					  align: "center",
					  stroke: '#000000',
					  strokeThickness: 5,
					  fill: '#DCDCDC'
					};

		var askForHelp = this.game.add.text(this.game.width/2-120, this.game.height - 210, randomHelpPls, style);
			askForHelp.anchor.set(0.5);
			askForHelp.alpha = 0.9;
			askForHelp.fixedToCamera = true;

		var plsHelpTween = this.game.add.tween(askForHelp).to({alpha:1}, 3000, "Linear", true);
			plsHelpTween.onComplete.add(function(){askForHelp.destroy();});	
	},

	// goLivingRoom: function(){
	// 	if(this.player.body.x >= this.game.width-80){			
	// 		console.log("going to living room");
	//     	this.game.state.start("livingRoomScene", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
	// 	}
	// },

	doneEating: function(){
		if(BreakoutICS.game.global.food==3){
			console.log("HI");
	    	this.game.state.start("choicesToMake", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
		}
	},

	

// CONTROLS --------------------------------------------------

	createOnscreenControls: function() {

		this.leftArrow = this.add.button(80, this.game.height - 80, 'arrowButton');
        this.leftArrow.scale.x = -1;
        this.rightArrow = this.add.button(100, this.game.height - 80, 'arrowButton');
        //this.rightArrow.scale.x = -1;
        this.actionButton = this.add.button(this.game.width - 100, this.game.height - 75, 'actionButton');

        this.leftArrow.alpha = 0.7;
        this.rightArrow.alpha = 0.7;
        this.actionButton.alpha = 1;

        this.leftArrow.fixedToCamera = true;
        this.rightArrow.fixedToCamera = true;
        this.actionButton.fixedToCamera = true;

    //jump
        this.actionButton.events.onInputDown.add(function() {
            this.player.customParams.mustJump = true;
        }, this);

        this.actionButton.events.onInputUp.add(function() {
            this.player.customParams.mustJump = false;
        }, this);

        this.actionButton.events.onInputOver.add(function() {
            this.player.customParams.mustJump = true;
        }, this);

        this.actionButton.events.onInputOut.add(function() {
            this.player.customParams.mustJump = false;
        }, this);

        //left
        this.leftArrow.events.onInputDown.add(function() {
            this.player.customParams.isMovingLeft = true;
        }, this);

        this.leftArrow.events.onInputUp.add(function() {
            this.player.customParams.isMovingLeft = false;
        }, this);

        this.leftArrow.events.onInputOver.add(function() {
            this.player.customParams.isMovingLeft = true;
        }, this);

        this.leftArrow.events.onInputOut.add(function() {
            this.player.customParams.isMovingLeft = false;
        }, this);

        //right
        this.rightArrow.events.onInputDown.add(function() {
            this.player.customParams.isMovingRight = true;
        }, this);

        this.rightArrow.events.onInputUp.add(function() {
            this.player.customParams.isMovingRight = false;
        }, this);

        this.rightArrow.events.onInputOver.add(function() {
            this.player.customParams.isMovingRight = true;
        }, this);

        this.rightArrow.events.onInputOut.add(function() {
            this.player.customParams.isMovingRight = false;
        }, this);
	}
};