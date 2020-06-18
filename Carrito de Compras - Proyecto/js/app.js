//Variables
const   carrito = document.getElementById('carrito'),
        cursos  = document.getElementById('lista-cursos');



//Listeners
cargarEventListeners();

function cargarEventListeners(){
    cursos.addEventListener('click', comprarCurso);
}


//Funciones
function comprarCurso(e){
    e.preventDefault();
    //Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.preventElement.parentElement;
        //Enviamos el curso seleccionado para leer los datos.
        leerDatosCurso(curso);
    }
}

//Lee los datos del curso

function leerDatosCurso(curso) {
    
}