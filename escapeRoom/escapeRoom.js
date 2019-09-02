var read = require('readline-sync');

const startGame = `Put hand in hole,
Find the key, or
Open the door`.split(',')

// i want to loop through the options until the first choice is 2, then i want to loop through the second choice until the input is 3,  

let name = read.question('what is your name?  ')
console.log(`hello ${name} lets play a game for your Life!!` )


while (true) {
 let firstChoice = read.keyInSelect(startGame, `choose your fate`)
 firstChoice = firstChoice + 1

 if (firstChoice === 1) {
   console.log(`you died`)
   break;
  
 } else if (firstChoice === 2) {
   console.log(`you found the key`)
    secondEvent()
   break;
 } else {
   console.log(`the door is locked`)
 }
}

function secondEvent() {

  while (true) {
    let secondChoice = read.keyInSelect(startGame, `choose your fate`)
    secondChoice = secondChoice + 1
    if (secondChoice === 1) {
      console.log(`you died and lost the key`)
      break;
    } else if (secondChoice === 2) {
      console.log(`yo!!! you already have the key!!`)
    } else {
      console.log(`well ${name}, you have won the game and entered the secret room of wonders`)
      break;
      
    }
  }
}




        // console.log( `first choice is ${firstChoice + 1}`)