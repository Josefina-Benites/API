document.getElementById('cargar').addEventListener('click', cargarDatos);


function cargarDatos() {
    //crear el objeto xmlhttrequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexion
    xhr.open('GET', 'datos.txt', true);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
        }
    }
   

    //Enviar el request 
    xhr.send();
}