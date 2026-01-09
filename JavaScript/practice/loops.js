// for loop

// for (let i = 0; i < 11; i++){
//     console.log(i)
// }

// for (let i = 10 ; i <= 100 ; i += 10){
//     console.log(i)
// }

let player1 = 102
let player2 = 107

function getFasterPlayer(){
    if (player1 < player2){
        return player1
    } else if (player1 > player2){
        return player2
    } else 
        return player1
}

let fastestRacer = getFasterPlayer()
console.log(fastestRacer)