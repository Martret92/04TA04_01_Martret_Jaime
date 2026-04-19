class TarjetaCredito {
    constructor(titular, limite) {
        this.titular = titular;
        this.saldo = 0;
        this.limite = limite;
        this.activa = false;
    }

    activar() {
        this.activa = true;
    }

    desactivar() {
        this.activa = false;
    }

    comprar(cantidad) {
        if (!this.activa) return "Tarjeta desactivada.";
        if (this.saldo + cantidad > this.limite) return "Límite superado.";
        this.saldo += cantidad;
        return this.saldo;
    }

    pagar(cantidad) {
        this.saldo = Math.max(0, this.saldo - cantidad);
        return this.saldo;
    }

    disponible() {
        return this.limite - this.saldo;
    }

    estado() {
        return {
            titular: this.titular,
            saldo: this.saldo,
            disponible: this.disponible(),
            activa: this.activa,
        };
    }
}

// --- Prueba ---
const tarjeta = new TarjetaCredito("Jaime Martinez", 1000);
console.log(tarjeta.comprar(200)); // "Tarjeta desactivada."
tarjeta.activar();
console.log(tarjeta.comprar(200)); // 200
console.log(tarjeta.comprar(900)); // "Límite superado."
console.log(tarjeta.disponible()); // 800
console.log(tarjeta.pagar(100));   // 100
console.log(tarjeta.estado());     // { titular: ..., saldo: 100, disponible: 900, activa: true }
