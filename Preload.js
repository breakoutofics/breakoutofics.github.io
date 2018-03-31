var BreakoutICS = BreakoutICS || {};

//load game assets
BreakoutICS.PreloadState = {
    preload: function() {
        //show loading screen
        this.loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "loadingBar");
        this.loadingBar.anchor.setTo(0.5);
        this.loadingBar.scale.setTo(3);
        //method that expands the loading bar from 0-100%
        this.load.setPreloadSprite(this.loadingBar);


        // sociology assets
        this.load.image("arrowButton", "assets/sprites/glassArrow.png");
        this.load.image("actionButton", "assets/sprites/whiteButton.png");
        this.load.image("infoButton", "assets/sprites/arrowButton.png");
        this.load.image("chinatown", "assets/sprites/Chinatown.jpg");
        this.load.image("southPark", "assets/sprites/southPark.png");
        this.load.image("dollar", "assets/sprites/dollar.png");
        this.load.image("quarter", "assets/sprites/quarter.png");
        this.load.image("blueButton", "assets/sprites/blueButton.png");
        this.load.image("jail", "assets/sprites/prisonBars.png");
        this.load.image("beer", "assets/sprites/beer.png");
        this.game.load.audio("click", ["assets/sprites/click.mp3", "assets/sprites/click.ogg"]);
        this.game.load.audio("chaChing", ["assets/sprites/coinSound.mp3", "assets/sprites/coinSound.ogg"]);
        this.game.load.audio("talkBeep", ["assets/sprites/talkBeep.mp3", "assets/sprites/talkBeep.mp3"]);


        //this.load.image("actionButton", "assets/sprites/whiteButton.png");     
        // food
        this.load.image('noodles', 'assets/sprites/noodles.png');
        this.load.image('emptyPlate', 'assets/sprites/emptyPlate.JPG');


        // this.load.image('backgroundCity', 'assets/sprites/backgroundPic.png');
        this.load.image('superPKTitle', 'assets/sprites/titleScreenHomeless.png');
        this.load.image('playButton', 'assets/sprites/playButton.png');

        // this.load.spritesheet("player", "assets/sprites/kimmyWalkingSpriteSad.png", 77.5, 147);
        this.load.spritesheet("player", "assets/sprites/leewardStudentRunning.png", 200.5, 380);


        // icsBreakout new images
        this.load.image('mathLabMap', 'assets/sprites/mathLabMap.png');
        this.load.image('mathLabTutor', 'assets/sprites/mathLabTutor.png');
        this.load.image('mathLabPic', 'assets/sprites/mathLabPic.jpg');
        this.load.image('writingCenterMap', 'assets/sprites/writingCenterMap.jpg');
        this.load.image('writingTutor', 'assets/sprites/writingTutor.png');
        this.load.image('writingCenterFront', 'assets/sprites/writingCenterFront.jpg');
        this.load.image('mapOfLeeward', 'assets/sprites/mapOfLeeward.jpg');
        this.load.image('mapOfLeewardUpper', 'assets/sprites/mapOfLeewardUpper.png');
        this.load.image('mapOfLeewardLower', 'assets/sprites/mapOfLeewardLower.jpg');
        this.load.image('LRCgirl', 'assets/sprites/LRCgirl.png');
        this.load.image('LRCBackground', 'assets/sprites/LRCBackground.jpg');
        this.load.spritesheet('girlWalking', 'assets/sprites/happyGirlWalking.png', 78.1, 145);
        this.load.image('laptopBig', 'assets/sprites/laptopBig.png');
        this.load.image('coolGuy', 'assets/sprites/coolGuy.png');
        this.load.image('bedRoomScreen', 'assets/sprites/bedroomScreen.png');
        this.load.image('cafe', 'assets/sprites/cafe.jpg');
        this.load.image('frontOfLeeward', 'assets/sprites/frontOfLeeward.jpg');
        this.load.image('serverRoom', 'assets/sprites/serverRoom.jpg');
        this.load.image('leewardField', 'assets/sprites/leewardField.jpg');


        // home items
        this.load.image('keys', 'assets/sprites/keys.png');
        this.load.image('backpack', 'assets/sprites/backpack.png');
        this.load.image('charger', 'assets/sprites/charger.png');
        this.load.image('usb', 'assets/sprites/usb.png');
        this.load.image('iphone', 'assets/sprites/iphone.png');
        this.load.image('laptop', 'assets/sprites/laptop.png');
        this.load.image('livingRoomScene', 'assets/sprites/livingRoom.png');
        this.load.image('girlStanding', 'assets/sprites/girlStanding.png');

        // car ride
        this.load.image('truck', 'assets/sprites/redTruckBody.png');
        this.load.image('wheel', 'assets/sprites/redTruckWheel.png');
        this.load.image('backgroundTile', 'assets/sprites/dirtBackground.png');



        //old commmented out assets
        // this.load.spritesheet('cat', 'assets/sprites/cat.png', 61.9, 47);
        // this.load.spritesheet('monster', 'assets/sprites/monsterHair.png', 306.14 ,320 );
        // //this.load.spritesheet('monster', 'assets/sprites/monster.png', 389.7 ,408 );
        // this.load.spritesheet('smallMonster', 'assets/sprites/smallMonster.png', 76.5 ,80 );
        // this.load.spritesheet('trampoline', 'assets/sprites/trampolineFixed.png',220, 112);
        // this.load.spritesheet('fire', 'assets/sprites/soccerBall.png', 45, 45);
        // this.game.load.audio("boing", ["assets/sprites/boing.mp3", "assets/sounds/boing.ogg"]);
        // this.game.load.audio("coolHipHop", ["assets/sprites/coolHipHop.mp3", "assets/sounds/coolHipHop.ogg"]);
        // this.game.load.audio("jumpPark", ["assets/sprites/jumpPark.mp3", "assets/sounds/jumpPark.ogg"]);
        // this.game.load.audio("squeekSound", ["assets/sprites/squeekSound.mp3", "assets/sounds/squeekSound.ogg"]);
        // this.game.load.audio("ouch", ["assets/sprites/ouch.mp3", "assets/sounds/ouch.ogg"]);
        // this.game.load.audio("meow", ["assets/sprites/meow.mp3", "assets/sounds/meow.ogg"]);
        // this.game.load.audio("cheer", ["assets/sprites/cheer.mp3", "assets/sounds/cheer.ogg"]);
        //spritesheet ("key", "path", xframeSize, yframeSize, num of frames in sheet.)    
        //this.load.spritesheet("player", "assets/sprites/playerIdle.png",60,84);
        // this.load.spritesheet("player", "assets/sprites/playerRunJump.png", 52, 86);
        // this.load.spritesheet("player", "assets/sprites/kimmySpriteThreeFramesWalking.png", 77.5, 147);
        //this.load.spritesheet("player", "assets/sprites/player_spritesheet.png",28, 30, 5, 1,1);
        //load json file.
        // this.load.text("level", "assets/prefabrications/level.json");


        //load assets
        //this.load.image("player", "assets/sprites/BreakoutICSKid.png");
        this.load.image("arrowButton", "assets/sprites/glassArrow.png");
        this.load.image("actionButton", "assets/sprites/whiteButton.png");
        //this.load.spritesheet('fire', 'assets/sprites/fire_spritesheet.png', 20, 21, 2, 1, 1);
        //this.load.spritesheet('fire', 'assets/sprites/fireSprite.png', 169, 112);      
        //this.load.spritesheet('fire', 'assets/sprites/fireSpriteSmaller.png', 41, 35);      
        //this.load.image('barrel', 'assets/sprites/barrel.png');
        this.load.image('pufferFish', 'assets/sprites/pufferFish.png');
        this.load.image("playAgainButton", "assets/sprites/playAgainButton.png");
        this.load.image("flag", "assets/sprites/flag.png");

        //this.load.image('goal', 'assets/sprites/gorilla3.png');    
        //this.load.image('platform', 'assets/sprites/platform.png');    
        this.load.image('winner', 'assets/sprites/winnerPic.png');
        this.load.image('metalPlatform', 'assets/sprites/metalPlatform.png');
        this.load.image('ground', 'assets/sprites/ground.png');
        this.load.image('cloud', 'assets/sprites/clouds.png');
        this.load.image('clouds', 'assets/sprites/cloudstile.png');
        this.load.image('box', 'assets/sprites/box.png');
        this.load.image('boxTwo', 'assets/sprites/boxTwo.png');
        this.load.image('water', 'assets/sprites/water.png');
        this.load.image('wood', 'assets/sprites/wood.png');
        this.load.image('ladder', 'assets/sprites/ladder.png');
        this.load.image('danger', 'assets/sprites/danger.png');
        this.load.image('marioHat', 'assets/sprites/redHat.png');
        this.load.image('pipeWarp', 'assets/sprites/pipeWarp.png');
        this.load.image('backgroundCity', 'assets/sprites/backgroundPic.png');
        this.load.image('superPKTitle', 'assets/sprites/superPKTitleTwo.png');
        this.load.image('playButton', 'assets/sprites/playButton.png');
        this.load.spritesheet('cat', 'assets/sprites/cat.png', 61.9, 47);
        this.load.spritesheet('monster', 'assets/sprites/monsterHair.png', 306.14, 320);
        //this.load.spritesheet('monster', 'assets/sprites/monster.png', 389.7 ,408 );
        this.load.spritesheet('smallMonster', 'assets/sprites/smallMonster.png', 76.5, 80);
        this.load.spritesheet('trampoline', 'assets/sprites/trampolineFixed.png', 220, 112);
        this.load.spritesheet('fire', 'assets/sprites/soccerBall.png', 45, 45);


        this.game.load.audio("boing", ["assets/sprites/boing.mp3", "assets/sounds/boing.ogg"]);
        this.game.load.audio("coolHipHop", ["assets/sprites/coolHipHop.mp3", "assets/sounds/coolHipHop.ogg"]);
        this.game.load.audio("jumpPark", ["assets/sprites/jumpPark.mp3", "assets/sounds/jumpPark.ogg"]);
        this.game.load.audio("squeekSound", ["assets/sprites/squeekSound.mp3", "assets/sounds/squeekSound.ogg"]);
        this.game.load.audio("ouch", ["assets/sprites/ouch.mp3", "assets/sounds/ouch.ogg"]);
        this.game.load.audio("meow", ["assets/sprites/meow.mp3", "assets/sounds/meow.ogg"]);
        this.game.load.audio("cheer", ["assets/sprites/cheer.mp3", "assets/sounds/cheer.ogg"]);
        this.game.load.audio("Aww", ["assets/sprites/Aww.mp3", "assets/sounds/Aww.mp3"]);



        //spritesheet ("key", "path", xframeSize, yframeSize, num of frames in sheet.)    
        //this.load.spritesheet("player", "assets/sprites/playerIdle.png",60,84);
        //this.load.spritesheet("player", "assets/sprites/playerRunJump.png", 52, 86);
        //this.load.spritesheet("player", "assets/sprites/player_spritesheet.png",28, 30, 5, 1,1);

        //load json file.
        this.load.text("level", "assets/prefabrications/level.json");

    },
    create: function() {
        this.state.start("mainIntro");
        //this.state.start("home");
        //this.state.start("introduction");
        //this.state.start("Win");

        //this.state.start("platformGame");
        //this.state.start("codingScreen");
        //this.state.start("choicesToMake");
        //this.state.start("mathLab");
        //this.state.start("mathTutor");
        //this.state.start("mathTest");
        //this.state.start("writingCenter");
        //this.state.start("writingTutor");
        //this.state.start("writingTest");
        //this.state.start("mapOfLeeward");
        //this.state.start("LRC");
        //this.state.start("LRCTest");
        // this.state.start("codingScreenLRC");
        //this.state.start("codingScreenWriting");
        //this.state.start("codingScreenMath");
        //this.state.start("bedRoomFindScene");
        //this.state.start("livingRoom");

        //this.state.start("talkToGf");
    }
};