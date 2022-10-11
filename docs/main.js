// SELECTORES FORMULARIO : 

let formName = document.querySelector("#formName")
let formNumber = document.querySelector("#formNumber")
let formDateMM = document.querySelector("#formDateMM")
let formDateYY = document.querySelector("#formDateYY")
let formCVC = document.querySelector("#formCVC")
let btnThankYou = document.querySelector(".btn")
let formulario = document.querySelector(".formulario")
let forumularioThanYou = document.querySelector(".tankYou")
let thankYou = document.querySelector(".btn-thankYou")

// SELECTORES IMAGEN CARD : 

let cardName = document.querySelector(".cardName")
let cardNumber = document.querySelector(".cardNumber")
let cardDate = document.querySelector(".date")
// let cardDateYY = document.querySelector("")
let cardCVC = document.querySelector(".cardCVC")


// FUNCIONES: 

function actualizarDatos(){
    cardName.innerHTML = formName.value;
    cardNumber.value = formNumber.value;
    cardDate.innerHTML = formDateMM.value + "/" + formDateYY.value;
    // cardDateMM.innerHTML = formDateMM.value;
    // cardDateMM.innerHTML = formDateYY.value;
    cardCVC.innerHTML = formCVC.value;
}

function agradecer(){
    formulario.style.display = "none";
    forumularioThanYou.style.display = "flex";
}

function volver(){
    forumularioThanYou.style.display = "none";
    formulario.style.display = "block";
}

// EVENTOS 

formName.addEventListener("keyup", actualizarDatos)

formNumber.addEventListener("keyup", actualizarDatos)

formDateMM.addEventListener("keyup", actualizarDatos)

formDateYY.addEventListener("keyup", actualizarDatos)

formCVC.addEventListener("keyup", actualizarDatos)

btnThankYou.addEventListener("click", agradecer)

thankYou.addEventListener("click", volver)