class Grid extends GameObject{

    constructor() {

        super({x:0,y:0},{x:4,y:0})
       
        this.invaders = []


        this.rows = Math.floor(Math.random() * 3+2)
        this.columns = Math.floor(Math.random() * 3+3)
        

        if (this.columns == 5||this.columns == 4||this.columns == 3) 
        {  this.width = this.columns * 90
            this.height = this.rows*60

            for (let x = 0; x < this.columns; x++) {
                for (let y = 0; y < this.rows; y++) {
                    this.invaders.push(new Invaders(
                        
                        {x: 90*x, y:60*y},{x: 0, y: 0},   "./img/invaderEye.png",75,75,23,4)
                      
    
    
                    )
                }
            }
        }
        else {
            this.width = this.columns * 80
            this.height = this.rows*50
            for (let x = 0; x < this.columns; x++) {
                for (let y = 0; y < this.rows; y++) {
                    this.invaders.push(new Invaders(
                        
                        
                        {x: 80*x, y: 50*y},{x: 0, y: 0},   "./img/aliennmine.png",35,45,1,4)
    
                    )
                }
            }
        }


    
       


    }
    update() {

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.velocity.y = 0
        if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
            this.velocity.x = -this.velocity.x
            this.velocity.y = 100
        }

    }
}




