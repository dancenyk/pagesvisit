
const contadorVisitas = document.getElementById("contadorVisitas")
const btnReestablecer = document.getElementById("btnReestablecer")

let getCountLocal = parseInt(localStorage.getItem("contador")) || 0
getCountLocal ++

localStorage.setItem("contador", getCountLocal)
contadorVisitas.textContent = localStorage.getItem("contador")

const resetVisit = ()=>{
    localStorage.setItem("contador", 0)
    contadorVisitas.textContent = localStorage.getItem("contador")
}

btnReestablecer.addEventListener("click", resetVisit)

/* 
let contadorNumber = 0
let contadorString = ""


if(localStorage.getItem("contador")!== null){
    contadorString = localStorage.getItem("contador")
    contadorNumber =parseInt(contadorString)

}
contadorNumber ++
localStorage.setItem("contador", contadorNumber)
contadorVisitas.textContent = localStorage.getItem("contador")

const resetVisit = ()=>{
    localStorage.setItem("contador", 0)
    contadorVisitas.textContent = localStorage.getItem("contador")
}
*/

