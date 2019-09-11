




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
    for (var i = 0; i < content.length; i++) {
      
      const container = document.createElement('div')
      const title = document.createElement('h1')
      const description = document.createElement('h4')
      const button = document.createElement('button')
      const del = document.createElement('button')
      const form = document.createElement('form')
      const input = document.createElement('input')
      title.textContent = content[i].title 
      description.textContent = content[i].description 
      button.textContent = 'edit'
      del.textContent = 'delete'

      
      
      document.body.appendChild(container)
      container.appendChild(title)
      container.appendChild(description)
  
      container.appendChild(button)
      container.appendChild(del)
      container.appendChild(form)


      form.appendChild(input)
      input.classList.add(`${content[i]._id}`)
      
      if (content[i].completed) {
        title.classList.add('complete')
      }

      console.log(container)
      
      
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



