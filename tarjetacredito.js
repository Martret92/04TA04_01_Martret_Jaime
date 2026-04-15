class tarjeta {
    constructor(titular, limite){
        this.titular = titular;
        this.saldo = 0; //Deuda actual
        this.limite = limite;
        this.activa = false;
    }

    activar(){
        this.activa = true;
        console.log ("Tarjeta activada");
    }
    desactivar(){
        this.activa = false;
        console.log("Tarjeta desactivada");
    }
    comprar(cantidad){
        //Validar si esa activo
        if(!this.activa){
            console.warn("Operacion rechazada: La tarjeta no esta activa")
            return;
        }

        //Validar si supera el limite
        if(this.saldo + cantidad > this.limite){
            console.log("Operacion rechazada: Limite de credito superado");
            return;
        }
        //Si validacion es ok entonce sumamos saldo
        this.saldo += cantidad;
        console.log(`Compra realizada por: ${cantidad} euros. Nuevo saldo: ${this.saldo} euros`);
    }
    pagar(cantidad){
        //Reducir deuda
        this.saldo -= cantidad;

        //Restricciones para que saldo no pueda ser negativo
        if (this.saldo < 0){
            this.saldo = 0;
        }
        console.log(`Pago realizado. Deuda actual: ${this.saldo} euros`);
    }
    disponible(){
        //Credito restante
        return this.limite - this.saldo;
    }
    estado(){
        const situacion = this.activa ? "Activa" : "Inactiva";
        return `Resumen Tarjeta: Titular: ${this.titular} | Estado: ${situacion} | Saldo: ${this.saldo} euros. | Limite: ${this.limite} euros. | Credito disponible: ${this.disponible()} euros.`;
    }
}

//Test

const miTarjeta = new tarjeta("Jaime", 500);

console.log(miTarjeta.estado());
miTarjeta.activar();
miTarjeta.comprar(50);
miTarjeta.comprar(451);
miTarjeta.pagar(25);
console.log(miTarjeta.estado());