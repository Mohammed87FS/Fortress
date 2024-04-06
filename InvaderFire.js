class InvaderFires extends GameObject {
    constructor(position, velocity, height, width) {
        super(position, velocity)


        this.height = height
        this.width = width


    }


    updateFire() {

        this.drawFire("red")
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }





}