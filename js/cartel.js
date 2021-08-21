
var tiempo = new Date();
var hora = tiempo.getHours();
// var hora = 20;

const nombreDeClase = document.querySelector(".cartel");

var clase = nombreDeClase.className; // Obtener clases CSS
nombreDeClase.getAttribute("class");

if (hora >= 9 && hora < 18) {
    // nombreDeClase.setAttribute("class", "btn verde"); // Modificar clases CSS
    document.getElementById("cartel").innerHTML = "Abierto";

} else {
    // nombreDeClase.setAttribute("class", "btn rojo"); // Modificar clases CSS
    document.getElementById("cartel").innerHTML = "Cerrado";
}
