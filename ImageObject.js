class SpriteImageObject extends GameObject {
    constructor(position, velocity, imgSrc, width, height, fRate, FrameBuffer) {
        super(position, velocity)


        this.width = width
        this.height = height

        this.image = new Image()
        this.image.src = imgSrc
        this.fRate = fRate
        this.currentf = 0
        this.FrameBuffer = FrameBuffer
        this.elapsedFrames = 0
    }


    drawSprite() {


        if (!this.image) return

        const cropingImg = {
            position: {
                x: this.currentf * (this.image.width / this.fRate),
                y: 0
            },
            width: this.image.width / this.fRate,
            height: this.image.height
        }
        c.drawImage(this.image, cropingImg.position.x, cropingImg.position.y, cropingImg.width, cropingImg.height, this.position.x, this.position.y, this.width, this.height);

    }
    updateSprite() {
        if (this.image) {
            this.drawSprite()

            this.elapsedFrames++
            if (this.elapsedFrames % this.FrameBuffer === 0) {
                if (this.currentf < this.fRate - 1) { this.currentf++ }
                else { this.currentf = 0 }
            }


        }

    }


}






class NormalImageObject extends GameObject {
    constructor(position, velocity, imgSrc, width, height) {
        super(position, velocity)

        this.position = position
        this.width = width
        this.height = height

        this.image = new Image()
        this.image.width = width
        this.image.height = height

        this.image.src = imgSrc







    }

    draw() {
        if (!this.image) return
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }







    update() {
        if (this.image) {
            this.draw()
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y
        }
    }
}

