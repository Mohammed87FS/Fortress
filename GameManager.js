// VARIABLES OF THE GAME !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


let game = {

    over: false,
    youWon: false,

}

let exploded = false
let taken = false


let repetitions = 0
let repetitionsForBomb = 0
let updateSatan = false
let bioOpend = false
let CoOpend = false








// Animating THE GAME !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function animate() {



    stopTransfom = true

    if (game.over) {
        badEnding()

        
        document.getElementById("rankings").style.visibility = "visible"
        document.getElementById("rankings2").style.visibility = "visible"

    }
    else if (game.youWon) {
        goodEnding()
        document.getElementById("rankings").style.visibility = "visible"
        document.getElementById("rankings2").style.visibility = "visible"


    }
    else {
        requestAnimationFrame(animate)


        if (!updateSatan) {
            GameBackground.update()

        }
        else if (bioOpend) {
            c.fillStyle = " rgb(255, 255, 255)"
            c.fillRect(0, 0, canvas.width, canvas.height)
        }

        else {

            GameBackground2.update()

            if (CoOpend) {

                FogGenerator({ color: "red" })



            }
        }






        // Bombs Generator!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


        bombs.forEach((bomb, index) => {


            bomb.update()


            fires.forEach((fire, j) => {




                // bio colision!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                if (
                    fire.position.y - fire.height <=
                    bomb.position.y + bomb.height &&
                    fire.position.x + fire.width >=
                    bomb.position.x &&
                    fire.position.x - fire.width <=
                    bomb.position.x + bomb.width &&
                    fire.position.y + fire.height >=
                    bomb.position.y
                ) {

                    bombs.splice(index, 1)
                    fires.splice(j, 1)
                    ExplosionsGenerator({ object: bomb, color: "black" })

                    bioOpend = true

                    setTimeout(() => {
                        bioOpend = false
                    }, 5000)



                }

            })

        })



        bombs2.forEach((bomb, index) => {


            bomb.update()


            fires.forEach((fire, j) => {




                // co2 colision!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                if (
                    fire.position.y - fire.height <=
                    bomb.position.y + bomb.height &&
                    fire.position.x + fire.width >=
                    bomb.position.x &&
                    fire.position.x - fire.width <=
                    bomb.position.x + bomb.width &&
                    fire.position.y + fire.height >=
                    bomb.position.y
                ) {

                    ExplosionsGenerator({ object: bomb, color: "white" })
                    bombs2.splice(index, 1)
                    fires.splice(j, 1)

                    CoOpend = true

                    setTimeout(() => {
                        CoOpend = false
                    }, 5000)



                }

            })

        })


        // Trees!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        trees.forEach((tree, index) => {

            tree.update()


            fires.forEach((fire, j) => {


                // tree colision!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                if (
                    fire.position.y - fire.height <=
                    tree.position.y + tree.height &&
                    fire.position.x + fire.width >=
                    tree.position.x &&
                    fire.position.x - fire.width <=
                    tree.position.x + tree.width &&
                    fire.position.y + fire.height >=
                    tree.position.y
                ) {


                    if (myHealth.width + myHealth.scale <= myHealth.maxWidth) {
                        myHealth.width += myHealth.scale;

                    }
                    else {
                        myHealth.width = myHealth.width + (myHealth.maxWidth - myHealth.width);

                    }
                    fires.splice(j, 1)
                    trees.splice(index, 1)



                }


            })
        })




        // STARS GENERATOR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        stars.forEach((star, index) => {

            if (star.position.y >= canvas.height) {
                stars.splice(index, 1)

            }

            else { star.update() }


        })
        if (!updateSatan) { StarsGenerator(8) }
        else { StarsGenerator(17) }

        // invaderGenerator!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      


        //PLAYER FIGURE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


        myHealth.draw()
        earthIcon.draw({
            position: {
                x: myHealth.position.x - earthIcon.width,
                y: myHealth.position.y - earthIcon.height / 3
            }
        })
        spaceship.updateSpritePlayer()
        explosions.forEach((explosion, index) => {
            if (explosion.opacity <= 0) {
                explosions.splice(index, 1)

            }
            else { explosion.update() }
        })


        //FIRE AND BULLETS AND COLLISIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        fires.forEach((fire, index) => {
            if (fire.position.y <= 0) {
                fires.splice(index, 1)
            }
            else { fire.update() }

        })

        bullets.forEach((bullet, index) => {
            if (bullet.position.y >= canvas.height) {
                bullets.splice(index, 1)
            }
            else { bullet.updateFire("black") }





            if (
                bullet.position.y + bullet.height >= spaceship.position.y &&
                bullet.position.y <= spaceship.position.y + spaceship.height &&
                bullet.position.x + bullet.width >= spaceship.position.x &&
                bullet.position.x <= spaceship.position.x + spaceship.width
            ) {
                myHealth.width -= myHealth.scale * myHealth.slowDownEffect
                blood.updateSprite()

                if (myHealth.width <= 0) {
                    ExplosionsGenerator({ object: spaceship, color: "green" })
                    bullets.splice(index, 1)
                    spaceship.opacity = 0

                    setTimeout(() => {
                        game.over = true

                    }, 400)


                }

            }

        })


        satanfires.forEach((satanfire, index) => {


            if (satanfire.position.y >= canvas.height) {
                satanfires.splice(index, 1)
            }
            else { satanfire.updateFire("red") }

            if (
                satanfire.position.y + satanfire.height >= spaceship.position.y &&
                satanfire.position.y <= spaceship.position.y + spaceship.height &&
                satanfire.position.x + satanfire.width >= spaceship.position.x &&
                satanfire.position.x <= spaceship.position.x + spaceship.width
            ) {
                myHealth.width -= myHealth.scale * myHealth.slowDownEffect
                blood.updateSprite()

                if (myHealth.width <= 0) {
                    ExplosionsGenerator({ object: spaceship, color: "green" })
                    satanfires.splice(index, 1)
                    spaceship.opacity = 0

                    setTimeout(() => {
                        game.over = true
                    }, 400)


                }

            }

        })





        //GRIDS AND INVADERS ANIMATION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


        grids.forEach((grid) => {
            grid.update()






            if (repetitions % 65 === 0 && grid.invaders.length > 0) {
                grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(bullets)
            }

            grid.invaders.forEach((invader, i) => {
                invader.updateInvader({ velocity: grid.velocity })
                if (invader.position.y + invader.height >= canvas.height) {

                    setTimeout(() => {
                        game.over = true
                    }, 400)


                }

                if (updateSatan && invader.position.x + invader.width >= canvas.width || updateSatan && invader.position.x <= 0) {

                    grid.invaders = []

                }
                fires.forEach((fire, j) => {

                    if (
                        fire.position.y - fire.height <=
                        invader.position.y + invader.height &&
                        fire.position.x + fire.width >=
                        invader.position.x &&
                        fire.position.x - fire.width <=
                        invader.position.x + invader.width &&
                        fire.position.y + fire.height >=
                        invader.position.y
                    ) {


                        /// i had the issue of shooting a specific invader inside 
                        //the grid but random invaders where removed so i had to find a way to make sure that only one invader is being 
                        // found and removed.


                        setTimeout(() => {
                            const InvaderFound = grid.invaders.find(function (InvaderFound) { return InvaderFound === invader });
                            const FireFound = fires.find(function (FireFound) { return FireFound === fire });

                            if (InvaderFound && FireFound) {

                                ExplosionsGenerator({
                                    object: invader,
                                    color: "rgb(251, 76, 27)"
                                })


                                if (usersS[usersS.length - 1].score >= 200) {
                                    updateSatan = true;
                                }
                                usersS[usersS.length - 1].score += 5;

                                Score.innerHTML = usersS[usersS.length - 1].score




                                grid.invaders.splice(i, 1)
                                fires.splice(j, 1)



                            }

                            /// Here i had to make sure that the 
                            if (grid.invaders.length > 0) {
                                const firstInvader = grid.invaders[0]
                                const lastInvader = grid.invaders[grid.invaders.length - 1]

                                grid.width = lastInvader.position.x + lastInvader.width -
                                    firstInvader.position.x
                                grid.position.x = firstInvader.position.x







                            }

                        }, 10)


                    }
                })
            })
        })


        // Final Boss Satan!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        if (updateSatan) {
            satan.update();
            if (repetitions % 30 === 0) {
                satan.shoot(satanfires)
            }
            satanHealth.draw({
                position: {

                    x: satan.position.x+30 ,
                    y: satan.position.y - 20
                }
            })


            fires.forEach((fire, j) => {

                if (
                    fire.position.y - fire.height <=
                    satan.position.y + satan.height - 150 &&
                    fire.position.x + fire.width >=
                    satan.position.x &&
                    fire.position.x - fire.width <=
                    satan.position.x + satan.width &&
                    fire.position.y + fire.height >=
                    satan.position.y
                ) {

                    fires.splice(j, 1)
                    satanHealth.width -= satanHealth.scale * satanHealth.slowDownEffect

                    usersS[usersS.length - 1].score += 20;

                    Score.innerHTML = usersS[usersS.length - 1].score





                    if (satanHealth.width <= 0) {
                        ExplosionsGenerator({ object: satan, color: "red" })

                        satan.opacity = 0

                        setTimeout(() => {
                            game.youWon = true
                        }, 50)


                    }

                }



            })
        }




        //PLAYER FIGURE MOVEMENTS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        if (keys.a.pressed && spaceship.position.x >= 0) {
            spaceship.velocity.x = -9
            spaceship.rotation = -0.16
        }
        else if (keys.d.pressed && spaceship.position.x + spaceship.width <= canvas.width) {
            spaceship.velocity.x = 9
            spaceship.rotation = 0.16
        }
        else {
            spaceship.velocity.x = 0
            spaceship.rotation = 0



        }

        // GRIDS GENERATOR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if (!updateSatan) {
            if (repetitions % 200 === 0) {
                grids.push(new Grid())


            }
        }

        else {

            if (repetitionsForBomb % 100 === 0) {
                bombs2.push(new NormalImageObject(

                    {
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height / 2
                    }
                    ,
                    {
                        x: 0,
                        y: 1
                    },

                    "./img/co2.png",

                    75,75
                ))

            }

            else if (repetitionsForBomb % 150 === 0) {
                bombs.push(new NormalImageObject({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height / 2
                }
                    ,
                    {
                        x: 0,
                        y: 1
                    },

                    "./img/bioh.png",

                    75,75


                ))
            }
            else if (repetitionsForBomb % 550 === 0) {
                trees.push(new NormalImageObject({
                    x: Math.random() * canvas.width - 50,
                    y: Math.random() * 0
                }
                    ,
                    {
                        x: 0,
                        y: 3
                    },

                    "./img/treeee.png",

                    75,75


                ))
            }
        }
        if (repetitions % 60 === 0) {




            usersS[usersS.length - 1].time++;
            Timer.innerHTML = usersS[usersS.length - 1].time



        }

    }

    repetitions++
    repetitionsForBomb++


    console.log(usersS)


}







