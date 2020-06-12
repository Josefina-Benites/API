//Listado de paises
const paises = ['Francia', 'España', 'Argentina', 'Inglaterra'];

//se agraga un país después de dos segundos 
function nuevoPais(pais, callback){
    setTimeout(function() {
         paises.push(pais);
         callback();
    }, 2000);
}


//los paises se muestran despues de un segundo 
function mostrarPaises() {
    setTimeout(function() {
        let html = '';
        paises.forEach(function(pais){
             html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000);

}

//agragar un nuevo país
nuevoPais('Alemania', mostrarPaises);

//mostrar la función
 mostrarPaises();