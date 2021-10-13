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
  timedAlert("DRAW!")
} else if (type == 'rock' && compChoice.name == 'scissors'){
  timedAlert("YOU WON!")
} else if (type == 'paper' && compChoice.name == 'scissors'){
timedAlert("YOU LOST!")
} else if (type == 'scissors' && compChoice.name == 'rock'){
timedAlert("YOU LOST!")
} else if (type == 'paper' && compChoice.name == 'rock'){
  timedAlert("YOU WON!")
} else if (type == 'rock' && compChoice.name == 'paper'){
  timedAlert("YOU LOST!")
} else if (type == 'scissors' && compChoice.name == 'paper'){
  timedAlert("YOU WON!")}
}

function timedAlert(message){
  setTimeout( ()=> alert(message), 500)
}
