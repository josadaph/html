document.querySelector('#header').innerHTML = "estoy leyendo el documento switch";
var dia; 
var mensaje;
var user imput = prompt ("ingrese el dia de la semana");

function lunes() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"; 

}

function martes() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"; 

}

function miercoles() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"; 

}

function jueves() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"; 

}

function viernes() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"; 

}

function sabado() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"; 

}

function domingo() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red"; 

}

dia = parseInt(userimput)

switch(dia) {
    case 1:
        mensaje= "de nuevo al ciclo"
        lunes()
}