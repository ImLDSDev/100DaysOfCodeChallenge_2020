//Cotizador Constructor

function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(informacion) {
    /*
        1 = americano 1.15
        2 = asiatico 1. 05
        3 = europeo 1.35
    */
   let cantidad;
   const base = 2000;

   switch(this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
   }

   //Leer el año   
   const diferencia = new Date().getFullYear() - this.anio;
   cantidad -= ((diferencia * 3) * cantidad) / 100;
   /*
        Seguro basico mas 30%
        Seguro Completo mas 50%
   */
  if(this.tipo === 'basico') {
      cantidad *= 1.30;
  } else {
      cantidad *= 1.50;
  }

  return cantidad;
}

//Todo lo que se muestra
function Interfaz() {

}

//Mensaje que se imprime en el HTML
Interfaz.prototype.mostrarError = function(mensaje, tipo) {
    const div = document.createElement('div');
    if(tipo === 'error') {
        div.classList.add('mensaje','error');
    } else {
        div.classList.add('mensaje','correcto');
    }

    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function() {
        document.querySelector('.mensaje').remove();
    }, 3000)
}


// Imprime el resultado de la cotizacion

Interfaz.prototype.mostrarResultado = function(seguro, total) {
    const resultado = document.getElementById('resultado');

    
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
        interfaz.mostrarError('Faltan Datos, revisa el formulario y prueba de nuevo', 'error');
        
    } else {
        const seguro = new Seguro(marcaSeleccionada, anioSeleccioando, tipo);

        //Cotizar el seguro
        const cantidad = seguro.cotizarSeguro();

        interfaz.mostrarResultado(seguro, cantidad);
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