var hotelName = prompt("Cual es el hotel");

document.getElementById('nombre').innerHTML = hotelName;

var isAnonymous = confirm("Reseña anonima?")

document.getElementById('hotelCheck').checked = isAnonymous;