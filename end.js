
const goodending = new SpriteImageObject({ x: 0, y: 0 }, { x: 0, y: 0 }, "./img/won.png", canvas.width, canvas.height, 5, 4)
const badending = new SpriteImageObject({ x: 0, y: 0 }, { x: 0, y: 0 }, "./img/lost.png", canvas.width, canvas.height, 5, 9)


function goodEnding() {

    requestAnimationFrame(goodEnding)

    goodending.updateSprite()
    
    saveUsers();
    displayResults();




}



function badEnding() {

    requestAnimationFrame(badEnding)

    badending.updateSprite()

    saveUsers();
    displayResults();

    console.log(usersS)


}

