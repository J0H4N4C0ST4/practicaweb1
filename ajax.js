// ajax.js

function mostrarContenidos() {
    var url = document.getElementById("url-input").value;
  
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      // Actualizar el estado de la petición
      var estadoPeticion = document.getElementById("estado-peticion");
      estadoPeticion.textContent = obtenerEstadoPeticion(xhr.readyState);
  
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Mostrar las cabeceras HTTP
        var cabecerasHTTP = document.getElementById("cabeceras-http");
        cabecerasHTTP.textContent = xhr.getAllResponseHeaders();
  
        // Mostrar el código de estado
        var codigoEstado = document.getElementById("codigo-estado");
        codigoEstado.textContent = xhr.status + " " + xhr.statusText;
  
        // Mostrar los contenidos de la respuesta
        var contenidos = document.getElementById("contenidos");
        contenidos.textContent = xhr.responseText;
      }
    };
  
    xhr.open("GET", url, true);
    xhr.send();
  }
  
  function obtenerEstadoPeticion(estado) {
    switch (estado) {
      case 0:
        return "No iniciada";
      case 1:
        return "Cargando";
      case 2:
        return "Cargada";
      case 3:
        return "Interactiva";
      case 4:
        return "Completada";
      default:
        return "Desconocido";
    }
  }
  