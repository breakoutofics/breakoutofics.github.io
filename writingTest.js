var BreakoutICS = BreakoutICS || {};

BreakoutICS.writingTest = {

    init: function() {
        this.talkBeep = this.game.add.audio('talkBeep');


        // this.game.stage.backgroundColor = "#00000";
        this.game.stage.backgroundColor = "#11111";

    },
    create: function() {
        this.click = this.game.add.audio('click');
        this.cheer = this.game.add.audio('cheer');
        this.Aww = this.game.add.audio('Aww');



        var LrcBackground = this.game.add.image(this.game.width / 2, this.game.height / 2);
        LrcBackground.anchor.set(0.5);
        LrcBackground.scale.setTo(0.3, 0.3);


        // var blueBoxHeight = 1.7;
        // var blueButtonFivePositionX = this.game.width / 2 - 210;
        // var blueButtonFivePositionY = this.game.height / 20;
        // this.blueButtonFive = this.game.add.button(blueButtonFivePositionX, blueButtonFivePositionY, "blueButton", this.exBoyFriend, this);
        // this.blueButtonFive.anchor.set(0.5);
        // this.blueButtonFive.alpha = .51;
        // this.blueButtonFive.tint = 0x000000;
        // this.blueButtonFive.scale.setTo(6.5, 9);


        // TEXT BOX ------------------------------------------------------------------------------------------
        var blueBoxHeight = 1.5;
        var blueButtonFivePositionX = this.game.width / 2;
        var blueButtonFivePositionY = this.game.height / 10 + 25;
        this.blueButtonFive = this.game.add.button(blueButtonFivePositionX, blueButtonFivePositionY, "blueButton", this.exBoyFriend, this);
        this.blueButtonFive.anchor.set(0.5);
        this.blueButtonFive.alpha = .7;
        this.blueButtonFive.scale.setTo(6.5, 2.4);
        // this.blueButtonFive.tint ="#FFFFFF";

        //this.game.add.tween(this.blueButtonFive).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        // TEXT BOX END ------------------------------------------------------------------------------------------

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
        this.game.add.tween(this.player).to({ x: 90 }, 1000, Phaser.Easing.Linear.None, true);

        // player END ------------------------------------------------



        // Writing Tutor ------------------------------------------------

        this.LRCTutorGirl = this.add.sprite(this.game.width - 110, this.game.height / 2 + 60, 'writingTutor', 7);
        this.LRCTutorGirl.anchor.setTo(0.5);
        this.LRCTutorGirl.alpha = 0;
        this.LRCTutorGirl.scale.setTo(0.5, 0.5);
        this.game.add.tween(this.LRCTutorGirl).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        // Writing Tutor END ------------------------------------------------


        // play button ----------------------------------------------------------------------------------------------------------------
        // var playButton = this.game.add.button(this.game.width - 10, this.game.height, "infoButton", this.infoTwoDialogState, this);
        // playButton.anchor.set(1);
        // playButton.tint = 0xFCBE12;
        // playButton.alpha = 1;
        // playButton.scale.setTo(0.25, 0.25);

        // play button  END-----------------------------------------------------------------------------------------------------------------


        // styles for buttons
        this.styleButtons = {
            font: "bold 20px Arial",
            // fill: "#CC0000",
            align: "center",
            stroke: '#000000',
            strokeThickness: 6,
            fill: '#FFC300'
        };

        // first answer button ----------------------------------------------------------------------------------------------------------------

        var blueButtonOnePositionX = this.game.width / 2;
        var blueButtonOnePositionY = this.game.height / 2 - 30;
        this.blueButtonOne = this.game.add.button(blueButtonOnePositionX, blueButtonOnePositionY, "blueButton", this.BUTTONIncorrect, this);
        this.blueButtonOne.anchor.set(0.5);
        this.blueButtonOne.alpha = 1;
        this.blueButtonOne.scale.setTo(4.0, blueBoxHeight);
        this.blueButtonOne.inputEnabled = true;
        var blueButtonOneText = "First Floor of the \nLearning Commons";
        var blueButtonOneTextOnScreen = this.game.add.text(blueButtonOnePositionX, blueButtonOnePositionY, blueButtonOneText, this.styleButtons);
        blueButtonOneTextOnScreen.anchor.set(0.5);
        blueButtonOneTextOnScreen.alpha = 1;
        blueButtonOneTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonOneTextOnScreen).to({ alpha: 1 }, 2000, "Linear", true);

        // first answer button END ----------------------------------------------------------------------------------------------------------------


        // second answer button ----------------------------------------------------------------------------------------------------------------

        var blueButtonTwoPositionX = this.game.width / 2;
        var blueButtonTwoPositionY = this.game.height / 2 + 50;
        this.blueButtonTwo = this.game.add.button(blueButtonTwoPositionX, blueButtonTwoPositionY, "blueButton", this.BUTTONIncorrect, this);
        this.blueButtonTwo.anchor.set(0.5);
        this.blueButtonTwo.alpha = 1;
        this.blueButtonTwo.scale.setTo(4.0, blueBoxHeight);
        this.blueButtonTwo.inputEnabled = true;
        var blueButtonTwoText = "Third Floor of the \nLearning Commons";
        var blueButtonTwoTextOnScreen = this.game.add.text(blueButtonTwoPositionX, blueButtonTwoPositionY, blueButtonTwoText, this.styleButtons);
        blueButtonTwoTextOnScreen.anchor.set(0.5);
        blueButtonTwoTextOnScreen.alpha = 1;
        blueButtonTwoTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonTwoTextOnScreen).to({ alpha: 1 }, 2000, "Linear", true);

        // second answer button END ----------------------------------------------------------------------------------------------------------------



        // thrid answer button ----------------------------------------------------------------------------------------------------------------

        var blueButtonThreePositionX = this.game.width / 2;
        var blueButtonThreePositionY = this.game.height / 2 + 130;
        this.blueButtonThree = this.game.add.button(blueButtonThreePositionX, blueButtonThreePositionY, "blueButton", this.BUTTONCorrect, this);
        this.blueButtonThree.anchor.set(0.5);
        this.blueButtonThree.alpha = 1;
        this.blueButtonThree.scale.setTo(4.0, blueBoxHeight);
        this.blueButtonThree.inputEnabled = true;
        var blueButtonThreeText = "Second Floor of the \nLearning Commons";
        var blueButtonThreeTextOnScreen = this.game.add.text(blueButtonThreePositionX, blueButtonThreePositionY, blueButtonThreeText, this.styleButtons);
        blueButtonThreeTextOnScreen.anchor.set(0.5);
        blueButtonThreeTextOnScreen.alpha = 1;
        blueButtonThreeTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonThreeTextOnScreen).to({ alpha: 1 }, 2000, "Linear", true);

        // third answer button END ----------------------------------------------------------------------------------------------------------------




        // TEXT LRC girl ----------------------------------------------------------------------------------------------------------------

        this.style = {
            font: "19px Helvetica",
            // fill: "#CC0000"
            fill: "#ffffff",
            stroke: '#000000',
            strokeThickness: 6,
            //fill: '#FFC300'

        };


        // incorrect Text for buttons
        this.styleButtons = {
            font: "bold 50px Helvetica",
            fill: "#CC0000",
            align: "center",
            stroke: '#000000',
            strokeThickness: 6,
            fill: '#FFC300'
        };


        this.introText = [
            "     ",
            "Well Done! Before you go",  
            "Here's a QUIZ on the Writing Center",
            "\t\t\t\t\t\tWhere is the Writing Center Located?"

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
        this.introWords = this.game.add.text(this.game.width / 2 - 180, -20, "", this.style);


        this.nextLine();

        // TEXT LRC girl END ----------------------------------------------------------------------------------------------------------------





    }, // end create function.

    update: function() {

    },

    BUTTONIncorrect: function() {
        this.click.play();
        this.Aww.play();
        // if (BreakoutICS.game.global.gotAlcohol == false && BreakoutICS.game.global.coins >= 2) {
        // if (BreakoutICS.game.global.LRCpassed == false) {
            //console.log(BreakoutICS.game.global.record);
            //BreakoutICS.game.global.gotAlcohol = true;
            //BreakoutICS.game.global.coins -= 2.00;


            var blueButtonOnePositionX = this.game.width / 2;
            var blueButtonOnePositionY = this.game.height / 2 - 30;
            this.beerPic = this.add.text(blueButtonOnePositionX, blueButtonOnePositionY, "INCORRECT", this.styleButtons);
            this.beerPic.anchor.set(0.5);
            // this.beerPic.alpha = 0.2;
            // this.beerPic.scale.set(0.23);
            // this.beerPic.inputEnabled = true;

            this.beerPic.alpha = 1;
            this.game.add.tween(this.beerPic).to({ alpha: 0 }, 3000, "Linear", true);




        //}
    },

    BUTTONCorrect: function() {
        this.cheer.play();
        BreakoutICS.game.global.WRITINGPassed = true;
        var blueButtonOnePositionX = this.game.width / 2;
        var blueButtonOnePositionY = this.game.height / 2 - 30;
        this.beerPic = this.add.text(blueButtonOnePositionX, blueButtonOnePositionY, "CORRECT!", this.styleButtons);
        this.beerPic.anchor.set(0.5);

        this.game.state.start("choicesToMake", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);

        this.beerPic.alpha = 1;
        this.game.add.tween(this.beerPic).to({ alpha: 0 }, 3000, "Linear", true);


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
            this.game.state.start("LRCTest", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);

            //this.fade("PlayGame");
        }, this);
    },
};