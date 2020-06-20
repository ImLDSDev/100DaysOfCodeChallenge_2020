//Variables
const   carrito = document.getElementById('carrito'),
        cursos  = document.getElementById('lista-cursos'),
        listaCursos = document.querySelector('#lista-carrito tbody'),
        vaciarCarritoBtn = document.getElementById('vaciar-carrito');



//Listeners
cargarEventListeners();

function cargarEventListeners(){
    //Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);

    //Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Boton vaciar carrito
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
}


//Funciones
function comprarCurso(e){
    e.preventDefault();
    //Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        //Enviamos el curso seleccionado para leer los datos.
        leerDatosCurso(curso);
    }
}

//Lee los datos del curso

function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id:     curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);

}

//Muestra el curso seleccionado en el carrito
function insertarCarrito(curso){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href='#' class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
}

//Elimina curso del carrito (DOM)
function eliminarCurso(e){
    e.preventDefault();

    let curso;
    if(e.target.classList.contains('borrar-curso') ) {
        e.target.parentElement.parentElement.remove();
    }
}

//Elimina los cursos en el carrito en el DOM
function vaciarCarrito() {
   //forma lenta (rapida de programar)
   //listaCursos.innerHTML = '';
   
   //Forma recomendada
   while(listaCursos.firstChild) {
       listaCursos.removeChild(listaCursos.firstChild);
   }

   return false;
}