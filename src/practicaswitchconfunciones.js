var mensaje;
mensaje = " estoy leyendo practica"
var elemento = document.querySelector('#header');
elemento.innerHTML = mensaje

var inicio = true

function suma() {
    var numero1 = prompt("escriba primer numero ")
    var numero2 = prompt("escriba segundo numero ")
    alert(parseInt(numero1) + parseInt(numero2))
}

function resta() {
    var numero1 = prompt("escriba primer numero ")
    var numero2 = prompt("escriba segundo numero ")

    alert(parseInt(numero1) - parseInt(numero2))
}
function multiplicacion() {
    var numero1 = prompt("escriba primer numero ")
    var numero2 = prompt("escriba segundo numero ")
    alert(parseInt(numero1) * parseInt(numero2))
}

function division() {
    var numero1 = prompt("escriba primer numero ")
    var numero2 = prompt("escriba segundo numero ")
    alert(parseInt(numero1) / parseInt(numero2))
}

while (inicio == true) {

    var respuesta = prompt("1. suma\n 2. resta\n 3. multiplicacion\n 4. division\n 5. salir")
    switch (parseInt(respuesta)) {

        case 1:
            suma()
            break

        case 2:
            resta()
            break

        case 3:
            multiplicacion()
            break

        case 4:
            division()
            break

        case 5:
            salir()
            break

    }// fin del switch 
} // fin del while