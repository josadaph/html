document.querySelector('#header').innerHTML = "estoy leyendo array"

var cesta = ["fresa", "pera", "cereza"]

console.log(cesta)

cesta[0] = "uva" //  para modificar el valor de una posicion 

console.log(cesta)

console.log(cesta.length) // ver el tamaño de la array o sea cuantos elementos tiene la array

cesta.push("naranja")//  agrega un elemento a la array

console.log(cesta)

cesta.pop() // elimina el ultimo elemento de la array
console.log(cesta)

cesta.push("naranja")
cesta.push("piña")
console.log(cesta)

cesta.splice(2, 1)
/* el primer numero define desde donde se va
 a empezar a borrar, el segundo lo que hace es definir cuantos se van a borrar*/

console.log(cesta)

var cestaVacia = [] // crea un array vacio
console.log(cestaVacia)






var opcion = prompt("1. ver elementos de la cesta\n 2. agregar una fruta a la cesta\n 3. quitar ultima fruta de la cesta  ")


