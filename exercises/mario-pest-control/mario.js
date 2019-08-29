pests = ['Goombas', 'Bomb-ombs', 'Cheep-cheeps']
const form = document.getElementById('pest-input')

const showPestName = () => {
  
  const randomPest = pests[Math.floor(Math.random() * pests.length )]
  
  const daPest = document.getElementsByClassName('pest-name')[0].innerHTML = randomPest
  
  const imageShow = () => {
     
    if ( randomPest === 'Goombas') {
      document.getElementsByClassName('showImage')[0].innerHTML = '<img id="goomba"  src="images/goomba.png" alt="hi">'
      
      } else if ( randomPest === 'Bomb-ombs') {
        document.getElementsByClassName('showImage')[0].innerHTML = '<img id="bomb-omb"  src="images/bomb-omb.png" alt="hi">'
    } else {
      document.getElementsByClassName('showImage')[0].innerHTML = '<img id="cheep"  src="images/cheep.jpeg" alt="hi">'
    }
    
  }
  console.log(imageShow())
}
console.log(showPestName())

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault();

  let num = document.getElementById('number-input').value
  let submitGoon = document.getElementById('goomba-rad')
  let submitBomb = document.getElementById('bomb-rad')
  let submitCheep = document.getElementById('cheep-rad')

  let goonLog = num * 5
  let bombLog = num * 7
  let cheepLog = num * 11
  

  const whichThing = () => {
    if (submitGoon.checked === true) {
     return [goonLog, ' Coins', 'for', num, submitGoon.value, ].join(' ')
    } else if (submitBomb.checked) {
      return [bombLog, ' Coins', 'for', num, submitBomb.value ].join(' ')
    } else {
      return [cheepLog, ' Coins', 'for', num, submitCheep.value ].join(' ')
    }
  }

  result = document.getElementById('result').innerHTML = whichThing()

}


document.getElementById('goomba-rad').addEventListener('click', () => {
  document.getElementsByClassName('showImage')[0].innerHTML = '<img id="goomba"  src="images/goomba.png" alt="hi">'
})
document.getElementById('bomb-rad').addEventListener('click', () => {
  document.getElementsByClassName('showImage')[0].innerHTML = '<img id="bomb-omb"  src="images/bomb-omb.png" alt="hi">'
})
document.getElementById('cheep-rad').addEventListener('click', () => {
  document.getElementsByClassName('showImage')[0].innerHTML = '<img id="cheep"  src="images/cheep.jpeg" alt="hi">'
})





//make input for the pest and what type 





