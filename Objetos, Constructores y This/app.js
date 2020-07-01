// Object Literal

// const cliente = {
//     nombre  : 'Juan',
//     saldo   : 200,
//     tipoCliente : function() {
//         let tipo;
        
//         if (this.saldo > 1000) {
//             tipo = 'Gold';
//         } else if(this.saldo > 500) {
//             tipo = 'Platinum';
//         } else {
//             tipo = 'Normal';
//         }

//         return tipo;
//     }
// }

// console.log(cliente.tipoCliente() );

// console.log(cliente.saldo );



//Metodo Alternativo

// function Cliente(nombre, saldo) {
//     this.nombre  = nombre,
//     this.saldo   = saldo,
//     this.tipoCliente = function() {
//         let tipo;
        
//         if (this.saldo > 1000) {
//             tipo = 'Gold';
//         } else if(this.saldo > 500) {
//             tipo = 'Platinum';
//         } else {
//             tipo = 'Normal';
//         }

//         return tipo;
//     }
// }

// const persona = new Cliente('Pedro', 20000);
// console.log(persona);
// const persona2 = new Cliente('Pedro2', 400);
// console.log(persona2.tipoCliente() );

//Prototypes
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let saldo;
    if(this.saldo > 1000) {
        tipo = 'Gold';
    } else if (this.saldo > 500) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}, Tipo Cliente ${this.tipoCliente() }`;
}

//Retirar Saldo
Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
}

const cliente1 = new Cliente('Pedro', 100);

console.log(cliente1.tipoCliente() );
console.log(cliente1.nombreClienteSaldo() );

cliente1.retirarSaldo(300);
console.log(cliente1.nombreClienteSaldo() );