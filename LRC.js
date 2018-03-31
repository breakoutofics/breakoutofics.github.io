var BreakoutICS = BreakoutICS || {};

BreakoutICS.LRC = {

    init: function() {


        // this.game.stage.backgroundColor = "#00000";
        this.game.stage.backgroundColor = "#11111";

    },
    create: function() {

        var lrcLabMap = this.game.add.image(this.game.width / 2+200, this.game.height / 2, "writingCenterMap");
        lrcLabMap.anchor.set(0.5);
        lrcLabMap.scale.setTo(1.3, 1.3);


        var blueBoxHeight = 1.7;
        var blueButtonFivePositionX = this.game.width / 2 - 210;
        var blueButtonFivePositionY = this.game.height / 20+150;
        this.blueButtonFive = this.game.add.button(blueButtonFivePositionX, blueButtonFivePositionY, "blueButton", this.exBoyFriend, this);
        this.blueButtonFive.anchor.set(0.5);
        this.blueButtonFive.alpha = .51;
        this.blueButtonFive.tint = 0x000000;
        this.blueButtonFive.scale.setTo(6.5, 9);



        var blueBoxHeight = 1.7;
        var blueButtonFivePositionX = this.game.width / 2 - 220;
        var blueButtonFivePositionY = this.game.height / 10 +150;
        this.blueButtonFive = this.game.add.button(blueButtonFivePositionX, blueButtonFivePositionY, "blueButton", this.exBoyFriend, this);
        this.blueButtonFive.anchor.set(0.5);
        this.blueButtonFive.alpha = 1;
        this.blueButtonFive.scale.setTo(6.5, 7.5);

        //create player.
        this.player = this.add.sprite(this.game.width / 2+160, this.game.height / 2+60, 'player', 7);
        this.player.anchor.setTo(0.5);
        // this.player.animations.add("player", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7, true);
        this.player.animations.add("player", [0, 1, 2, 3], 7, true);

        this.game.physics.arcade.enable(this.player);
        this.player.body.velocity.x = 0;
        this.player.body.allowGravity = false;
        this.player.scale.setTo(0.3);
        this.player.play("player");

        //this.blueButtonFive.inputEnabled = true;
        // var blueButtonFiveText = "MAP OF LEEWARD";
        // var blueButtonFiveTextOnScreen = this.game.add.text(blueButtonFivePositionX, blueButtonFivePositionY, blueButtonFiveText, this.styleButtons);
        // blueButtonFiveTextOnScreen.anchor.set(0.5);
        // blueButtonFiveTextOnScreen.alpha = 0.1;
        // blueButtonFiveTextOnScreen.lineSpacing = -15;
        // this.game.add.tween(blueButtonFiveTextOnScreen).to({ alpha: 1 }, 2000, "Linear", true);



        var playButton = this.game.add.button(this.game.width - 10, this.game.height, "infoButton", this.lrcTutor, this);
        playButton.anchor.set(1);
        playButton.tint = 0xFCBE12;
        playButton.alpha = 1;
        playButton.scale.setTo(0.25, 0.25);

        // var domesticViolence = this.game.add.image(this.game.width/2, this.game.height/2+90, "kidWithPic");
        //     domesticViolence.anchor.set(0.5);
        //     domesticViolence.alpha = 0;
        //     domesticViolence.scale.setTo(0.7,0.7);


        // var domesticViolenceTween = this.game.add.tween(domesticViolence).to({alpha:1}, 5000, "Linear", true);


        this.style = {
            font: "19px Helvetica",
            // fill: "#CC0000"
            // fill: "#ffffff",
            stroke: '#000000',
            strokeThickness: 6,
            fill: '#FFC300'

        };

        this.introText = [
            "The Learning Resource Commons", 
            "is a friendly place where",
            "you can get help with your courses",
            "ICS 111, 211, 212 included",
            "Located on the Second",
            "Floor of the Learning Commons",
            "www.leeward.hawaii.edu/lrc",
            "LRC Hours",
            "Monday - Thursday: 8:30am - 4:00pm",
            "Friday - 8:30am - 2:00pm"

        ];

        this.line = [];
        this.wordIndex = 0;
        this.lineIndex = 0;
        this.wordDelay = 120;
        this.lineDelay = 200;


        // text.anchor.set(0.5);
        // text.alpha = 0.1;

        // this.game.add.tween(text).to( { alpha: 1 }, 2000, "Linear", true);
        this.introWords = this.game.add.text(10, 30, "", this.style);


        this.nextLine();





    },

    update: function() {

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


    lrcTutor: function() {
        this.click = this.game.add.audio('click');
        this.click.play();
        // var cheer = this.game.add.audio("cheer");
        // cheer.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log(BreakoutICS.game.global);
            //this.state.start("infoTwo");
            this.game.state.start("lrcTutor", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);

            //this.fade("PlayGame");
        }, this);
    },
};