// js1.js

function esPalindromo(cadena) {
    // Eliminamos los espacios y convertimos todo a minúsculas
    cadena = cadena.toLowerCase().replace(/\s/g, '');
  
    // Revertimos la cadena
    var cadenaRevertida = cadena.split('').reverse().join('');
  
    // Comparamos la cadena original con la cadena revertida
    if (cadena === cadenaRevertida) {
      return true; // Es un palíndromo
    } else {
      return false; // No es un palíndromo
    }
  }
  
  function verificarPalindromo() {
    var input = prompt("Ingresa una cadena:");
    var resultado = esPalindromo(input);
    var resultadoTexto = resultado ? "Es un palíndromo" : "No es un palíndromo";
    alert(resultadoTexto);
  }
  

  