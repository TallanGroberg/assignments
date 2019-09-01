
const place = ['kentucky', 'virginia', 'vermont']
const diet = ['vegitarian', 'kosher', 'lactose free']






function spots() {
  addTo = document.getElementById('daPlaces')
  place.map( p => {
    const option = document.createElement('option')
    option.value = p
    option.textContent = p 
    addTo.appendChild(option)
    
    
  })
}
console.log(spots())

addEventListener('submit', function(e) {
  e.preventDefault()
  const form = document.form
  const name = document.form.name.value;
  const lastName = document.form.lastname.value;
  const num = document.form.age.value;
  const gender = document.form.gender.value
  const thatPlace = document.form.place.value
  const lac = document.form.lactose
  const kosh = document.form.kosher 
  const veg = document.form.veg
  
  const diet = [lac, kosh, veg ]
  function eats() {
   

    for (let i = 0; i > diet.length; i++) {
      

      return i
      // if ([i].checked === true) {
      //   return [i].value 
      // } else {
      //   return null
      // }
    }
 

  if (lac.checked === true) {
    return lac.value
    } else if (kosh.checked === true) {
    return kosh.value
    } else if (veg.checked === true) {
    return veg.value
    } else {
      return null
    }
  }
  
  
  
  



  const result = alert( [name, lastName, num, gender, thatPlace, eats()  ].join(', ') )
  console.log(result,)
})


  // const result = document.getElementsByClassName('result')[0].innerHTML = name
  // console.log(name, result, e)


//make text input display to the screen

