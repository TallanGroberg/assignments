


form.addEventListener('submit', function(e)  {
    e.preventDefault()

    // console.log(e)
    var form = document.form;
    var name = form.firstName.value;
    var lastName = form.elements.lastName.value;
    var age = form.elements.age.value;
    var gender = form.elements.gender.value;
    var location = form.elements.location.value;
    let vegan = form.elements.vegan
    let gluten = form.elements.glutenFree
    let paleo = form.elements.paleo
    var diet = [];
        vegan.checked ? diet.push(vegan.value) : null
        gluten.checked ? diet.push(gluten.value) : null
        paleo.checked ? diet.push(paleo.value) : null
    console.log()
    
    
    
    alert("\nFirst Name: " + name + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})
    


