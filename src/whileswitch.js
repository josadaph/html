var mensaje;
mensaje = "estoy leyendo el mensaje de whileswitch.js"
var elemento = document.querySelector('#header');
elemento.innerHTML = mensaje





var inicio = true

while (inicio == true) {




    var respuesta = prompt("1. suma\n2. resta\n3. division\n4. multiplicacion\n5. Para salir")
    switch (parseInt(respuesta)) {
        case 1:
            var numero1 = prompt(" ingresa numero 1 ")
            var numero2 = prompt(" ingresa numero 2")
            alert(parseInt(numero1) + parseInt(numero2))
            break

        case 2:
            var numero1 = prompt(" ingresa numero 1 ")
            var numero2 = prompt(" ingresa numero 2")
            alert(parseInt(numero1) - parseInt(numero2))
            break

        case 3:
            var numero1 = prompt(" ingresa numero 1 ")
            var numero2 = prompt(" ingresa numero 2")
            alert(parseInt(numero1) % parseInt(numero2))
            break

        case 4:
            var numero1 = prompt(" ingresa numero 1 ")
            var numero2 = prompt(" ingresa numero 2")
            alert(parseInt(numero1) * parseInt(numero2))
            break
        case 5:
            var inicio = false
    }
} // fin del while



