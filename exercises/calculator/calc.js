operators = ['add', 'subtract', 'divide', 'multiply']
const addTo = document.getElementById('operator')

function opChoice() {
 operators.map(o => {
  
  const option = document.createElement('option')
  option.value = o
  option.textContent = o 
  addTo.appendChild(option)
})
 return addTo
}

document.getElementById('submit').addEventListener('click', function(e) {
  const first = document.getElementsByClassName('first')[0].value ;
  
  const second = document.getElementsByClassName('second')[0].value
  
  const both = [first, second]
  
  const output = document.getElementsByClassName('result')[0]
  output.textContent = both
  
})

function showResult() {
  const display = document.getElementsByClassName('result')[0]
  //TODO make the input values show here
}




// show the input numbers in the result
  


// if ( both ==  /^\d+$/) {
  //   return both 
  // }