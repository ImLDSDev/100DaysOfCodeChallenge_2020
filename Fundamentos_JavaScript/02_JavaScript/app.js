
//var
var nombre;
nombre = 'Primer forma de asignación';

var nombre2 = 'Segunda forma de asignación';

var nombre3 = "Tercera forma de asignación",
    nombre4 = "Declaracion Multiple";

console.log(nombre);

console.log([nombre2, nombre3, nombre4]);

//let

// let nombre; No se puede volver a definir, ya existe (Uncaught SyntaxError: Identifier 'nombre' has already been declared)
let nombre_let;
nombre_let = 'Asignacion con LET1'; 

nombre_let = 'Asignacion con LET2'; // No permite declarar nuevamente, pero si se puede reasignar

console.log(nombre_let);

//const
//const debe asignarse desde la declaración

//const nombre_const; // Uncaught SyntaxError: Missing initializer in const declaration

const nombre_const = 'const';

console.log(nombre_const);

//Concatenar en JS
let mensaje;

mensaje = 'Texto1 ' + 'Texto2';

console.log(mensaje);

//uniendo Variables
let texto1, texto2;

texto1 = 'Java';
texto2 = 'Script';

console.log(`${texto1}${texto2}`);

//Strings y sus metodos
let aprendiendo = 'Aprendiendo',
    tecnologia  = 'JavaScript';

console.log(tecnologia.length)

console.log(tecnologia.concat('','Es genial'));

console.log(tecnologia.toUpperCase())

console.log(tecnologia.toLowerCase())

mensaje = 'Aprendiendo JavaScript, CSS, HTML para ser frontend'

console.log(mensaje.indexOf('JavaScript'));

console.log(mensaje.indexOf('PHP'));

console.log(mensaje.substring(0,11));

console.log(mensaje.slice(0,11));

console.log(mensaje.split(' '));

console.log(mensaje.replace('CSS','PHP'));

console.log(mensaje.includes('CSS'));

console.log(mensaje.includes('PHP'));

tecnologia = 'Java'
console.log(tecnologia.repeat(10));

//Numeros en JavaScript

const   numero1 = 30,
        numero2 = 20,
        numero3 = 20.20,
        numero4 = .1020,
        numero5 = -3;

let resultado;

//suma
resultado = numero1 + numero2;
console.log(resultado);

//resta
resultado = numero1 - numero2;
console.log(resultado);

//multiplicacion
resultado = numero1 * numero2;
console.log(resultado);

resultado = numero1 * 2;
console.log(resultado);

//division
resultado = numero1 / numero2;
console.log(resultado);

//Modulo
resultado = numero1 % numero2;
console.log(resultado);

//Pi
resultado = Math.PI;
console.log(resultado);

//Redondeo
resultado = Math.round(2.4);
console.log(resultado);

//Ceil
resultado = Math.ceil(2.4);
console.log(resultado);

//Floor
resultado = Math.floor(2.4);
console.log(resultado);

//Raiz Cuadrada
resultado = Math.sqrt(9);
console.log(resultado);

//Numero absoluto
resultado = Math.abs(-3);
console.log(resultado);

//Potencia
resultado = Math.pow(8, 3);
console.log(resultado);

//Numero minimo
resultado = Math.min(3,6,5,1,8,9);
console.log(resultado);

//Numero maximo
resultado = Math.max(3,6,5,1,8,9);
console.log(resultado);

//Numero aleatorio
resultado = Math.random();
console.log(resultado);

//Prioridad de operaciones
resultado = 10 + 20 - 5;
console.log(resultado);

resultado = (10 + 20) * 5;
console.log(resultado);

    //Descuento
resultado = (10 + 20 + 20 + 10 + 40)
console.log(resultado);

resultado = (10 + 20 + 20 + 10 + 40) * .2;
console.log(resultado);

//Incrementos
let puntaje; 

puntaje = 10;
console.log(puntaje);

puntaje++;
console.log(puntaje);

