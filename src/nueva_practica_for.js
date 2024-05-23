document.querySelector('#header').innerHTML = "estoy leyendo practica"

var arreglo = []
var largo = parseInt(prompt("insertar el largo"))

for (let i = 0; i< 10; i++){
    let numeroaleatorio = Math.floor(Math.random() * 20) + 1
    arreglo[i] = numeroaleatorio 
}
console.log (arreglo)