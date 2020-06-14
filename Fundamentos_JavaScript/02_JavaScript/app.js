
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
