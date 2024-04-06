const satan = new Satan()
const satanHealth = new SatanHealth({ x: 0, y: 0 }, { x: 0, y: 0 })

const blood = new SpriteImageObject({ x: 0, y: 0 }, { x: 0, y: 0 },"./img/Blood.png",canvas.width,this.height=canvas.height,11,4)
const myHealth = new MyHealth()
const earthIcon = new EarthIcon()


const GameBackground = new NormalImageObject({ x: 0, y: 0 }, { x: 0, y: 0 }, "./img/bg.png", canvas.width,canvas.height)
const GameBackground2 = new NormalImageObject({ x: 0, y: 0 }, { x: 0, y: 0 }, "./img/bg2.png", canvas.width,canvas.height)

const explosions = []
const grids = []
const spaceship = new Player({ x: canvas.width/2-32, y: canvas.height-75}, { x: 0, y: 0 }, "./img/Spritesheet.png", 75, 75, 9, 0.5);
const fires = []
const satanfires = []
const bullets = []

const keys = {
    a: { pressed: false },
    Enter: { pressed: false },
    d: { pressed: false },
    space: { pressed: false },
}

const stars = []
const bombs = []
const bombs2 = []
const trees = []