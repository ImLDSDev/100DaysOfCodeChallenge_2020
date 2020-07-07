//Cotizador Constructor

function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

//Todo lo que se muestra
function Interfaz() {

}

//Event Listener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    console.log(marcaSeleccionada);

    //Leer año seleccionado
    const anio = document.getElementById('anio');
    const anioSeleccioando = anio.options[anio.selectedIndex].value;
    console.log(anioSeleccioando);

    //Lee el valor del radio button
    const  tipo = document.querySelector('input[name="tipo"]:checked').value;
    console.log(tipo);

    //Crear instancia de Interfaz
    const interfaz = new Interfaz();

    //
    if(marcaSeleccionada === '' || anioSeleccioando === '' || tipo === '')
    {
        console.log()
    }

});

const max = new Date().getFullYear(),
        min = max - 20;

const selectAnios = document.getElementById('anio');
for(let i = max; i >= min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}