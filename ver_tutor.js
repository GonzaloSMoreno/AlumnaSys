fetch('https://alumnasys-desarrollo.onrender.com/tutores/', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}, 
})
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {

        
    
        console.log(data);
        console.log(data.length);
        const tbody = document.querySelector("#miTabla tbody");
        const fila = document.createElement("tr");

        const radioCell = document.createElement("td")
        const radioInput = document.createElement("input")
        radioInput.type = "radio";
        radioInput.name = "registro";
        radioInput.value = data[i].id;
        radioCell.appendChild(radioInput);

        const nombreCell = document.createElement("td");
        nombreCell.textContent = data[i].apellido + " " + data[i].nombre;
        
        const tipoCell = document.createElement("td");
        tipoCell.textContent = data[i].tipo;
        
        fila.appendChild(radioCell);
        fila.appendChild(nombreCell);
        fila.appendChild(tipoCell);

        tbody.appendChild(fila);
}})
.catch(error => console.error('Error:', error));