puntaje--;
console.log(puntaje);

puntaje = 20;

puntaje +=3;
console.log(puntaje);

puntaje -=3;
console.log(puntaje);

//Tipos de datos en JavaScript
let valor;

valor = 'Cadena de texto';
console.log(valor);

valor = 20;
console.log(valor);

valor = true;
console.log(valor);

valor = null;
console.log(valor);

valor = undefined;
console.log(valor);

valor = {nombre:'juan'}
console.log(valor);


let valor2;
console.log(typeof valor2);

valor2 = 'Juan';
console.log(typeof valor2);

valor2 = 20;
console.log(typeof valor2);

valor2 = 20.20;
console.log(typeof valor2);

valor2 = -30;
console.log(typeof valor2);

valor2 = true;
console.log(typeof valor2);

valor2 = null;
console.log(typeof valor2);

valor2 = Symbol('Simbolo');
console.log(typeof valor2);

//Array
valor2 = [1,2,3,4];
console.log(typeof valor2);

valor = {
            nombre: 'Juan',
            profesion: 'Desarrollador Web'
        }

        console.log(typeof valor2);

valor = new Date();
console.log(typeof valor2);

//Operadores de comparacion
const   numero11 = 20,
        numero12 = 50,
        numero13 = '20'; 

console.log( numero11 < numero12 );
console.log( numero11 > numero12 );

//Comparador de =
console.log( numero11 == '20' );

//Identico en valor y tipo
console.log( numero11 === '20' );

console.log( 2 == 3 );

console.log( 2 != 3 );

console.log('hola' == 'hola ');

console.log('a' > 'b ');

console.log('z' > 'A');

console.log( null == undefined);

console.log( null === undefined);

//Strings a Numero en JavaScript

const   numero21 = "50",
        numero22 = 10,
        numero23 = 'tres';

console.log(numero21 + numero22);

console.log(Number(numero21) + numero22);

console.log(parseInt(numero21) + numero22);

console.log(numero21 - numero22);

console.log(typeof numero21);

console.log(typeof numero23);

console.log(typeof Number(numero23));
console.log(Number(numero23));

let dato;

dato = Number("20");
console.log(dato);

dato = Number("20.10931");
console.log(dato);

dato = Number(true);
console.log(dato);

dato = Number(false);
console.log(dato);

dato = Number(null);
console.log(dato);

dato = Number(undefined);
console.log(dato);

dato = Number("Hola Mundo");
console.log(dato);

dato = Number([1,2,3,4,5]);
console.log(dato);

dato = parseInt(100);
console.log(dato);

dato = parseFloat(100);
console.log(dato);

dato = parseFloat(100.2030);
console.log(dato);

dato = parseInt(100.2030);
console.log(dato);

dato = 189.32039483240;
console.log( dato.toFixed(6) );

console.log(parseInt(dato).toFixed(2));

console.log(parseFloat(dato).toFixed(2));

//Numero a String
let cp = 90210

console.log(typeof cp);

cp = String(cp);
console.log(cp.length);

dato = 4+4;
console.log(dato);

dato = '4' + '4';
console.log(dato.length);

dato = true;
console.log(dato);

dato = String(dato);
console.log(typeof dato);
console.log(dato.length);

dato = 20;
console.log(dato.toString());

//dato = null;
//console.log(dato.toString());


//Template literals
const   producto1   = 'Pizza',
        precio1     = 30,
        producto2   = 'Hamburguesa',
        precio2     = 40;

let html;
// html =  '<ul>' +
//         '<li>Orden:' + producto1 + '</li>' +
//         '<li>Precio:' + precio1 + '</li>' +
//         '<li>Orden:' + producto2 + '</li>' +
//         '<li>Precio:' + precio2 + '</li>' +
//         '<li>Total:' + (precio2 + precio2) + '</li>' +
//         '</ul>';
// console.log(html);

// document.getElementById('app').innerHTML = html;

