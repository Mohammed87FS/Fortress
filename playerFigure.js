

class Player extends SpriteImageObject {
    constructor(position, velocity, imgSrc, width, height, fRate, FrameBuffer) {
        super(position, velocity, imgSrc, width, height, fRate, FrameBuffer)

        this.rotation = 0
        this.opacity = 1



    }


    drawSpritePlayer() {
        c.save()
        c.translate(
            this.position.x + this.width / 2,
            this.position.y + this.height / 2
        )
        c.rotate(this.rotation)
        c.translate(
            -this.position.x - this.width / 2,
            -this.position.y - this.height / 2
        )
        if (!this.image) return
        c.globalAlpha = this.opacity
        const cropingImg = {
            position: {
                x: this.currentf * (this.image.width / this.fRate),
                y: 0
            },
            width: this.image.width / this.fRate,
            height: this.image.height
        }
        c.drawImage(this.image, cropingImg.position.x, cropingImg.position.y, cropingImg.width, cropingImg.height, this.position.x, this.position.y, this.width, this.height);
        c.restore()
    }



    updateSpritePlayer() {
        this.drawSpritePlayer()
        this.position.x += this.velocity.x
        this.elapsedFrames++
        if (this.elapsedFrames % this.FrameBuffer === 0) {
            if (this.currentf < this.fRate - 1) { this.currentf++ }
            else { this.currentf = 0 }
        }
    }

}