// Object Literal

const cliente = {
    nombre  : 'Juan',
    saldo   : 200,
    tipoCliente : function() {
        let tipo;
        
        if (this.saldo > 1000) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    }
}

console.log(cliente.tipoCliente() );