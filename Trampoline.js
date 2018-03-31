var BreakoutICS = BreakoutICS || {};

BreakoutICS.Trampoline = function(game, x, y, key){
    Phaser.Sprite.call(this, game, x, y, key);
    
    this.game = game;
    this.anchor.setTo(0.5);


    //enable physics
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = true;
    this.immovable = true;
    this.body.moves = false;
};

BreakoutICS.Trampoline.prototype = Object.create(Phaser.Sprite.prototype);
BreakoutICS.Trampoline.prototype.constructor = BreakoutICS.Trampoline;




