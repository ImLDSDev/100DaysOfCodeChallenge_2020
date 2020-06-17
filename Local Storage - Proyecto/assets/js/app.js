//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event Listeners
eventListeners();

function eventListeners(){
    //Cuando se envia al formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet); 

    listaTweets.addEventListener('click', borrarTweet);

    //Contenido Cargado
    document.addEventListener('DOMContentLoaded',localStorageListo);
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

    //Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
}

//Elimina el tweet del DOM
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        //console.log(e.target.parentElement.remove() ); //Sin el espacio despues de remove(), no funcionaba
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
        
    }
}

//Mostrar datos de local storage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet) {
        //Boton para eliminar tweet
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        //Crear elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet; //Se asigna el valor de la textarea al elemento de la lista.
        li.appendChild(botonBorrar);//Añade boton de borrar
        listaTweets.appendChild(li);//Añade el boton a la lista
    });
}

//Agrega tweet a local storge
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    //Añadir el nuevo tweet
    tweets.push(tweet);
    //Convertir a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}

function obtenerTweetsLocalStorage(){
    let tweets;

    //revisamos los valores de local storage
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets') );
    }
    return tweets;
}

//Eliminar tweet de local Storage
function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    
    //Elimina X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if(tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets) );
}