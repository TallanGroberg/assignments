




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
      const img = make('img')
      const imgInput = make('input')
      
      console.log(imgInput)
      
      
      //img
      
      
      img.src = content[i].imgUrl
      aTag.href = img.src
      console.log(img.src)
      
      
      // console.log(aTag)
      // console.log(img)
      imgInput.type = 'text'
      imgInput.name = 'image'
      imgInput.placeholder = 'image URL goes here'
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
      aTag.appendChild(img)
      container.appendChild(aTag)
      
      container.appendChild(edit)
      container.appendChild(form)

      form.appendChild(imgInput)
      form.appendChild(input)
      form.appendChild(putDescrip)
      form.appendChild(checktext)
      form.appendChild(checkmark)
      form.appendChild(edit)
      input.classList.add(theId)
      putDescrip.classList.add(theId)
      checkmark.classList.add(theId)
      imgInput.classList.add(theId)

      img.classList.add('img')
      container.appendChild(del)
      del.classList.add(theId)
      
      
      if (content[i].completed === true) {
        title.classList.add('completed')
      }
      
      let imgId = container.children[3][0]
      let titleId = container.children[3][1]
      let descripId = container.children[3][2]
      let checkId = container.children[3][3]
      // console.dir(checkId)
      console.log('imgId:  ',imgId )

      // https://res.cloudinary.com/teepublic/image/private/s--L1mZKevQ--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1550613309/production/designs/4241058_0.jpg
      
      form.addEventListener('submit', function(e) {
        e.preventDefault()
          
          axios.put(`https://api.vschool.io/tallan/todo/${titleId.className}`,  {title: titleId.value, description: descripId.value, imgUrl: imgId.value }) 
          
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
  let i = document.form.image.value

  axios.post('https://api.vschool.io/tallan/todo/', {title: t, description: d, imgUrl: i})
  .catch(err => console.log(err))
})



// console.log(defaultImage())


