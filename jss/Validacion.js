var formulario = document.getElementById('formulario');
var nombre = document.getElementById('nombre');
var Dirección = document.getElementById('Dirección');
var telefono = document.getElementById('telefono');
var Correo = document.getElementById('Correo');
var Ciudad = document.getElementById('Ciudad');
var edad = document.getElementById('edad');

var error = document.getElementById('error');
error.style.color = 'red';

formulario.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    var MensajeError = [];

    if(nombre.value === null || nombre.value === '')
    {
        MensajeError.push('Ingresa tu Nombre');
    }

    if(Dirección.value === null || Dirección.value === "")
    {
        MensajeError.push('Ingresa tu Dirección');
    }

    if(telefono.value === null || telefono.value === "")
    {
        MensajeError.push('Ingresa tu telefono');
    }

    if(Correo.value === null || Correo.value === "")
    {
        MensajeError.push('Ingresa tu Correo');
    }

    if(Ciudad.value === null || Ciudad.value === "")
    {
        MensajeError.push('Ingresa tu Ciudad');
    }

    if(edad.value === null || edad.value === "")
    {
        MensajeError.push('Ingresa tu Edad');
    }

    error.innerHTML = MensajeError.join(', ');

});

