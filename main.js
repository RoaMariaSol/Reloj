let mostrarFecha = document.getElementById('fecha');
let mostrarReloj = document.getElementById('reloj');

let fecha = new Date();

let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];


let mesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]},
${fecha.getDate()} de ${mesAnio[fecha.getMonth()]} del ${fecha.getFullYear()}`;

setInterval (()=>{
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString();

}, 1000);