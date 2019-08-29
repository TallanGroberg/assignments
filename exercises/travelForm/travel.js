addEventListener('submit', function(e) {
  e.preventDefault()
  const name = document.getElementById('name').value;
  const lastName = document.getElementById('lastName').value;
  const num = document.getElementById('age').value;
  const gender = this.document.getElementById('gender').value
  const result = document.getElementsByClassName('result').innerHTML = [name, lastName, num, gender]
  console.log(result)
})


  // const result = document.getElementsByClassName('result')[0].innerHTML = name
  // console.log(name, result, e)


//make text input display to the screen

