var BreakoutICS = BreakoutICS || {};


//BreakoutICS.dimensions = BreakoutICS.getGameLandscapeDimensions(700,414);

//create a new Phaser.Game object and assign it to our custom BreakoutICS.game property.
// then add our states to the game property.

//new files
BreakoutICS.game = new Phaser.Game(700, 414, Phaser.AUTO);
BreakoutICS.game.global = {
    coins: 0,
    programmingSkill: 0,
    LRCpassed: false,
    MathPassed: false,
    WRITINGPassed: false,
    record: false,
    countUntilJail: 0,
    stuff: 0,
    hadLunch: false,
    food:0,

    // if compassionateDisruption is false can't finish game.
    compassionateDisruption: false,
    gotAlcohol: false,
    childThere: true,
    // if begging text is false the info scene after the begging for change will not show.
    beggingText: true,
    goBackToEx: false,
    retreatism: false,
    // if change please is false can't finish game
    changePlease: false,
}
BreakoutICS.game.state.add("mainIntro", BreakoutICS.mainIntro);

BreakoutICS.game.state.add("introduction", BreakoutICS.introduction);


BreakoutICS.game.state.add("codingScreen", BreakoutICS.codingScreen);
BreakoutICS.game.state.add("choicesToMake", BreakoutICS.choicesToMake);
BreakoutICS.game.state.add("mathLab", BreakoutICS.mathLab);
BreakoutICS.game.state.add("mathTutor", BreakoutICS.mathTutor);
BreakoutICS.game.state.add("mathTest", BreakoutICS.mathTest);

BreakoutICS.game.state.add("writingCenter", BreakoutICS.writingCenter);
BreakoutICS.game.state.add("writingTutor", BreakoutICS.writingTutor);
BreakoutICS.game.state.add("writingTest", BreakoutICS.writingTest);


BreakoutICS.game.state.add("mapOfLeeward", BreakoutICS.mapOfLeeward);
BreakoutICS.game.state.add("mapOfLeewardLower", BreakoutICS.mapOfLeewardLower);
BreakoutICS.game.state.add("LRC", BreakoutICS.LRC);
BreakoutICS.game.state.add("lrcTutor", BreakoutICS.lrcTutor);
BreakoutICS.game.state.add("LRCTest", BreakoutICS.LRCTest);

BreakoutICS.game.state.add("codingScreenLRC", BreakoutICS.codingScreenLRC);
BreakoutICS.game.state.add("codingScreenWriting", BreakoutICS.codingScreenWriting);
BreakoutICS.game.state.add("codingScreenMath", BreakoutICS.codingScreenMath);
BreakoutICS.game.state.add("home", BreakoutICS.home);

BreakoutICS.game.state.add("talkToGf", BreakoutICS.talkToGf);
BreakoutICS.game.state.add("eatLunch", BreakoutICS.eatLunch);
BreakoutICS.game.state.add("platformGame", BreakoutICS.GameState);


BreakoutICS.game.state.add("bedRoomFindScene", BreakoutICS.bedRoomFindScene);
BreakoutICS.game.state.add("livingRoom", BreakoutICS.livingRoom);
BreakoutICS.game.state.add("backToSchool", BreakoutICS.backToSchool);


BreakoutICS.game.state.add("talkWithPeerMentor", BreakoutICS.talkWithPeerMentor);


// old files
BreakoutICS.game.state.add("Boot", BreakoutICS.BootState);
BreakoutICS.game.state.add("Preload", BreakoutICS.PreloadState);
BreakoutICS.game.state.add("TitleScreen", BreakoutICS.titleScreenState);
BreakoutICS.game.state.add("Win", BreakoutICS.winScreenState);

//start our boot state
BreakoutICS.game.state.start("Boot");