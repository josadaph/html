var mensaje;
var hay_fresas;

function jugo_de_fresas() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
}

function servir_vaso_de_agua() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
}

function batido_de_peras() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
}

function batido_de_mangos() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
}

hay_fresas = false;
hay_peras = false;
hay_mangos = true;
if (hay_fresas) {
    mensaje = 'batir fresas';
    jugo_de_fresas();
}
else if (hay_peras) {
    mensaje = 'batir peras';
    batido_de_peras();
}
else if (hay_mangos) {
    mensaje = 'batir mangos';
    batido_de_mangos();
}
else {
    mensaje = 'sirvame el vaso de agua';
    servir_vaso_de_agua();
}


