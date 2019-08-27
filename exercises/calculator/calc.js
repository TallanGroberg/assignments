operators = ['add', 'subtract', 'divide', 'multiply', 'modulate', 'square', 'cube' ]

function opChoice() {
  const addTo = document.getElementById('operator')
 operators.map(o => {
  
  const option = document.createElement('option')
  option.value = o
  option.textContent = o 
  addTo.appendChild(option)
  console.log(option)
})
 return addTo
}
console.log(opChoice())


document.getElementById('submit').addEventListener('click', function(e) {
  const first = document.getElementsByClassName('first')[0].value;

  const theOption = document.getElementById('operator').value
  
  const second = document.getElementsByClassName('second')[0].value
  
  
  const answer = () => {
    const both = [first, theOption, second]
    console.log(both)
    if (theOption === 'add') {
       return parseInt(first) + parseInt(second) 
    } else if (theOption === 'subtract') {
      return parseInt(first) - parseInt(second)
    } else if (theOption === 'multiply') {
      return parseInt(first) * parseInt(second)
    } else if (theOption === 'divide') {
      return parseInt(first) / parseInt(second)
    } else if (theOption === 'modulate') {
      return parseInt(first) % parseInt(second)
    } else if (theOption === 'modulate') {
      return parseInt(first) % parseInt(second)
    } else if (theOption === 'square') {
      return parseInt(first) * parseInt(first) 
    }
    else if (theOption === 'cube') {
      return parseInt(first) ** parseInt(first) 
    }
  }


  
  const output = document.getElementsByClassName('result')[0]
  output.innerHTML = answer()
})

function showResult() {
  const display = document.getElementsByClassName('result')[0]
  
}
