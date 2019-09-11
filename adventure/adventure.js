
'use strict'

var read = require('readline-sync');
let gold = 0;
let runOrFight = ['run', 'fight']
let choices = ['walk', 'quit', 'check inventory', 'print stats'  ]
let health = 100;
let inventory = []
let gameOver = health >= 0 ? false : true
var name = read.question('hello wayfaring stranger, May I have your name? ')
let killCount = 0;




function walk() {
  console.log(health, "your health")
  findEnemy()
}
function findEnemy() {
  let num = Math.floor(Math.random() * 60)
  if (num % 4 === 0){
    fight() 
    console.log('fight')
  } else {
    console.log('walk on else')
    walk();
  }
}

function fight() {
  let scared = read.keyIn(runOrFight, 'run or fight enemy')
  if (scared === 'r' && Math.floor(Math.random() * 4) % 2 === 0) {
    console.log("you got away!!!!")
    walk()
  } else {
    console.log('you have to fight')
    Enemy.prototype.mightyBlow = function() {
      const damage = this.hp -=  Math.floor(Math.random() * 100)
      if (inventory.includes('sword')) {
        console.log(`since you have a sword you now do ${damage + 25}`)
        damage + 25
      }
    }
  }

  const ogre = new Enemy('orge', 50, Math.floor(Math.random() * 20))
  const taradactile = new Enemy('taradactile1', 50, Math.floor(Math.random() * 50))
  const phantom = new Enemy('phantom', 50, Math.floor(Math.random() * 100))

  function getEnemy(){
    let enemies = [ogre, taradactile, phantom]
    return enemies[Math.floor(Math.random() * enemies.length )]
  }
  console.log(getEnemy())
  console.log(` Ogre strike it does ${ogre.damage}`)
  health -= ogre.damage
  ogre.mightyBlow()
  console.log(ogre.hp, 'ogre health')

// get sword 

  if (ogre.hp < 0) {
    
    killCount += 1;
    console.log( inventory)
    inventory.push(randomItem())
    console.log("you killed the ogre with a mighty")
  }
}

function randomItem() {
  
  let loot = ['sword', 'mace', 'armor', 'potion', 'ogre tooth', 'wizard staff', 'dragon scale', 'cheese', 'ogre teeth'] 
  const item = loot[Math.floor(Math.random() * loot.length)]
    effect()
      return item
}
      function effect() {
        if (health >= 300) {
          console.log('you have max health')
        }
        if (inventory.includes('potion') && health <= 300) {
        health += 100

      console.log(`you got a potion from that bad guy + 100 health your health is now: ${health}`)
      }
      if (inventory.includes('armor') && health <= 300) {
        health += 150
        console.log(`you got armor max health is now ${health}  `)
      }
      if(inventory.includes('ogre teeth') ) {
        console.log('you have enough teeth to get that ogre tooth grill you always wanted')
        gameOver === true
      }

    }

    function dropItem() {

      let drop = read.keyInSelect(inventory, 'you are over encumbered select an item to drop')
      inventory.splice(drop)
    }
  
console.log(walk(), findEnemy())

// make enemys 

function Enemy(name, hp, damage,) {
  this.name = name
  this.hp = hp
  this.damage = damage
}

console.log(`hi ${name} are you ready for an epic adventure? its gonna be rough, i mean.... you already got attacked`);

while (!gameOver && health > 0) {
  
  let choice = read.question(choices, "choose your fate")
  if (choice === 'print') {
    console.log(` killcount: ${killCount} \n
  inventory: ${inventory}\n
  health: ${health}\n`)
  }
  if (choice === 'w') {
    walk()
    console.log( "kill count", killCount)
  } 
  if (choice === 'q') {
    gameOver = true
  }
  if (choice === 'i' || inventory.length > 5) {
   dropItem()
  }
  if (gameOver === true) {
    console.log(`your done with your walk ${name} i hope you got the ogre tooth grill you always wanted\n 
    killcount: ${killCount} \n
    inventory: ${inventory}\n
    health: ${health}\n
    |\ ø   ;\n
    |  \ ø   ;\n
    |   |\n
    | æ |\n
    | æ |\n
    | æ |\n
    | • |\n
    | æ |\n
    | æ |\n
    | æ |\n
    (•∏∏•)\n
    (•∏∏•)\n
      ∏∏\n
      ∏∏\n
      ∏∏\n
    ⟨æ⟩-⟨æ⟩\n` )
  }
}

console.log(gameOver, getEnemy())





// // return all the numbers between num and 0
// function addUp(num) {
//   arr = []
// 	while (0 < num ) { 
//     arr.push(num--)
//   }
//   return arr.reduce( (t,f) => f += t)

// }
// console.log(addUp(10))