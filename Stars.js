
class Stars extends WhenShot {
    constructor({ position, velocity, radius, color }) {
        super(({ position, velocity, radius, color }))
        
        

    }
    draw() {
     
       
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
       
    }
}

function StarsGenerator(velocityY) {
    stars.push(
        new Stars({
            position: {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height
            },
            velocity: {
                x: 0,
                y: velocityY
            },
            radius: 2,
            color: "white"
        })
    );
}

    