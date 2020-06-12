const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarAPI);


function cargarAPI() {
    //crea el objeto
    const xhr = new XMLHttpRequest();
    //abrir la conexión
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    //carga y leé datos
    xhr.onload = function() {
        if(this.status === 200){
            const respuesta = JSON.parse( this.responseText );

            let contenido = '';
            respuesta.forEach(function(post){
                contenido += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
            });
            document.getElementById('listado').innerHTML = contenido; 
        }
    }
    //Enviar la conexión
    xhr.send();
}