html = `
        <ul>
            <li>Orden: ${producto1}</li>
            <li>Precio: ${precio1}</li>
            <li>Orden: ${producto1}</li>
            <li>Precio: ${precio2}</li>
            <li>Total: ${total(precio1,precio2)}</li>
        </ul>
        `;
function total(precio1, precio2){
    return precio1 + precio2;
}        
document.getElementById('app').innerHTML = html;

//Arrays
const numeros = [10,20,30,40,50,60]
console.log(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril')
console.log(meses);

const mezclado = ['Hola', 20, true, null, false, undefined];
console.log(mezclado);

console.log(meses.length)
console.log(Array.isArray(meses));
console.log(Array.isArray(nombre));

console.log(meses);
console.log(meses[1]);

console.log(meses[4]);
meses[4]= 'Mayo';
console.log(meses[4]);

meses.push('Junio');
console.log(meses[5]);

//Encontrar un elemento en el arreglo

console.log(meses.indexOf('Abril'));

meses.unshift('Mes 0');
console.log(meses);

meses.pop();
console.log(meses);

meses.shift();
console.log(meses);

meses.splice(2,2);
console.log(meses);

meses.reverse();
console.log(meses);

let arreglo1 = [1,2,3],
    arreglo2 = [4,5,6];

console.log(arreglo1.concat(arreglo2));

const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja', 'Zanahoria'];
console.log(frutas.sort());

arreglo1 = [3, 10 ,9,5,1,8];
console.log(arreglo1);

console.log(arreglo1.sort());

//Ordenar Numeros en Arreglos
console.log(arreglo1.sort(function(x,y){
    return x - y;
}));

//Ordenar Numeros en Arreglos Descendente
console.log(arreglo1.sort(function(x,y){
    return y - x;
}));


//Objetos en JavaScript

const persona = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Diseñador Grafico',
    email: 'correo@dominio.com',
    edad: 31,
    musica: ['Trance', 'Rock', 'Otra'],
    hogar: {
        ciudad: 'CDMX',
        pais: 'Mexico'
    },
    nacimiento: function() {
        return new Date().getUTCFullYear() - this.edad;
    }
};

console.log(persona);

console.log(persona.nombre);

console.log(persona.edad);

console.log(persona.musica);

persona.musica.push('Alternativo');

console.log(persona.musica);

console.log(persona.hogar.pais);

console.log(persona.nacimiento());


//Arreglo de Objetos

const autos = [
    {modelo: 'Mustang', motor: 6.2},
    {modelo: 'Camaro', motor: 6.1},
    {modelo: 'Challenger', motor: 6.3},
];

console.log(autos);

console.log(autos[0].modelo);

for(let i = 0; i < autos.length; i++){
    console.log(autos[i].modelo);
};


//Funciones
//Function Declaratios
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
};

saludar('Bro');
saludar('Alma');

function sumar(a,b) {
    console.log(a+b);
};
sumar(1,2);

function saludar2(nombre = 'Visitante') {
    return `Hola ${nombre}`
}

let saludo;

saludo = saludar2('Mike');
console.log(saludo);

saludo = saludar2();
console.log(saludo);

//Funciones IIFE

(function (tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
})('JavaScript');

//Metodos de Propiedad
//Cuando una funcion se pone dentro de un objeto

const musica ={
    reproducir: function (id) {
        console.log(`Reproduciendo Cancion id ${30}`);
    },
    pausar: function () {
        console.log(`Música Pausada`);
    }
};

musica.reproducir(30);

musica.pausar();


//Manejando Errores con Try Catch
function obtenerClientes() {
    console.log('Descargando...')

    setTimeout(function(params) {
        console.log('Completo')
    }, 3000);
}

try {
    algo();
} catch (error) {
    console.log(error);
}finally{
    console.log('No evalua nada, siempre se ejecuta')
}

//En JavaScript existe un objeto llamado Date

