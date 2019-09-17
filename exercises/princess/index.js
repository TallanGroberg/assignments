let test = 'test'
// console.log(test)

let options = ['powered Up', 'big', 'small', 'dead']
function rand(arg) {
  return Math.floor(Math.random() * arg)
}
function setName() {
  let pickName = ['mario', 'luigi']

  return pickName[Math.floor(Math.random() * pickName.length)]
}

class Person {
  constructor(name, coin, status, hasStar) {
    this.name = name
    this.coin = coin
    this.status = status 
    this.hasStar = hasStar
  }
    gotHit() {

      if (rand(40) % 2 === 0) {
        this.status = options[1]
      } else if (rand(42) % 3 === 0){
        this.status = options[2]
      } else if (rand(42) % 4 === 0) {
        this.status = options[3]
      }
    }
    addCoin() {
      if(rand(20) % 2 === 0) {
        this.coin  = this.coin + 10 
      }
    }
  }







const guy = new Person(setName(), 100, 'powered Up', false )

console.log(guy.gotHit())
console.log(guy.addCoin())
console.log(guy)