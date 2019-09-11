




axios.get('https://api.vschool.io/tallan/todo/')

.then( res => {
    const content = res.data
    listTodos(content)
    console.log(content)
  })
  .catch( err => {
    console.log(err)
    
  })
  function listTodos(content) {
    let counter = 1;
    for (var i = 0; i < content.length; i++) {
      
      const container = document.createElement('div')
      const title = document.createElement('h1')
      const description = document.createElement('h4')
      const edit = document.createElement('button')
      const del = document.createElement('button')
      const form = document.createElement('form')
      const input = document.createElement('input')
      const putDescrip = document.createElement('input')
      const checkmark = document.createElement('input')
      const checktext = document.createElement('p')
      checktext.innerHTML = 'mark complete </br />'
      input.type = 'text'
      input.name = 'edit'
      input.placeholder = 'edit title'
      putDescrip.type = 'text'
      putDescrip.name = 'descript'
      putDescrip.placeholder = 'edit description'
      checkmark.type = 'checkbox'
      checkmark.name = 'complete'
      
    // console.log(checkmark) 
      title.textContent = ` ${counter++}: ${content[i].title} `
      description.textContent = content[i].description 
      
      edit.textContent = 'edit'
      del.textContent = 'delete'
      const theId = content[i]._id

      
      
      document.body.appendChild(container)
      container.appendChild(title)
      container.appendChild(description)
      
      container.appendChild(edit)
      container.appendChild(form)
      
      
      
      form.appendChild(input)
      form.appendChild(putDescrip)
      form.appendChild(checktext)
      form.appendChild(checkmark)
      form.appendChild(edit)
      input.classList.add(theId)
      putDescrip.classList.add(theId)
      checkmark.classList.add(theId)
      container.appendChild(del)
      del.classList.add(theId)
      
      
      if (content[i].completed) {
        title.classList.add('completed')
      }
      
      let titleId = container.children[2][0]
      let descripId = container.children[2][1]
      let checkId = container.children[2][2]
      
      // console.dir(checkId)
      console.log(container.children[2][2].checked)
      
      form.addEventListener('submit', function(e) {
        e.preventDefault()
        axios.put(`https://api.vschool.io/tallan/todo/${titleId.className}`,  {title: titleId.value, description: descripId.value}) 

        
        
        if(checkId.checked === true) {
          axios.put(`https://api.vschool.io/tallan/todo/${titleId.className}`,  { completed: true}) 
          } 
        
      })
      
      del.addEventListener('click', function() {
        axios.delete(`https://api.vschool.io/tallan/todo/${theId}`)
      })

      
      
    }
  }

  


      function updateObj() {
        // let editing = content.map( b => b)
        // axios.put("https://api.vschool.io/tallan/todo/")
        console.log('test')
      }




form.addEventListener('submit', function(e)  {
  e.preventDefault()
  let d = document.form.description.value 
  console.log(d)
  let t = document.form.title.value
  axios.post('https://api.vschool.io/tallan/todo/', {title: t, description: d})
  .catch(err => console.log(err))
})



