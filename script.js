function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    document.getElementById("time").innerHTML = "Hora actual: " + hours + ":" + minutes + ":" + seconds;
}

function showDate() {
    let date = new Date();
    
    document.getElementById("date").innerHTML = "Fecha actual: " + date.toDateString();
}

function showLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            document.getElementById("location").innerHTML = "Ubicación actual: Latitud " + latitude + ", Longitud " + longitude;
        });
    } else {
        document.getElementById("location").innerHTML = "No se pudo obtener la ubicación";
    }
}

showTime();
showDate();
showLocation();
