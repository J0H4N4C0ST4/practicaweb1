// js2.js

function compararNumeros() {
    var num1 = prompt("Ingresa el primer número:");
    var num2 = prompt("Ingresa el segundo número:");
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Ingresa valores numéricos válidos.");
    } else if (num1 > num2) {
      alert("El primer número es mayor que el segundo número.");
    } else if (num1 < num2) {
      alert("El segundo número es mayor que el primer número.");
    } else {
      alert("Ambos números son iguales.");
    }
  }
  