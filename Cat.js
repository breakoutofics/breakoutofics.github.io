var BreakoutICS = BreakoutICS || {};

BreakoutICS.Cats = function(game, x, y, key, velocity){
    Phaser.Sprite.call(this, game, x, y, key);
    
    this.game = game;
    this.anchor.setTo(0.5);

    //give a random speed if none given.
    if(velocity === undefined){
        velocity = (40+Math.random()*20) * (Math.random()<0.5 ? 1:-1);
    }
    //enable physics
    this.game.physics.arcade.enableBody(this);
    this.body.collideWorldBounds = true;
    this.body.bounce.set(1,0);
    this.body.velocity.x = velocity;
};

BreakoutICS.Cats.prototype = Object.create(Phaser.Sprite.prototype);
BreakoutICS.Cats.prototype.constructor = BreakoutICS.Cat;
BreakoutICS.Cats.prototype.update = function(){

    var direction;
    if(this.body.velocity.x > 0){
        this.scale.setTo(-1,1);
        direction = 1;
  }
    else {
        this.scale.setTo(1, 1);
        direction = -1;
  }

    if(this.body.x >= 7500){
        this.scale.setTo(1,1);
        direction -1;
        this.body.velocity.x *= -1;
    }
    else if(this.body.x <= 6000){
        direction = 1;
        this.scale.setTo(-1,1);
        this.body.velocity.x = this.body.velocity.x += 2;
    }
};