
    class Invaders extends SpriteImageObject {
        constructor(position, velocity, imgSrc, width, height, fRate, FrameBuffer) {
            super(position, velocity, imgSrc, width, height, fRate, FrameBuffer)
            
           
        }
        
    
    updateInvader({ velocity }) {
        
        if (this.image) {
            this.drawSprite()

            this.position.x += velocity.x
            this.position.y += velocity.y
            
            this.elapsedFrames++
            if (this.elapsedFrames % this.FrameBuffer === 0) {
                if (this.currentf < this.fRate - 1) { this.currentf++ }
                else { this.currentf = 0 }
            }


        
           
        }

    }
    shoot(bullets) {
        bullets.push(new InvaderFires(
            {
                x: this.position.x + this.width / 2,
                y: this.position.y + this.height
            },
             {
                x: 0,
                y: 12
            },
            20,
            10

        ))
    }

}
