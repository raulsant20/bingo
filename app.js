const startButton = document.getElementById("start")
const tossButton = document.getElementById("again")
console.log(tossButton)

const createNumber = (element) => {
  const divNumbers = document.getElementById("results")
  const newDiv = document.createElement("div")
  let className = `number ${element}`
  newDiv.setAttribute("class", className)
  newDiv.innerHTML = element
  divNumbers.appendChild(newDiv)
}

const deleting = () => {
  const divResults = document.getElementById("results")
  const div = document.getElementsByClassName("number")

  if(div.length){
    while(div.length){
      divResults.removeChild(div[0])
    }
  }
}

function start () {
  const max = document.getElementById("max").value
  deleting()
  if(max > 0){
    let allNumbers = Array.from({length: max}, (_, i)=>++i);
    allNumbers.map( element => createNumber(element))
    const button = document.getElementById("again")
    button.style.display = ""
    // console.log(button)
    
  }
  else {
    alert("No ha ingresado un numero positivo")
  }
}

// const toss = () => {
//   const divContainer = document.getElementById("toss")
//   let numbersTossed = []
//   let number = Math.floor(Math.random()*)
// }

startButton.addEventListener("click", start)
// tossButton.addEventListener("click", toss)