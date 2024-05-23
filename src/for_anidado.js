var mensaje;
mensaje = " estoy leyendo for anidado  "
var elemento = document.querySelector('#header');
elemento.innerHTML = mensaje


for (let index1 = 1; index1<= 10; index1 ++){
    for (let index2 = 1; index2<= 10; index2 ++){
        console.log (index1+"*"+index2+"="+index1*index2)
    }


} 