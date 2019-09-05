// unit testing is breaking program into smaller tests and testing them

function sum(a, b) {
  return a + b
}

if(sum(2,3) === 6 ){
  console.log('test passed')
} else {
  console.log('test failed')
}

module.exports = sum