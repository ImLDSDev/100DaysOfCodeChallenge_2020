//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event Listeners
eventListeners();

function eventListeners(){
    //Cuando se envia al formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet); 

    listaTweets.addEventListener('click', borrarTweet);
}


//Functions

/* Añadir tweet del formulario*/
function agregarTweet(e) {
    e.preventDefault();
    //leer valor del textarea
    const tweet = document.getElementById('tweet').value;
    //Boton para eliminar tweet
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet; //Se asigna el valor de la textarea al elemento de la lista.
    li.appendChild(botonBorrar);//Añade boton de borrar
    listaTweets.appendChild(li);//Añade el boton a la lista
}

function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        console.log(e.target.parentElement.remove() );
        alert('Tweet Eliminado');
    }
}