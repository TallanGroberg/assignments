
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
  const diet = document.form.diet
  
  // this.console.log(diet.checked)
  
  function eats() {
   const dietRestrictions = []

    for (let i = 0; i > diet.length; i++) {
      console.log(diet)
      
      if (diet[i].checked === true) {
        diet[i.value].push(dietRestrictions)
      } else {
        return null
      }
    }


  // if (lac.checked === true) {
  //   return lac.value
  //   } else if (kosh.checked === true) {
  //   return kosh.value
  //   } else if (veg.checked === true) {
  //   return veg.value
  //   } else {
  //     return null
  //   }
  }
  
  
  
  



  // const result = alert( [name, lastName, num, gender, thatPlace, eats()  ].join(', ') )
  console.log(eats())
})


  // const result = document.getElementsByClassName('result')[0].innerHTML = name
  // console.log(name, result, e)


//make text input display to the screen

