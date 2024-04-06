class SatanFires extends GameObject {
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


class Satan extends GameObject {

    constructor() {


        super({ x: 450, y: 40 }, { x: 2.5, y: 0 })

        this.opacity = 1



        this.image = new Image()
        this.image.src = "./img/satan.png"

        this.image.onload = () => {

            this.scaleH = 0.6
            this.scaleW = 0.7

            this.width = this.image.width * this.scaleW
            this.height = this.image.height * this.scaleH


        }

    }


    draw() {

        c.save()

        if (!this.image) return

        c.globalAlpha = this.opacity
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)

        c.restore()
    }

    update() {
        if (this.image) {
            this.draw()

            this.position.x += this.velocity.x

            if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {

                this.velocity.x = -this.velocity.x

            }


        }

    }

    shoot(satanfires) {
        satanfires.push(new SatanFires(
            {
                x: this.position.x + Math.random() * this.width - 50,
                y: this.position.y + this.height - 100
            },
            {
                x: 0,
                y: 8
            },
            25,
            25


        )),
            satanfires.push(new SatanFires(
                {
                    x: this.position.x + Math.random() * this.width - 30,
                    y: this.position.y + this.height - 100
                },
                {
                    x: 0,
                    y: 8
                },
                15,
                15


            ))
    }
}






class SatanHealth extends GameObject {

    constructor(position, velocity) {
        super(position, velocity)




        this.scale = 40
        this.width = 400
        this.height = 12
        this.slowDownEffect = 0.03

        this.strokeWidth = 402
        this.strokeHeight = 14

    }
    draw({ position }) {
        c.fillStyle = "rgb(160, 40, 30)"
        c.fillRect(position.x, position.y, this.width, this.height)

        c.strokeStyle = "black";
        c.lineWidth = 6;
        c.strokeRect(position.x, position.y, this.strokeWidth, this.strokeHeight)




    }



}


