document.querySelector('#header').innerHTML = "estoy leyendo practica"


var tareas = []

function ver_tareas() {
    alert(tareas)
}

function agregar() {

    var tarea1 = prompt("que tarea quiere añadir")
    tareas.push(tarea1)

}

function remplazar(){
    var numero = prompt("ingrese el numero de la tarea que desea remplazar")
    var mode = prompt("tarea por remplazar")
    tareas[numero]=mode
}

function eliminar(){
    var tarea2 =parseInt(prompt ("que tarea quiere eliminar "))
     tareas.splice(tarea2, 1)
  
}

var inicio = false


do {
    var opcion = prompt("1. ver tareas \n 2. agregar una tarea\n 3. remplazar tarea \n4. eliminar tarea en especifico\n 5. salir ");

  switch (parseInt(opcion)) {
      case 1:
          ver_tareas();
          break;
      case 2:
          agregar();
          break;
      case 3:
        remplazar()
        break;
          case 4:
            eliminar();
            break;
      case 5:
        inicio = prompt("desea salir por completo?")
          if (inicio=="si"){
            inicio = true
          }
    

          break;        
  }        

} while (inicio == true)







