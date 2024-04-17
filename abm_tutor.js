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