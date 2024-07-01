fetch('https://alumnasys-desarrollo.onrender.com/')
.then(response => response.json())
.then(data => {
    alert(JSON.stringify(data, null, 2));
})
.catch(error => {
    alert(error);
})

function alta_tutor(){
    let form = document.querySelector('form');
    let data = new FormData(form);
    let json = Object.fromEntries(data.entries());
    console.log(json)

    fetch('https://alumnasys-desarrollo.onrender.com/tutores/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},    
        body: JSON.stringify(json)
    }).then(response => response.json())
    .then(data => console.log(data))
}

function baja_tutor(){
    let form = document.querySelector('form');
    const radios = document.querySelectorAll('input[name="registro"]');
    let id = null;

    for (const radio of radios) {
        if (radio.checked) {
            id = radio.value;
            break;
        }
    }

    if (id) {
        const filaAEliminar = document.querySelector(`#miTabla tbody tr td input[value="${id}"]`).parentNode.parentNode;
        filaAEliminar.remove()
        
        fetch(`https://alumnasys-desarrollo.onrender.com/tutores/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        }).then(response => response.json())
        .then(data => console.log(data))
        
    }else {
        alert("Selecciona un registro para eliminar.");
    }
}

 
function modificar_Tutor() {
    var radios = document.getElementsByName('registro');
    var idTutorSeleccionado = -1; // Valor inicial que indica ningún tutor seleccionado

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            idTutorSeleccionado = radios[i].value;
            break;
        }
    }

    if (idTutorSeleccionado !== -1) {
        var url = `modificacion-tutor.html?id=${idTutorSeleccionado}`;
        
        window.location.href = url;
    } else {
        alert('Por favor selecciona un registro para modificar.');
    }
}




