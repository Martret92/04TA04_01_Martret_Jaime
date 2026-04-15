class Coche {
    constructor(marca, modelo) {
        //Propiedades basicas
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
        this.encendido = false;
    }

    //Encender coche
    encender() {
        this.encendido = true;
        console.log("Coche encendido");
    }

    //Apagar y reset velocidad
    apagar() {
        this.encendido = false;
        this.velocidad = 0;
        console.log("Coche apagado y detenido");
    }

    //Aumentar velocidad
    acelerar(cantidad) {
        if (this.encendido) {
            this.velocidad += cantidad;
            console.log(`Acelerando y su velocidad es: ${this.velocidad} km/h`);  
        }
        else {
            console.log("No puedes acelerar porque el coche esta apagado");
        }
    }

    //Frenar sin llegar a 0

    frenar(cantidad) {
        this.velocidad -= cantidad;
        if (this.velocidad < 0) {
            this.velocidad = 0;
        }
        console.log(`Frenando y su velocidad es: ${this.velocidad} km/h`);
    }

    //Devolver el string con la informacion
    estado() {
        const motor = this.encendido ? "Encendido" : "Apagado";
        return `Vehiculo: ${this.marca} ${this.modelo} | Velocidad: ${this.velocidad} km/h | Estado: ${motor}`;
    }
}

//Prueba de funcionamiento en consola
const miCoche = new Coche("Seat", "Ibiza");

console.log(miCoche.estado());
miCoche.encender();
console.log(miCoche.estado());
miCoche.acelerar(25);
console.log(miCoche.estado());
miCoche.frenar(10);
console.log(miCoche.estado());
miCoche.apagar();
console.log(miCoche.estado());