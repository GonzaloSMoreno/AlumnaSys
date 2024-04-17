document.getElementById("miBoton").addEventListener('click', function() {
    console.log('funciona');
});

document.getElementById('miBoton').addEventListener('click', function() {
    var datos = document.getElementsByClassName('datos');
    var fecha = document.getElementsByClassName('fecha')[0];
    var tipotutor = document.getElementsByClassName('tipotutor')[0];

    var json = {
        Apellido: datos[0].value,
        Nombre: datos[1].value,
        Dirección: datos[2].value,
        Localidad: datos[3].value,
        'Fecha de nacimiento': fecha.value,
        Tipo: tipotutor.value
    };

    console.log(json);
});