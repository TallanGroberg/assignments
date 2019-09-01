const readline = require("readline-sync")
var operators = ['add', 'subtract', 'divide', 'multiply']

var num1 = readline.questionFloat('welcome to the calculator, enter a number ');
console.log(` the first number is ${num1}`);

var operator = readline.keyInSelect(operators, 'enter the operator')
console.log(`${operator + 1} `)

var num2 = readline.questionFloat('pick a second number')

console.log(`the second number is ${num2}`)

finalOp = operator + 1
const makeHappen = () => {
  if (finalOp == 1) {
  return num1 + num2
  } else if (finalOp === 2) {
    return num1 - num2
  } else if (finalOp === 3) {
    return num1 / num2
  } else if (finalOp === 4) {
    return num1 * num2
  } else {
    return `you chose ${num1}, ${operator}, ${num2} and it didnt work`
  }
}

console.log(` the answer is ${makeHappen()}`)
