
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

