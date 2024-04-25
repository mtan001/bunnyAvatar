class bunnyAvatar extends Phaser.Scene {
    constructor() {
        super("1DMovement");
        this.my = {sprite: {}};
    }
    preload(){
        this.load.setPath("./assets/");
        this.load.image("bunny", "bunny1_stand.png");
        this.load.image("carrot", "carrot.png");
    }
    create(){
        document.getElementById('description').innerHTML = '<h2>bunnyAvatar.js</h2>'
        let my = this.my;
        my.sprite.bunny = this.add.sprite(400, 470, "bunny");
        my.sprite.carrot = this.add.sprite(my.sprite.bunny.x, 550, "carrot");
        my.sprite.carrot.visible = false;
        this.SpaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update(){
        let my = this.my;
        this.input.keyboard.on("keydown", function(event){
            if(event.code == "KeyA" && my.sprite.bunny.x > 65){
                my.sprite.bunny.x -= 0.08;
            }
            if(event.code == "KeyD" && my.sprite.bunny.x < 735){
                my.sprite.bunny.x += 0.08;
            }
        })
        if (Phaser.Input.Keyboard.JustDown(this.SpaceKey)) {
            my.sprite.carrot.visible = true;
            my.sprite.carrot.setPosition(my.sprite.bunny.x, 550);
        }
        if(my.sprite.carrot.y > -40){
            my.sprite.carrot.y -= 40;
        }
        else{
            my.sprite.carrot.visible = false;
        }
    }
}