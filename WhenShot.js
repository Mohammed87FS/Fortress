class WhenShot {
    constructor({ position, velocity, radius, color }) {
        this.position = position
        this.velocity = velocity
        this.radius = radius
        this.color = color
        this.opacity = 1


    }
    draw() {
        c.save()
        c.globalAlpha = this.opacity
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
        c.restore()
    }
    update() {

        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.opacity -= 0.03
    }



}

function ExplosionsGenerator({ color, object }) {

    for (let i = 0; i < 60; i++) {
        explosions.push(
            new WhenShot({
                position: {
                    x: object.position.x + object.width / 2,
                    y: object.position.y + object.height / 2
                },
                velocity: {
                    x: (Math.random() - 0.5) * 9,
                    y: (Math.random() - 0.5) * 9
                },
                radius: Math.random() * 6,
                color: color
            }


            ))
    }


}

function FogGenerator({ color }) {

    for (let i = 0; i < 50; i++) {
        explosions.push(
            new WhenShot({
                position: {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height
                },
                velocity: {
                    x: -2 + Math.random() * 4,
                     y: -2 + Math.random() * 4
                },
                radius: Math.random() * 8,
                color: color
            }


            ))
    }


}