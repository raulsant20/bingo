const startButton = document.getElementById("start")

const createNumber = (element) => {
  const divNumbers = document.getElementById("results")
  const newDiv = document.createElement("div")
  let className = `number ${element}`
  newDiv.setAttribute("class", className)
  newDiv.innerHTML = element
  divNumbers.appendChild(newDiv)
}

function start () {
  const max = document.getElementById("max").value
  console.log(max)
  if(max > 0){
    let allNumbers = Array.from({length: max}, (_, i)=>++i);
    allNumbers.map( element => createNumber(element))
    const button = document.getElementById("again")
    button.style.display = ""
    console.log(button)
    
  }
  else {
    alert("No ha ingresado un numero positivo")
  }
}

startButton.addEventListener("click", start)