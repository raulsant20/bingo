const startButton = document.getElementById("start")
const tossButton = document.getElementById("again")
let numbersTossed = []
console.log(tossButton)

const createNumber = (element) => {
  const divNumbers = document.getElementById("results")
  const newDiv = document.createElement("div")
  let className = `number ${element} isSelected`
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
    numbersTossed = []
    // console.log(button)
    
  }
  else {
    alert("No ha ingresado un numero positivo")
  }
}

const toss = () => {
  const max = document.getElementById("max").value
  const numbers = document.getElementsByClassName("number")
  const numbersAnimation = document.getElementsByClassName("isSelected")
  console.log(numbersAnimation)
  for (const number of numbersAnimation) {
    number.classList.add("animation")
  };
  console.log(numbers[0])
  let number
  let show = true
  if(numbersTossed.length >= parseInt(max)){
    const divContainer = document.getElementById("toss")
    divContainer.innerHTML = ""
    alert("Ya salieron todos los numeros")
    return
  }
  setTimeout(()=>{
    if(numbersTossed.length < parseInt(max)){
      do{
        number = Math.floor(Math.random()*max)+1
        console.log("dentro del do while")
      } while(numbersTossed.includes(number))
      numbersTossed.push(number)
      console.log(number, numbersTossed)
      numbers[number-1]?.classList?.remove("isSelected")
      numbers[number-1]?.setAttribute("class", `number ${number} check`)
      const numbersAnimation = document.getElementsByClassName("isSelected")
      for (const number of numbersAnimation) {
        number.classList.remove("animation")
      };
    
    }
    else {
      show = false
      alert("Ya salieron todos los numeros")
    }

    const divContainer = document.getElementById("toss")
    if(show){
      divContainer.innerHTML = number
    }
    else {
      divContainer.innerHTML = ""
    }
  }, 3000)
}

startButton.addEventListener("click", start)
tossButton.addEventListener("click", toss)