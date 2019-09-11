




axios.get('https://api.vschool.io/tallan/todo/')

.then( res => {
    const content = res.data.reverse()
    listTodos(content)
    console.log(content)
  })
  .catch( err => {
    console.log(err)
    
  })

  function listTodos(content) {
    
    const make = e => (document.createElement(e))
    
    let counter = 1;
    for (var i = 0; i < content.length; i++) {

      const container = make('div')
      const title = make('h1')
      const description = make('h4')
      const edit = make('button')
      const del = make('button')
      const form = make('form')
      const input = make('input')
      const putDescrip = make('input')
      const checkmark = make('input')
      const checktext = make('p')
      const aTag = make('a')
      
      
      //img
      const img = make('img')
      img.src = content[i].imgUrl
      aTag.href = img.src
      
      console.log(aTag)
      console.log(img)
      checktext.innerHTML = 'mark complete </br />'
      input.type = 'text'
      input.name = 'edit'
      input.placeholder = 'edit title'
      putDescrip.type = 'text'
      putDescrip.name = 'descript'
      putDescrip.placeholder = 'edit description'
      checkmark.type = 'checkbox'
      checkmark.name = 'complete'

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

      //img
      container.appendChild(aTag)
      aTag.appendChild(img)

      form.appendChild(input)
      form.appendChild(putDescrip)
      form.appendChild(checktext)
      form.appendChild(checkmark)
      form.appendChild(edit)
      input.classList.add(theId)
      putDescrip.classList.add(theId)
      checkmark.classList.add(theId)

      //img
      img.classList.add('img')
      container.appendChild(del)
      del.classList.add(theId)
      
      
      if (content[i].completed === true) {
        title.classList.add('completed')
      }
      
      let titleId = container.children[2][0]
      let descripId = container.children[2][1]
      let checkId = container.children[2][2]
      
      // console.dir(checkId)
      console.log(container)
      
      form.addEventListener('submit', function(e) {
        e.preventDefault()
          
          axios.put(`https://api.vschool.io/tallan/todo/${titleId.className}`,  {title: titleId.value, description: descripId.value}) 
          
          if(checkId.checked === true) {
            axios.put(`https://api.vschool.io/tallan/todo/${titleId.className}`,  { completed: true}) 
          } 
          
          if(checkId.checked === false) {
            axios.put(`https://api.vschool.io/tallan/todo/${titleId.className}`,  { completed: false}) 
          } 
          
        });

      del.addEventListener('click', function() {
        axios.delete(`https://api.vschool.io/tallan/todo/${theId}`)
      })

    }
  }

form.addEventListener('submit', function(e)  {
  e.preventDefault()
  let d = document.form.description.value 
  console.log(d)
  let t = document.form.title.value
  axios.post('https://api.vschool.io/tallan/todo/', {title: t, description: d})
  .catch(err => console.log(err))
})



