let types = [
  {name: 'rock',
  urlImg: 'rock.png'},
  {name: 'paper',
  urlImg: 'paper.png'},
  {name: 'scissors',
  urlImg: 'scissors.png'},
]

function player(type){

let randomIndex = Math.floor(Math.random() * types.length)
let compChoice = types[randomIndex]
let choosetype = types.find( t => t.name === type)
document.getElementById('image').innerHTML = `<img src= "${choosetype.urlImg}" width="400" height="400" alt="">,<img src= "${compChoice.urlImg}" width="400" height="400" alt="">`
if (choosetype === compChoice) {
document.getElementById('text').innerText = `IT'S A DRAW!!`
} else if (type == 'rock' && compChoice.name == 'scissors'){
  document.getElementById('text').innerText = `YOU WON!!`
} else if (type == 'paper' && compChoice.name == 'scissors'){
  document.getElementById('text').innerText = `YOU LOST!!`
} else if (type == 'scissors' && compChoice.name == 'rock'){
  document.getElementById('text').innerText = `YOU LOST!!`
} else if (type == 'paper' && compChoice.name == 'rock'){
  document.getElementById('text').innerText = `YOU WON!!`
} else if (type == 'rock' && compChoice.name == 'paper'){
  document.getElementById('text').innerText = `YOU LOST!!`
} else if (type == 'scissors' && compChoice.name == 'paper'){
  document.getElementById('text').innerText = `YOU WON!!`}
}

//function timedAlert(message){
//setTimeout( ()=> alert(message), 500)
//}
