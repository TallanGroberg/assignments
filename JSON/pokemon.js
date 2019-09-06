const xhr = new XMLHttpRequest()
//chrome displays long arrays differently to look like nested arrays
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText 
    const data = JSON.parse(JSONdata) 
    const pokemon = data.objects[0].pokemon
    listToDOM(pokemon)
  }
}
function listToDOM(arr) {
  console.log(arr)
  let counter = 1; 
  let pika =  arr.map( p => ` <h3>${counter++}: ${[p.name].reduce( (t, f) => t.concat(f))}</h3>`)
  document.getElementById('content').innerHTML = pika.join(' ')
}
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()
