
var read = require('readline-sync');

let choices = ['walk', ' '  ]
let health = 100;
let inventory = []
let gameOver = false
var name = read.question('May I have your name? ');
let killCount = 0;



function walk() {
  console.log(health, "your health")
  findEnemy()

}

function findEnemy() {
  num = Math.floor(Math.random() * 60)
  if (num % 4 === 0){
    fight() 
    console.log('fight')
  } else {
    console.log('walk on else')
    walk();
  }

}




function fight() {
  Enemy.prototype.mightyBlow = function() {
    this.hp -=  Math.floor(Math.random() * 100)
  }
  const ogre = new Enemy('orge', 50, Math.floor(Math.random() * 20))
  console.log(` Ogre strike it does ${ogre.damage}`)
  health -= ogre.damage
  ogre.mightyBlow()
  console.log(ogre.hp, 'ogre health')


  if (ogre.hp < 0) {
    killCount += 1;
    console.log("you killed the ogre with a mighty")
  }
}




console.log(walk(), findEnemy())


function lose() {
  if ( health === 0) {
    gameOver = true
  }
}

console.log(gameOver)

// make enemys 

function Enemy(name, hp, damage,) {
  this.name = name
  this.hp = hp
  this.damage = damage
}


console.log(`hi ${name} are you ready for an epic adventure? its gonna be rough`);



while (!gameOver && health > 0) {
  let choice = read.keyIn(choices, "choose your fate")
  if (choice === 'w') {
    walk()
    console.log( "kill count", killCount)
    
  } else {

  }
}


console.log(gameOver)

