// js3.js

function obtenerVocales() {
    var frase = prompt("Ingresa una frase:");
    var vocales = "";
  
    for (var i = 0; i < frase.length; i++) {
      var letra = frase.charAt(i).toLowerCase();
      if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        vocales += letra + " ";
      }
    }
  
    if (vocales.length > 0) {
      alert("Las vocales en la frase son: " + vocales);
    } else {
      alert("No se encontraron vocales en la frase.");
    }
  }
  