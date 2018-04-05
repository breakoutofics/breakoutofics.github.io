var BreakoutICS = BreakoutICS || {};

BreakoutICS.codingScreenLRC = {

    init: function() {
        this.game.stage.backgroundColor = "#ffff";

        // BreakoutICS.game.global = {
        //     coins: 0,
        //     stuff: 0,
        //     food: 0,
        //     childThere: true,
        //     bugSquished: 0
        // }
        // BreakoutICS.game.global.coins = 0;
        // BreakoutICS.game.global.stuff = 0;
        // BreakoutICS.game.global.food = 0;
        // BreakoutICS.game.global.bugSquished = 0;

        // this.game.world.setBounds(0, 0, 700, 414);
        // //constants
        //       this.RUNNING_SPEED = 380;
        //       this.JUMPING_SPEED = 500;
        //       this.BOUNCING_SPEED = 150;
        this.chaChing = this.game.add.audio('chaChing');
        //    this.cursors = this.game.input.keyboard.createCursorKeys();
    },

    create: function() {
        console.log("in the codingScene");

        this.MAX_BUGS = 20;

        // this.game.physics.arcade.gravity.y = 1000;

        var backgroundPic = this.game.add.image(this.game.width / 2, this.game.height / 2 + 10, "laptopBig");
        backgroundPic.anchor.set(0.5);
        backgroundPic.scale.setTo(0.3, 0.22);
        // this.playerAlive = true;
        this.loadLevel();
        //this.createOnscreenControls();
    },

    update: function() {

    },

    loadLevel: function() {


        this.style = {
            font: "bold 40px Arial",
            fill: "#00FF00",
            align: "center",
            stroke: '#000000',
            strokeThickness: 3,
        };

        this.updateUrMonies = this.add.text(this.game.width / 2, this.game.height - 100, "YOUR PROGRAMMING SKILL\nINCREASED!", this.style);
        this.updateUrMonies.anchor.set(0.5);
        this.updateUrMonies.fixedToCamera = true;

    //tween(target).to(properties, ease, autoStart, delay, repeat)
        var playButtonTween = this.game.add.tween(this.updateUrMonies).to({
            width: 100,
            height: 50
        }, 1500, "Linear", true, 0, -1);

        //yoyo method gives yoyo effect plays forward then reverses if set to true.
        //if yoyo method is set to false it will repeat without reversing.
        playButtonTween.yoyo(true);



        //beg text
        this.game.time.events.loop(Phaser.Timer.SECOND * 6, this.ewwBugs, this);

        //destroy dollar and stuff.
        // this.lapTop.events.onInputDown.add(this.destroyLapTop, this);
        // this.keys.events.onInputDown.add(this.destroyKeys, this);
        // this.charger.events.onInputDown.add(this.destroyCharger, this);
        // this.quarterTwo.events.onInputDown.add(this.destroyQuarterTwo, this);




        this.style = {
            font: "15px Arial",
            // fill: "#CC0000"
            fill: "#00FF00"
        };

        this.introText = [
            "var BreakOut! = BreakOut! || {};",

            "BreakOut!.codingScene = {",

            "init: function() {",

            "\t\t\t\t\t\tthis.break.world.setBounds(0, 0, 700, 414);",

            "\t\t\t\t\t\tthis.CODING_SPEED = 380;",
            "\t\t\t\t\t\tthis.ENGLISH_SPEED = 500;",
            "\t\t\t\t\t\tthis.MATH_SPEED = 150;",
            "\t\t\t\t\t\tthis.NETWORKING_SPEED = this.net.add.hex('0000x00');",
            "\t\t\t\t\t\tthis.cursors = this.Breakout.input.keyboard.createCursorKeys();",
            "},",

            "create: function() {",

            "\t\t\t\t\t\tthis.Breakout.physics.arcade.gravity.y = 1000;",

            "\t\t\t\t\t\tthis.BreakOut!.Title.add(\"AT&T RoCkS!!!\");",
            "\t\t\t\t\t\tthis.BreakOut!.Title!!!.anchor.set(0.5);",
            "\t\t\t\t\t\tthis.BreakOut!.Title!!!.scale.setTo(1, 1.1);",
            "\t\t\t\t\t\tthis.playerAlive = true;",
            "\t\t\t\t\t\tthis.loadLevel();",

            "},",

        ];

        this.line = [];
        this.wordIndex = 0;
        this.lineIndex = 0;
        this.wordDelay = 220;
        this.lineDelay = 400;

        // text.anchor.set(0.5);
        // text.alpha = 0.1;

        // this.game.add.tween(text).to( { alpha: 1 }, 2000, "Linear", true);
        this.introWords = this.game.add.text(this.game.width / 2, 55, "", this.style);
        this.introWords.anchor.set(0.5);

        this.nextLine();


        // var playButton = this.game.add.button(this.game.width / 2, this.game.height - 150, "playButton", this.startGame, this);
        // playButton.anchor.set(0.5);
        // playButton.tint = 0x4b0082;
        // playButton.scale.setTo(0.5);

        // //tween(target).to(properties, ease, autoStart, delay, repeat)
        // var playButtonTween = this.game.add.tween(playButton).to({
        //     width: 120,
        //     height: 50
        // }, 1500, "Linear", true, 0, -1);

        // //yoyo method gives yoyo effect plays forward then reverses if set to true.
        // //if yoyo method is set to false it will repeat without reversing.
        // playButtonTween.yoyo(true);


        // play button ----------------------------------------------------------------------------------------------------------------
        var playButton = this.game.add.button(this.game.width - 10, this.game.height, "infoButton", this.choicesToMakeScreen, this);
        playButton.anchor.set(1);
        playButton.tint = 0xFCBE12;
        playButton.alpha = 1;
        playButton.scale.setTo(0.25, 0.25);

// play button  END-----------------------------------------------------------------------------------------------------------------




    },

    nextLine: function() {


        if (this.lineIndex === this.introText.length) {
            //  We're finished
            return;
        }

        //  Split the current line on spaces, so one word per array element
        this.line = this.introText[this.lineIndex].split(' ');

        //  Reset the word index to zero (the first word in the line)
        this.wordIndex = 0;

        //  Call the 'nextWord' function once for each word in the line (line.length)
        this.game.time.events.repeat(this.wordDelay, this.line.length, this.nextWord, this);

        //  Advance to the next line
        this.lineIndex++;

    },

    nextWord: function() {

        //  Add the next word onto the text string, followed by a space
        this.introWords.text = this.introWords.text.concat(this.line[this.wordIndex] + " ");

        //  Advance the word index to the next word in the line
        this.wordIndex++;

        //  Last word?
        if (this.wordIndex === this.line.length) {
            //  Add a carriage return
            this.introWords.text = this.introWords.text.concat("\n");

            //  Get the next line after the lineDelay amount of ms has elapsed
            this.game.time.events.add(this.lineDelay, this.nextLine, this);
        }

    },

    kidTalking: function() {
        if (BreakoutICS.game.global.childThere == true) {

            this.helpPls = [
                "So Much To Do!",
                "Chee Heee!",
                "Push Play Already!"
            ];

            this.randomHelpPls = Phaser.ArrayUtils.getRandomItem(this.helpPls);
            var style = {
                font: "20px Arial",
                fill: "CC0000",
                align: "center",
                stroke: '#000000',
                strokeThickness: 5,
                fill: '#DCDCDC'
            };

            this.kidTextStyle = {
                font: "20px Arial",
                fill: "#ffffff",
                // wordWrap: true, 
                align: "center",
                stroke: '#000000',
                strokeThickness: 5,
            };

            this.kidText = this.game.add.text(0, 0, this.randomHelpPls, this.kidTextStyle);
            this.kidText.anchor.set(0.5);
            this.kidText.alpha = 0.9;
            this.pls = this.game.add.tween(this.kidText).to({ alpha: 1 }, 3000, "Linear", true);
            this.pls.onComplete.add(function() { this.kidText.destroy(); }, this);
        }
    },

    ewwBugs: function() {

        var helpPls = [
            ""
        ];

        var randomHelpPls = Phaser.ArrayUtils.getRandomItem(helpPls);
        var style = {
            font: "20px Arial",
            fill: "CC0000",
            align: "center",
            stroke: '#000000',
            strokeThickness: 5,
            fill: '#DCDCDC'
        };

        var askForHelp = this.game.add.text(this.game.width / 2, this.game.height - 310, randomHelpPls, style);
        askForHelp.anchor.set(0.5);
        askForHelp.alpha = 0.9;
        askForHelp.fixedToCamera = true;

        var plsHelpTween = this.game.add.tween(askForHelp).to({ alpha: 1 }, 3000, "Linear", true);
        plsHelpTween.onComplete.add(function() { askForHelp.destroy(); });
    },

    choicesToMakeScreen: function() {
        var cheer = this.game.add.audio("cheer");
        //cheer.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            //console.log("it werks");
            this.state.start("LRCTest");
            //this.fade("PlayGame");
        }, this);
    },
};