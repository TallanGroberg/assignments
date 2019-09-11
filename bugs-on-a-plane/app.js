
form.addEventListener('submit', function(e)  {
    e.preventDefault()
    var form = document.form;
    var name = form.firstName.value;
    var lastName = form.elements.lastName.value;
    var age = form.elements.age.value;
    var gender = form.elements.gender.value;
    var location = form.elements.location.value;
    var diet = [];
    let vegan = form.elements.vegan
    let gluten = form.elements.glutenFree
    let paleo = form.elements.paleo
        vegan.checked ? diet.push(vegan.value) : null
        gluten.checked ? diet.push(gluten.value) : null
        paleo.checked ? diet.push(paleo.value) : null
    alert(` \nFirst Name: ${name} \nLast Name:  ${lastName} \nAge: ${age} \nGender:  ${gender} \nTravel Location: ${location} \nDiet:
     ${diet} \nAwesome, now if you die, it won't be an accident..`);
})


// // /^\d*[02468]$/ regrex for only even numbers

// /^\*[0-9]$/;

// function animals(chickens, cows, pigs) {
// 	let chickenLeg = chickens * 2
// 	let cowsLeg = cows * 4
// 	let pigLeg = pigs * 4
//     let result = [chickenLeg, cowsLeg, pigLeg]
//     return result.reduce( (total, first) => first += total)
// }
    
// console.log(animals(2, 3, 10))

// function addUp(num) {
//     let arr = []
//     for (let i = 0; i < num.length; i++) {
        
//     }
    
    
    
	
	
// }

// console.log(addUp(9))


