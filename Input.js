addEventListener("keydown", ({ key }) => {
    
    switch (key) {
        case "a":
            keys.a.pressed = true
            break

        case "d":
            keys.d.pressed = true
            break
        case " ":

            if (updateSatan) {
                fires.push(new NormalImageObject(

                     {
                        x: spaceship.position.x + spaceship.width * 0.46,
                        y: spaceship.position.y - 40

                    },
                     {
                        x: 0,
                        y: -10

                    },
                     "./img/bomb.png",

                     15,45


                ))
            }

            keys.space.pressed = true
            break
        case "Enter":

            location.reload();

            keys.Enter.pressed = true
            break
    }
})

addEventListener("keyup", ({ key }) => {
  
    switch (key) {
        case "a":
            keys.a.pressed = false
            break

        case " ":
            if (!updateSatan) {
                fires.push(new NormalImageObject(

                    {
                       x: spaceship.position.x + spaceship.width * 0.46,
                       y: spaceship.position.y - 40

                   },
                    {
                       x: 0,
                       y: -10

                   },
                   
                   "./img/fire.png",

                    15,45


               ))
            }




            keys.space.pressed = false
            break
        case "d":
            keys.d.pressed = false
            break
        case "Enter":

            keys.Enter.pressed = false
            break

    }
})
