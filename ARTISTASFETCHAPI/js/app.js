
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
     e.preventDefault();

     // Leer las variables
     const apiKey = '53ae89eb5f3cd54814a53cc2d9085fc4';

     const origen = document.getElementById('origen');
     const origenSeleccionado = origen.options[origen.selectedIndex].value;

    let url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${ origenSeleccionado }&api_key=${ apiKey }&format=json`;

   //crea fetch
   fetch(url)
         .then(function(res) {
              return res.json();
         })
         .then(function(data) {
              let html =`<h2>Nombres de Artistas Generados</h2>`;
              html += `<ul class="lista">`;
              data.topartists.artist.forEach(function(nombre) {
                   html += `
                         <li>${nombre.name}</li>
                   `;    
              })
              html += `</ul>`;
              document.querySelector('#resultado').innerHTML = html;
         })
}