class MyHealth extends GameObject {

    constructor() {
        super({ x: 60, y: 650 },{ x: 0, y: 0 })

       

        this.scale = 40
        this.width = 150
        this.maxWidth = 150
        this.height = 13
        this.slowDownEffect=0.08

        this.strokeWidth = 151
        this.strokeHeight = 14

    }
    draw() {
        c.fillStyle = "rgb(13, 141, 2)"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

        c.strokeStyle = "black";
        c.lineWidth = 6;
        c.strokeRect(this.position.x, this.position.y, this.strokeWidth, this.strokeHeight)
    }



}






class EarthIcon{
    constructor(){

        this.image = new Image()
        this.image.src = "./img/earthicon.png"
     

        this.image.onload = () => {
            this.scale = 0.24
            
            this.width = this.image.width * this.scale
            this.height = this.image.height * this.scale
            this.position ={x:0,y:0}
           
        }


    }
    draw({position}) {
        if (!this.image) return 
        c.drawImage(this.image, position.x, position.y, this.width, this.height)
    }
    
    
}





