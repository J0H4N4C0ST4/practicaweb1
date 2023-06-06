// js4.js

function contarVocales() {
    var frase = prompt("Ingresa una frase:");
    var contadorA = 0;
    var contadorE = 0;
    var contadorI = 0;
    var contadorO = 0;
    var contadorU = 0;
  
    for (var i = 0; i < frase.length; i++) {
      var letra = frase.charAt(i).toLowerCase();
      switch (letra) {
        case "a":
          contadorA++;
          break;
        case "e":
          contadorE++;
          break;
        case "i":
          contadorI++;
          break;
        case "o":
          contadorO++;
          break;
        case "u":
          contadorU++;
          break;
      }
    }
  
    var resultado =
      "Cantidad de 'a': " + contadorA +
      "\nCantidad de 'e': " + contadorE +
      "\nCantidad de 'i': " + contadorI +
      "\nCantidad de 'o': " + contadorO +
      "\nCantidad de 'u': " + contadorU;
  
    alert(resultado);
  }
  