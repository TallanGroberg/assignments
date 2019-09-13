

function Person(name, totalCoins, status, hasStar) {
  this.name = name 
  this.totalCoins = totalCoins 
  this.status = status
  this.hasStar = hasStar 
}
const statusOptions = ['small', 'powered up', 'big', 'dead']

function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function setName() {
  if (rand(10, 300) % 2 === 0 ) {
    return 'mario'
  } else {
    return 'luigi'
  }
}
console.log(rand(10, 20))

const mario = new Person(setName(), 0, statusOptions[Math.floor(Math.random() * statusOptions.length)], false)
const luigi = new Person(setName(), 0, statusOptions[Math.floor(Math.random() * statusOptions.length)], true)

console.log(mario, luigi)