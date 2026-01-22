// const exerciseTimeMins = 70

// const message = exerciseTimeMins < 30 ? 'You need to try harder!' 
//     : exerciseTimeMins < 60 ? 'Doing Good!' 
//     : 'Excellent'

// console.log(message)


const playerGuess = 7
const correctAnswer = 6

const message = 
      (playerGuess < correctAnswer) ? 'low' 
    : (playerGuess > correctAnswer) ? 'high' 
    : 'correct'

console.log(message)