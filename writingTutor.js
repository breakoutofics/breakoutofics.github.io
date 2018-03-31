var BreakoutICS = BreakoutICS || {};

BreakoutICS.writingTutor = {

    init: function() {
        this.talkBeep = this.game.add.audio('talkBeep');


        // this.game.stage.backgroundColor = "#00000";
        this.game.stage.backgroundColor = "#11111";

    },
    create: function() {

        var mathLabMap = this.game.add.image(this.game.width / 2, this.game.height / 2, "writingCenterFront");
        mathLabMap.anchor.set(0.5);
        mathLabMap.scale.setTo(1.1, 1.1);


        // var blueBoxHeight = 1.7;
        // var blueButtonFivePositionX = this.game.width / 2 - 210;
        // var blueButtonFivePositionY = this.game.height / 20;
        // this.blueButtonFive = this.game.add.button(blueButtonFivePositionX, blueButtonFivePositionY, "blueButton", this.exBoyFriend, this);
        // this.blueButtonFive.anchor.set(0.5);
        // this.blueButtonFive.alpha = .51;
        // this.blueButtonFive.tint = 0x000000;
        // this.blueButtonFive.scale.setTo(6.5, 9);



        var blueBoxHeight = 1.7;
        var blueButtonFivePositionX = this.game.width / 2;
        var blueButtonFivePositionY = this.game.height / 10+30;
        this.blueButtonFive = this.game.add.button(blueButtonFivePositionX, blueButtonFivePositionY, "blueButton", this.exBoyFriend, this);
        this.blueButtonFive.anchor.set(0.5);
        this.blueButtonFive.alpha = .7;
        this.blueButtonFive.scale.setTo(6.5, 11.9);

        //this.game.add.tween(this.blueButtonFive).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);


        // player ------------------------------------------------
        this.playerPositionX = 0;
        this.player = this.add.sprite(this.playerPositionX, this.game.height / 2 + 90, 'player', 7);
        this.player.anchor.setTo(0.5);
        // this.player.animations.add("player", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7, true);
        this.player.animations.add("player", [0, 1, 2, 3], 7, true);
        this.game.physics.arcade.enable(this.player);
        this.player.body.velocity.x = 0;
        this.player.body.allowGravity = false;
        this.player.scale.setTo(.9);
        //this.player.play("player");
        this.game.add.tween(this.player).to({ x:90 }, 1000, Phaser.Easing.Linear.None, true);

        // player END ------------------------------------------------



        // Writing Tutor ------------------------------------------------
        
        this.mathTutor = this.add.sprite(this.game.width-130, this.game.height / 2+60, 'writingTutor', 7);
        this.mathTutor.anchor.setTo(0.5);
        this.mathTutor.alpha = 0;
        this.mathTutor.scale.setTo(0.5, 0.5);
        this.game.add.tween(this.mathTutor).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        // Writing Tutor END ------------------------------------------------





        //this.blueButtonFive.inputEnabled = true;
        // var blueButtonFiveText = "MAP OF LEEWARD";
        // var blueButtonFiveTextOnScreen = this.game.add.text(blueButtonFivePositionX, blueButtonFivePositionY, blueButtonFiveText, this.styleButtons);
        // blueButtonFiveTextOnScreen.anchor.set(0.5);
        // blueButtonFiveTextOnScreen.alpha = 0.1;
        // blueButtonFiveTextOnScreen.lineSpacing = -15;
        // this.game.add.tween(blueButtonFiveTextOnScreen).to({ alpha: 1 }, 2000, "Linear", true);




// play button ----------------------------------------------------------------------------------------------------------------
        var playButton = this.game.add.button(this.game.width - 10, this.game.height, "infoButton", this.infoTwoDialogState, this);
        playButton.anchor.set(1);
        playButton.tint = 0xFCBE12;
        playButton.alpha = 1;
        playButton.scale.setTo(0.25, 0.25);

// play button  END-----------------------------------------------------------------------------------------------------------------





// TEXT Mary ----------------------------------------------------------------------------------------------------------------

        this.style = {
            font: "19px Helvetica",
            // fill: "#CC0000"
             fill: "#ffffff",
            stroke: '#000000',
            strokeThickness: 6,
            //fill: '#FFC300'

        };

        this.introText = [
            "     ",
            "Welcome to the Writing Center",
            "\t\t\t\tMy name's Chris, i'm a Writing Consultant",
            "\t\t\t\tHow can I help you?",
            "  \t\t\t\t  ",
            "Hi Chris, my name's Tim",
            "\t\t\t\tCould help me with my writing?",
            "\t\t\t\tI'm working on an essay for",
            "\t\t\t\tGeorge Orwell's book \"1984.\"", 
            "  \t\t\t\t  ",
            "Ok let's see what you got so far."


        ];

        //The Math Lab's mission is to help Leeward CC MATH students develop proficiency in mathematical procedures by providing guidance on routine homework problems. 
        this.line = [];
        this.wordIndex = 0;
        this.lineIndex = 0;
        this.wordDelay = 120;
        this.lineDelay = 300;




        // text.anchor.set(0.5);
        // text.alpha = 0.1;
        //this.introWords = this.game.add.text(this.game.width / 2, 55, "", this.style);

        // this.game.add.tween(text).to( { alpha: 1 }, 2000, "Linear", true);
        this.introWords = this.game.add.text(this.game.width/2-180, -20, "", this.style);


        this.nextLine();

// TEXT Mary END ----------------------------------------------------------------------------------------------------------------





    }, // end create function.

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
        this.talkBeep.play();

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


    infoTwoDialogState: function() {
        this.click = this.game.add.audio('click');
        this.click.play();
        // var cheer = this.game.add.audio("cheer");
        // cheer.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log(BreakoutICS.game.global);
            //this.state.start("infoTwo");
            this.game.state.start("codingScreenWriting", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);

            //this.fade("PlayGame");
        }, this);
    },
};