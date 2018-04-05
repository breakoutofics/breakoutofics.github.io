var BreakoutICS = BreakoutICS || {};

BreakoutICS.winScreenState = {





    init: function() {
        this.game.stage.backgroundColor = "#00000";
        this.talkBeep = this.game.add.audio('talkBeep');

    },
    create: function() {


        //  var frontOfLeeward = this.game.add.image(this.game.width / 2, this.game.height / 2, "frontOfLeeward");
        // frontOfLeeward.anchor.set(0.5);
        // frontOfLeeward.scale.setTo(1.1, 1.1);


        // gets players name.
        this.initializedName = localStorage.getItem("playerName");

        // BreakoutICS.game.global.coins = BreakoutICS.game.global.coins+4;

        this.click = this.game.add.audio('click');
        this.game.time.events.loop(Phaser.Timer.SECOND * 6, this.kidTalkingToMommy, this);
        this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.mommyTalking, this);



        // // play button ----------------------------------------------------------------------------------------------------------------
        // var playButton = this.game.add.button(this.game.width - 10, this.game.height, "infoButton", this.seePeerMentor, this);
        // playButton.anchor.set(1);
        // playButton.tint = 0xFCBE12;
        // playButton.alpha = 1;
        // playButton.scale.setTo(0.25, 0.25);

        // play button  END-----------------------------------------------------------------------------------------------------------------



        // this.style = {
        //     font: "bold 30px Arial",
        //     fill: "#CC0000",
        //     align: "center"
        // };

        // this.styleKid = {
        //     font: "14px Arial",
        //     fill: "#CC0000",
        //     align: "center"
        // };

        // this.styleButtons = {
        //     font: "bold 20px Arial",
        //     fill: "#CC0000",
        //     align: "center",
        //     stroke: '#000000',
        //     strokeThickness: 6,
        //     fill: '#FFC300'
        // };

        // this.styleButtonsPassed = {
        //     font: "bold 20px Arial",
        //     fill: "#CC0000",
        //     align: "center",
        //     stroke: '#000000',
        //     strokeThickness: 6,
        //     //fill: '#FFC300'
        // };

        // this.styleBeer = {
        //     font: "bold 30px Arial",
        //     fill: "#CC0000",
        //     align: "center",
        //     stroke: '#000000',
        //     strokeThickness: 8,
        //     fill: '#FFC300'
        // };


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
            "Congratulations!",
            "You were able to BREAKOUT of ICS",
            "To receive your prize!",
            "EMAIL dcordial@hawaii.edu",
            "and say",
            "I BROKE OUT OF", 
            "THE ICS CHALLENGE",
            "",
            "1 prize per student",
            "The first 3 winners get a prize",
            "",
            "Programmed by Travis Hipolito with help",
            "and Ideas from Daniel Cordial"

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
        this.introWords = this.game.add.text(10, 20, "", this.style);


        this.nextLine();

        // TEXT Mary END ----------------------------------------------------------------------------------------------------------------







        // // Map of Leeward.
        // var blueBoxHeight = 1.7;
        // var blueButtonFivePositionX = this.game.width / 2 - 150;
        // var blueButtonFivePositionY = this.game.height / 10;
        // this.blueButtonFive = this.game.add.button(blueButtonFivePositionX, blueButtonFivePositionY, "blueButton", this.mapOfLeeward, this);
        // this.blueButtonFive.anchor.set(0.5);
        // this.blueButtonFive.alpha = 0.2;
        // this.blueButtonFive.scale.setTo(4.0, blueBoxHeight);
        // this.blueButtonFive.inputEnabled = true;
        // var blueButtonFiveText = "MAP OF LEEWARD";
        // var blueButtonFiveTextOnScreen = this.game.add.text(blueButtonFivePositionX, blueButtonFivePositionY, blueButtonFiveText, this.styleButtons);
        // blueButtonFiveTextOnScreen.anchor.set(0.5);
        // blueButtonFiveTextOnScreen.alpha = 0.1;
        // blueButtonFiveTextOnScreen.lineSpacing = -15;
        // this.game.add.tween(blueButtonFiveTextOnScreen).to({ alpha: 1 }, 2000, "Linear", true);

        // // LRC.
        // var blueBoxHeight = 1.7;
        // var blueButtonSixPositionX = this.game.width / 2 + 150;
        // var blueButtonSixPositionY = this.game.height / 10;
        // this.blueButtonSix = this.game.add.button(blueButtonSixPositionX, blueButtonSixPositionY, "blueButton", this.LRCButton, this);
        // this.blueButtonSix.anchor.set(0.5);
        // this.blueButtonSix.alpha = 0.2;
        // this.blueButtonSix.scale.setTo(4.0, blueBoxHeight);
        // this.blueButtonSix.inputEnabled = true;
        // var blueButtonSixText = "LEARNING RESOURCE\nCENTER";

        // if (BreakoutICS.game.global.LRCpassed == true) {

        //     var blueButtonSixTextOnScreen = this.game.add.text(blueButtonSixPositionX, blueButtonSixPositionY, "LRC PASSED!", this.styleButtonsPassed);

        // } else {

        //     var blueButtonSixTextOnScreen = this.game.add.text(blueButtonSixPositionX, blueButtonSixPositionY, blueButtonSixText, this.styleButtons);

        // }


        // blueButtonSixTextOnScreen.anchor.set(0.5);
        // blueButtonSixTextOnScreen.alpha = 0.1;
        // blueButtonSixTextOnScreen.lineSpacing = -15;
        // this.game.add.tween(blueButtonSixTextOnScreen).to({ alpha: 1 }, 2000, "Linear", true);

        // // Writing Center button.
        // var blueButtonOnePositionX = this.game.width / 2 - 150;
        // var blueButtonOnePositionY = this.game.height / 2 - 50;
        // this.blueButtonOne = this.game.add.button(blueButtonOnePositionX, blueButtonOnePositionY, "blueButton", this.writingCenter, this);
        // this.blueButtonOne.anchor.set(0.5);
        // this.blueButtonOne.alpha = 0.2;
        // this.blueButtonOne.scale.setTo(4.0, blueBoxHeight);
        // this.blueButtonOne.inputEnabled = true;
        // var blueButtonOneText = "WRITING CENTER";

        // if (BreakoutICS.game.global.WRITINGPassed == false) {

        //     var blueButtonOneTextOnScreen = this.game.add.text(blueButtonOnePositionX, blueButtonOnePositionY, blueButtonOneText, this.styleButtons);

        // } else {

        //     var blueButtonOneTextOnScreen = this.game.add.text(blueButtonOnePositionX, blueButtonOnePositionY, "WRITING CENTER \nPASSED", this.styleButtonsPassed);

        // }




        // blueButtonOneTextOnScreen.anchor.set(0.5);
        // blueButtonOneTextOnScreen.alpha = 0.1;
        // blueButtonOneTextOnScreen.lineSpacing = -15;
        // this.game.add.tween(blueButtonOneTextOnScreen).to({ alpha: 1 }, 2000, "Linear", true);

        // // Math lab button.
        // var blueButtonTwoPositionX = this.game.width / 2 + 150;
        // var blueButtonTwoPositionY = this.game.height / 2 - 50;
        // this.blueButtonTwo = this.game.add.button(blueButtonTwoPositionX, blueButtonTwoPositionY, "blueButton", this.mathLab, this);
        // this.blueButtonTwo.anchor.set(0.5);
        // this.blueButtonTwo.alpha = 0.2;
        // this.blueButtonTwo.scale.setTo(4.0, blueBoxHeight);
        // this.blueButtonTwo.inputEnabled = true;
        // var blueButtonTwoText = "MATH LAB";

        // if (BreakoutICS.game.global.MathPassed == false) {

        //     var blueButtonTwoTextOnScreen = this.game.add.text(blueButtonTwoPositionX, blueButtonTwoPositionY + 5, blueButtonTwoText, this.styleButtons);

        // } else {

        //     var blueButtonTwoTextOnScreen = this.game.add.text(blueButtonTwoPositionX, blueButtonTwoPositionY + 5, "MATH LAB \nPASSED", this.styleButtonsPassed);

        // }



        // // var blueButtonTwoTextOnScreen = this.game.add.text(blueButtonTwoPositionX, blueButtonTwoPositionY + 5, blueButtonTwoText, this.styleButtons);
        // blueButtonTwoTextOnScreen.anchor.set(0.5);
        // blueButtonTwoTextOnScreen.alpha = 0.1;
        // blueButtonTwoTextOnScreen.lineSpacing = -15;
        // this.game.add.tween(blueButtonTwoTextOnScreen).to({ alpha: 1 }, 2000, "Linear", true);

        // // shelter button.
        // var blueButtonThreePositionX = this.game.width / 2 + 150;
        // var blueButtonThreePositionY = this.game.height / 2 + 50;
        // this.blueButtonThree = this.game.add.button(blueButtonThreePositionX, blueButtonThreePositionY, "blueButton", this.talkWithPeerMentor, this);
        // this.blueButtonThree.anchor.set(0.5);
        // this.blueButtonThree.alpha = 0.2;
        // this.blueButtonThree.scale.setTo(4.0, blueBoxHeight);
        // this.blueButtonThree.inputEnabled = true;
        // var blueButtonThreeText = "TALK WITH \n PEER MENTOR";
        // var blueButtonThreeTextOnScreen = this.game.add.text(blueButtonThreePositionX, blueButtonThreePositionY + 5, blueButtonThreeText, this.styleButtons);
        // blueButtonThreeTextOnScreen.anchor.set(0.5);
        // blueButtonThreeTextOnScreen.alpha = 0.1;
        // blueButtonThreeTextOnScreen.lineSpacing = -15;
        // this.game.add.tween(blueButtonThreeTextOnScreen).to({ alpha: 1 }, 2000, "Linear", true);

        // // beg for change button.
        // var blueButtonFourPositionX = this.game.width / 2 - 150;
        // var blueButtonFourPositionY = this.game.height / 2 + 50;
        // this.blueButtonFour = this.game.add.button(blueButtonFourPositionX, blueButtonFourPositionY, "blueButton", this.goHome, this);
        // this.blueButtonFour.anchor.set(0.5);
        // this.blueButtonFour.alpha = 0.2;
        // this.blueButtonFour.scale.setTo(4.0, blueBoxHeight);
        // this.blueButtonFour.inputEnabled = true;
        // var blueButtonFourText = "EAT LUNCH";
        // if (BreakoutICS.game.global.food < 2) {
        //     var blueButtonFourTextOnScreen = this.game.add.text(blueButtonFourPositionX, blueButtonFourPositionY + 5, blueButtonFourText, this.styleButtons);

        // }else{
        //     var blueButtonFourTextOnScreen = this.game.add.text(blueButtonFourPositionX, blueButtonFourPositionY + 5, "Delicious!", this.styleButtonsPassed);

        // }




        // blueButtonFourTextOnScreen.anchor.set(0.5);
        // blueButtonFourTextOnScreen.alpha = 0.1;
        // blueButtonFourTextOnScreen.lineSpacing = -15;
        // this.game.add.tween(blueButtonFourTextOnScreen).to({ alpha: 1 }, 2000, "Linear", true);

        // //this.isChildThere();

        //create player.
        this.player = this.add.sprite(this.game.width / 2, this.game.height / 2, 'player', 7);
        this.player.anchor.setTo(0.5);
        // this.player.animations.add("player", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7, true);
        this.player.animations.add("player", [0, 1, 2, 3], 7, true);

        this.game.physics.arcade.enable(this.player);
        this.player.body.velocity.x = 0;
        this.player.body.allowGravity = false;
        this.player.scale.setTo(0.7);
        this.player.play("player");

        //this.loadStartingTextAndMoney();
    },


    update: function() {

        var thereIsANewName = true;
        // this.getNames = this.checkName();
        if (this.initializedName != this.getNames && thereIsANewName) {
            this.initializedName = this.getNames;
            this.amountOfMoney.destroy();
            this.loadStartingTextAndMoney();
            thereIsANewName = false;
        }

        // this.mouseOverButton();

        // kid code

        //     if (BreakoutICS.game.global.childThere == true) {
        //         this.childRunning();
        //         if (this.kidText) {
        //             this.kidText.x = Math.floor(this.kid.x + this.kid.width / 2 - 40);
        //             this.kidText.y = Math.floor(this.kid.y + this.kid.height / 2 - 100);
        //         }
        //     }
    },

    // checkName: function() {
    //     this.getname = localStorage.getItem("playerName");
    //     return this.getname;
    // },


    // mouseOverButton: function() {
    //     if (this.blueButtonOne.input.pointerOver()) {
    //         this.blueButtonOne.alpha = 1;
    //         this.player.scale.setTo(-0.7, 0.7);
    //     } else {
    //         this.blueButtonOne.alpha = 0.5;
    //     }
    //     if (this.blueButtonTwo.input.pointerOver()) {
    //         this.blueButtonTwo.alpha = 1;
    //         this.player.scale.setTo(0.7, 0.7);

    //     } else {
    //         this.blueButtonTwo.alpha = 0.5;
    //     }
    //     if (this.blueButtonThree.input.pointerOver()) {
    //         this.blueButtonThree.alpha = 1;
    //         this.player.scale.setTo(0.7, 0.7);

    //     } else {
    //         this.blueButtonThree.alpha = 0.5;
    //     }
    //     if (this.blueButtonFour.input.pointerOver()) {
    //         this.blueButtonFour.alpha = 1;
    //         this.player.scale.setTo(-0.7, 0.7);
    //     } else {
    //         this.blueButtonFour.alpha = 0.5;
    //     }
    //     if (this.blueButtonFive.input.pointerOver()) {
    //         this.blueButtonFive.alpha = 1;
    //         this.player.scale.setTo(-0.7, 0.7);
    //     } else {
    //         this.blueButtonFive.alpha = 0.5;
    //     }
    //     if (this.blueButtonSix.input.pointerOver()) {
    //         this.blueButtonSix.alpha = 1;
    //         this.player.scale.setTo(0.7, 0.7);

    //     } else {
    //         this.blueButtonSix.alpha = 0.5;
    //     }
    // },


    mommyTalking: function() {

        this.momHelpPls = [
            "WooHooo!",
            "You Rock!",
            "Programmed in javascript!",
            "All artwork is from google images"
        ];

        this.momRandomHelpPls = Phaser.ArrayUtils.getRandomItem(this.momHelpPls);

        this.momTextStyle = {
            font: "30px Helvetica",
            fill: "#ffffff",
            // wordWrap: true, 
            align: "center",
            stroke: '#000000',
            strokeThickness: 5,
        };

        this.momText = this.game.add.text(this.game.width / 2, this.game.height / 2 + 160, this.momRandomHelpPls, this.momTextStyle);
        this.momText.anchor.set(0.5);
        this.momText.alpha = 0.9;
        this.momPls = this.game.add.tween(this.momText).to({ alpha: 1 }, 3000, "Linear", true);
        this.momPls.onComplete.add(function() { this.momText.destroy(); }, this);

    },


    kidTalkingToMommy: function() {
        if (BreakoutICS.game.global.childThere == true) {

            // this.helpPls = ["I Love u Mommy!",
            //     "I'm hungry...",
            //     "ewww a bug!",
            //     "It's ok mommy!",
            //     "Everything will \n be ok!",
            //     "I love u Mommy!"
            // ];

            // this.randomHelpPls = Phaser.ArrayUtils.getRandomItem(this.helpPls);
            // var style = {
            //     font: "20px Arial",
            //     fill: "CC0000",
            //     align: "center",
            //     stroke: '#000000',
            //     strokeThickness: 5,
            //     fill: '#DCDCDC'
            // };

            this.kidTextStyle = {
                font: "20px Arial",
                fill: "#ffffff",
                // wordWrap: true, 
                align: "center",
                stroke: '#000000',
                strokeThickness: 5,
            };

            this.kidText = this.game.add.text(0, 0, this.randomHelpPls, this.kidTextStyle)
            this.kidText.anchor.set(0.5);
            this.kidText.alpha = 0.9;

            this.pls = this.game.add.tween(this.kidText).to({ alpha: 1 }, 3000, "Linear", true);
            this.pls.onComplete.add(function() { this.kidText.destroy(); }, this);
        }


    },

    // kid code.
    // isChildThere: function() {
    //     if (BreakoutICS.game.global.childThere == true) {
    //         //create kid.
    //         // this.kid = this.add.sprite(20, this.game.height/2+65, 'kid', 5);
    //         // this.kid.anchor.setTo(0.5);
    //         // this.kid.animations.add("kid", [0, 1, 2, 3, 4, 5], 7, true);
    //         // this.game.physics.arcade.enable(this.kid);
    //         // this.kid.body.velocity.x = 10;
    //         // this.kid.body.allowGravity = false;
    //         // this.kid.scale.setTo(1.2,1.2);



    //     } else {
    //         console.log("child taken away");
    //         this.textOnScreenWidth = this.game.height - 35;
    //         this.takenAway = this.add.text(this.game.width / 2, this.textOnScreenWidth + 30, "Kid Got Taken Away", this.styleKid);
    //         this.takenAway.anchor.set(0.5);
    //     }
    // },

    childRunning: function() {
        if (this.kid.body.x >= 500) {
            console.log(this.kid.body.x);
            this.kid.scale.setTo(-1.2, 1.2);
            this.kid.body.velocity.x = -80;
            this.kid.play("kid");
        } else if (this.kid.body.x <= 70) {

            this.kid.scale.setTo(1.2, 1.2);
            this.kid.body.velocity.x = this.kid.body.velocity.x += 2;
            this.kid.play("kid");
        }
    },


    // loadStartingTextAndMoney: function() {
    //     this.textOnScreenWidth = this.game.height - 35;
    //     this.amountOfMoney = this.add.text(this.game.width / 2, this.textOnScreenWidth, ": $" + BreakoutICS.game.global.coins.toFixed(2), this.style);
    //     this.amountOfMoney.anchor.set(0.5);
    // },


    seePeerMentor: function() {
        // BreakoutICS.game.global.goBackToEx = true;
        this.click.play();
        this.game.state.start("home", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
        console.log("clicking home");
    },

    writingCenter: function() {
        this.click.play();
        // if (BreakoutICS.game.global.gotAlcohol == false && BreakoutICS.game.global.coins >= 2) {
        if (BreakoutICS.game.global.WRITINGPassed == false) {
            //console.log(BreakoutICS.game.global.record);
            //BreakoutICS.game.global.gotAlcohol = true;
            //BreakoutICS.game.global.coins -= 2.00;
            this.game.state.start("writingCenter", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);

            // } else if (BreakoutICS.game.global.coins <= 0) {
            //     console.log("you bought beer");
            //     console.log(BreakoutICS.game.global.record);

            //     // var blueButtonOnePositionX = this.game.width/2-150;
            //     // var blueButtonOnePositionY = this.game.height/2-140;
            //     // this.beerPic = this.game.add.sprite(blueButtonOnePositionX, blueButtonOnePositionY+40, "beer");
            //     // this.beerPic.anchor.set(0.5);
            //     // this.beerPic.scale.set(0.23);

            //     var blueButtonOnePositionX = this.game.width / 2 - 150;
            //     var blueButtonOnePositionY = this.game.height / 2 - 140;
            //     this.beerPic = this.add.text(blueButtonOnePositionX, blueButtonOnePositionY + 90, "NO MONEY!!!", this.styleBeer);
            //     this.beerPic.anchor.set(0.5);
            //     // this.beerPic.alpha = 0.2;
            //     // this.beerPic.scale.set(0.23);
            //     // this.beerPic.inputEnabled = true;

            //     this.beerPic.alpha = 1;
            //     this.game.add.tween(this.beerPic).to({ alpha: 0 }, 2000, "Linear", true);

            //     // this.amountOfMoney.destroy();
            //     // this.amountOfMoney = this.add.text(this.game.width/2,  this.textOnScreenWidth, "you have: $" + BreakoutICS.game.global.coins.toFixed(2), this.style);
            //     // this.amountOfMoney.anchor.set(0.5);
            //     // console.log(BreakoutICS.game.global.coins);
        }
    },

    LRCButton: function() {
        if (BreakoutICS.game.global.LRCpassed == false) {
            this.click.play();
            this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
                console.log("compassionate Disruption button clicked!");
                console.log(BreakoutICS.game.global.LRCButton);
                this.game.state.start("LRC", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
                //this.fade("PlayGame");
            }, this);
        }
    },

    mathLab: function() {
        this.click.play();
        // if (BreakoutICS.game.global.record == false) {
        //     BreakoutICS.game.global.coins += 10.00;
        //     BreakoutICS.game.global.countUntilJail = BreakoutICS.game.global.countUntilJail + 1;
        //     console.log("you got money");
        //     console.log("your record: " + BreakoutICS.game.global.record);
        //     console.log("amount of clicks to jail time: " + BreakoutICS.game.global.countUntilJail);

        //     this.amountOfMoney.destroy();
        //     this.amountOfMoney = this.add.text(this.game.width / 2, this.textOnScreenWidth, localStorage.getItem("playerName") + " has: $" + BreakoutICS.game.global.coins.toFixed(2), this.style);
        //     this.amountOfMoney.anchor.set(0.5);
        //     console.log(BreakoutICS.game.global.coins);
        // }

        if (BreakoutICS.game.global.MathPassed == false) {
            this.game.state.start("mathLab", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
        }
    },

    talkWithPeerMentor: function() {


        this.game.state.start("talkWithPeerMentor", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);


        // if (BreakoutICS.game.global.changePlease == true && BreakoutICS.game.global.LRCButton == true) {
        //     this.shelterGotIn();
        // } else {
        //     this.shelter();
        // }
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

    shelter: function() {
        this.click.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log("shelter button clicked!");
            console.log("change please is: " + BreakoutICS.game.global.changePlease);
            console.log("compassionate disruption is: " + BreakoutICS.game.global.LRCButton);

            this.game.state.start("sheltersTextChoice", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
            //this.fade("PlayGame");
        }, this);
    },

    shelterGotIn: function() {
        this.click.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log("shelter button clicked!");
            console.log("change please is: " + BreakoutICS.game.global.changePlease);
            console.log("compassionate disruption is: " + BreakoutICS.game.global.LRCButton);
            this.game.state.start("sheltersTextOneChoice", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
            //this.fade("PlayGame");
        }, this);
    },

    goHome: function() {
        BreakoutICS.game.global.changePlease = true;
        if (BreakoutICS.game.global.stuff == 0) {
            this.click.play();
            // var cheer = this.game.add.audio("cheer");
            // cheer.play();
            this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
                console.log("info One State");
                console.log(BreakoutICS.game.global);
                // BreakoutICS.game.global.coins = 0;
                this.game.state.start("talkToGf", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
                //this.fade("PlayGame");
            }, this);
        }
    },
};