//Fecha en especifico mes, dia, año
let navidad2017 = new Date('12-25-2017');
console.log(navidad2017);

const diaHoy = new Date();
console.log(diaHoy);

valor = diaHoy.getMonth();
console.log(valor);

valor = diaHoy.getDay();
console.log(valor);

valor = diaHoy.getFullYear();
console.log(valor);

valor = diaHoy.getMinutes();
console.log(valor);

valor = diaHoy.getHours();
console.log(valor);

valor = diaHoy.getTime();
console.log(valor);

valor = diaHoy.getFullYear();
console.log(valor);
valor = diaHoy.setFullYear(2021);
valor = diaHoy.getFullYear();
console.log(valor);

//Estructuras de control IF ELSE IFELSE
let edad = 17;

if(edad >= 18){
    console.log('Si puedes entrar al sitio');
}else{
    console.log('No puedes entrar al sitio');
}

edad = 18;

if(edad >= 18){
    console.log('Si puedes entrar al sitio');
}else{
    console.log('No puedes entrar al sitio');
}

//Comprobar que una variable tiene valor
let puntaje2;

if(puntaje2){
    console.log(`El puntaje fue de ${puntaje2}`)
}else {
    console.log(`No hay puntaje`)
}

let efectivo = 500, 
    totalCarrito = 300;

if(efectivo > totalCarrito){
    console.log('Pago Correcto');
} else {
    console.log('Fondos insuficientes');
}

let hora = 20;

if(hora >= 0 && hora <= 10){
    console.log('Buenos dias!');
} else if(hora > 10 && hora < 18 ){
    console.log('Buenas tardes!');
} else {
    console.log('Buenas noches!');
}

hora = 9;
if(hora >= 0 && hora <= 10){
    console.log('Buenos dias!');
} else if(hora > 10 && hora < 18 ){
    console.log('Buenas tardes!');
} else {
    console.log('Buenas noches!');
}

hora = 12;
if(hora >= 0 && hora <= 10){
    console.log('Buenos dias!');
} else if(hora > 10 && hora < 18 ){
    console.log('Buenas tardes!');
} else {
    console.log('Buenas noches!');
}

let logueado = true;

console.log( logueado=== true ? 'Si se logueo' : 'No se logeo' );

logueado = false;
console.log( logueado=== true ? 'Si se logueo' : 'No se logeo' );

//Swith
let medotoPago = 'efectivo';
switch(medotoPago){
    case 'efectivo':
        console.log(`El usuario pago con ${medotoPago}`);
        break;
    case 'cheque':
        console.log(`El usuario pago con ${medotoPago}`);
        break;
    case 'tarjeta':
         console.log(`El usuario pago con ${medotoPago}`);
         break;
    default:
        console.log('Metodo de pago no soportado');
        break;
}

//Iteraciones

for(let i = 0; i <= 6; i++){
    if(i == 5){
        console.log(`Voy en el ${i}`);
        continue;
    }
    console.log(`Numero ${i}`);
};

let indice = 0;

while(indice <= 5){
    console.log(`Numero: ${indice}`);
    indice++;
}

do{
    console.log(`Numero: ${indice}`);
    indice++;
} while(indice < 2);

const pendientes = ['Tareas', 'Comer', 'Proyecto', 'Aprender'];

console.log(pendientes);

for(i=0; i < pendientes.length; i++){
    console.log(pendientes[i]);
}
console.log('__________');

pendientes.forEach(function(pendiente, index) {
    console.log(`${index}: ${pendiente}`)
});

const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anio: 1969,
    marca: 'Chevrolet'
}

//Imprimir objeto con For
for( let auto in automovil ){
    console.log(`${auto} : ${automovil[auto]}`);
};
console.log(automovil);

const   ciudades = ['Londres', 'New York', 'Madrid', 'Paris'],
        ordenes = new Set([123,321,131,102]),
        datos = new Map();

datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador web');

console.log(ciudades);
console.log(ordenes);
console.log(datos);