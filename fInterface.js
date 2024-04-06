
////Some important basic variables
let startGame = true
let gamestarted = false
let startTransform = false
//////////////////////////////////7


const Score = document.getElementById("myScore")
const Timer = document.getElementById("myTimer")

const rankings = document.getElementById("rankings")
const rankings2 = document.getElementById("rankings2")






const startScreen = new SpriteImageObject({ x: 0, y: 0 }, { x: 0, y: 0 }, "./img/StartScreen.png", canvas.width ,  canvas.height - 50, 11, 3)

//////////////////////////////////7
// making a ranking system for users who will be stored!!!!!!!!!!!!!!!1

let usersS = [];

function loadUsers() {
  try {
    let storedUsers = localStorage.getItem('usersS');
    usersS = storedUsers ? JSON.parse(storedUsers) : [];
  } catch (e) { }
}



let newUser = {
  name: 0,
  score: 0,
  time: 0
};


function saveUsers() {
  localStorage.setItem('usersS', JSON.stringify(usersS));
}

function displayResults() {


  let rankings = "";


  usersS.sort((a, b) => b.time - a.time);

  for (let i = 0; i < usersS.length; i++) {
    rankings += (i + 1) + ". " + usersS[i].name + ": " + "<br>" + "Time:" + usersS[i].time + "<br>" + "Score:" + usersS[i].score + "<br>";
  }

  rankings2.innerHTML = rankings;
}





loadUsers();

function addinUserPrompt() {


  newUser.name = prompt("Enter your name: ")
  usersS.push(newUser);



}

addinUserPrompt()










//////////////////////////////////////////










////// Instructions at the start screen 

const instructions = new NormalImageObject({ x: 40, y: 180 }, { x: 0, y: 0 }, "./img/instructionsFoto.png", 400,400)
let stickIsClicked = false




//////////////////////////////////////

function animateStartScreen() {

  if (gamestarted) return
  requestAnimationFrame(animateStartScreen)

  startScreen.updateSprite()



  if (!stickIsClicked) return

  instructions.update()




}
animateStartScreen()



//////////////////////////////////////////////////////






/////////////////////////////////////////////////77

const transform = new SpriteImageObject({ x: canvas.width/2-50, y: canvas.height-100 }, { x: 0, y: 0 }, "./img/earrthTransform.png", 100, 100, 62, 3)
let stopTransfom = true



//////////////////////////////////////////////77









// Start Button that starts the game and removes the start screen 

canvas.addEventListener("click", (event) => {




  let rect = canvas.getBoundingClientRect();


  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;






  if (x >= 0 && x <= 350 && y >= 0 && y <= 190) {



    stickIsClicked = true



  }


  if (x >= 40 && x <= 200 && y >= 180 && y <= 250) {
   


    stickIsClicked = false

  }
 









  if (x >= 400 && x <= 900 && y >= 300 && y <= 800) {


    if (startGame) {

      

      gamestarted = true
      startTransform = true
      stopTransfom = false


      document.getElementById("myScore").style.visibility = "visible"
      document.getElementById("myScore2").style.visibility = "visible"
      document.getElementById("myTimer").style.visibility = "visible"
      document.getElementById("myTimer2").style.visibility = "visible"


      tranformation()

      setTimeout(() => {
        animate();
      }, 2200)


      startGame = false
    }

   


  }




});




function tranformation() {

  if (!stopTransfom) {
    requestAnimationFrame(tranformation)

    c.fillStyle = " black "
    c.fillRect(0, 0, canvas.width, canvas.height)

    transform.updateSprite()
  }

}








