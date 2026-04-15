class estudiante {
    constructor(nombre, asistencia) {
        //Validar la asistencia al crear el objeto
        if (asistencia < 0 || asistencia > 100) {
            console.error("La asistencia debe estar entre o y 100");
            this.asistencia = 0;
        }
        else {
            this.asistencia = asistencia;
        }

        this.nombre = nombre;
        this.notas = [];
    }
    //Metodo para añadir una nota con validacion
    agregarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
            console.log(`Nota ${nota} añadido a ${this.nombre}.`);
        }
        else {
            console.warn("La nota debe estar entre 0 y 10");
        }
    }

    //Calcular el promedio
    promedio() {
        if (this.notas.length === 0) return 0;

        //Sumar todas las notas del Array
        const suma = this.notas.reduce((total, nota) => total + nota, 0);
        return suma / this.notas.length;
    }

    //Logica de aprobado(Doble condicion)
    aprobo() {
        const notaMedia = this.promedio();
        //Cumplir las ambas condiciones
        return notaMedia >= 5 && this.asistencia >= 75;
    }

    //Buscar el valor mas alto del Array
    mejorNota() {
        if (this.notas.length === 0) return 0;
        return Math.max(...this.notas);
    }
    resumen() {
        return {
            estudiante: this.nombre,
            totalNotas: this.notas.length,
            promedio: this.promedio().toFixed(2), //Limitado a 2 decimales
            asistencia: this.asistencia,
            resultado: this.aprobo() ? "Aprobado" : "Suspendido",
            notaMaxima: this.mejorNota()
        };
    }
}

//Test

const alumno1 = new estudiante("Paco", 100);
alumno1.agregarNota(4);
alumno1.agregarNota(8);
alumno1.agregarNota(10);

console.log(alumno1.resumen());

const alumno2 = new estudiante("Jaime", 70); //Asistencia Justa
alumno2.agregarNota(10);
console.log(alumno2.resumen()); //Debe salir suspendido por falta de asistencia
