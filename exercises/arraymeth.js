var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


function stuff() {
  return fruit.pop()
  }
  
  console.log(stuff())
  
  function rem2() {
  return  fruit.shift()
}
console.log(rem2())

const or = () => {
  return fruit.indexOf('orange')
}
console.log(or())

const add = () => {
  return fruit.push(2)
}

console.log(add())

const ve = () => {
  return vegetables.length
}
console.log(ve())

const veg = () => {
  return vegetables.push(4)
}
console.log(veg())

const togeth = () => {
  food = fruit.concat(vegetables)
  return food.splice(4, 5)
  
}
console.log("food: ", togeth())

const rev = () => {
  foo = fruit.reverse()
  bar = foo.join()
}


console.log(rev())




// console.log("fruit: ", fruit);
//  console.log("vegetables: ", vegetables);