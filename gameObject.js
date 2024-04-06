class GameObject {

    position = { x: 0, y: 0 }
    velocity = { x: 0, y: 0 }

    constructor(position, velocity) {
       
        this.position.y = position.y
        this.position.x = position.x
        this.velocity.x = velocity.x
        this.velocity.y = velocity.y
    }



    drawFire(color) {
        
        
        c.fillStyle = color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }



}