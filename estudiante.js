class Estudiante {
    constructor(nombre, asistencia) {
        if (asistencia < 0 || asistencia > 100)
            throw new Error("La asistencia debe estar entre 0 y 100.");

        this.nombre = nombre;
        this.notas = [];
        this.asistencia = asistencia;
    }

    agregarNota(nota) {
        if (nota <   0 || nota > 10) return "La nota debe estar entre 0 y 10.";
        this.notas.push(nota);
        return this.notas;
    }

    promedio() {
        if (!this.notas.length) return 0;
        const suma = this.notas.reduce((acc, n) => acc + n, 0);
        return parseFloat((suma / this.notas.length).toFixed(2));
    }

    aprobo() {
        return this.promedio() >= 5 && this.asistencia >= 75;
    }

    mejorNota() {
        if (!this.notas.length) return null;
        return Math.max(...this.notas);
    }

    resumen() {
        return {
            nombre: this.nombre,
            notas: this.notas,
            promedio: this.promedio(),
            asistencia: this.asistencia + "%",
            aprobo: this.aprobo(),
            mejorNota: this.mejorNota(),
        };
    }
}

// --- Prueba ---
const estudiante = new Estudiante("Albert Einstein", 95);
console.log(estudiante.agregarNota(7));   // [7]
console.log(estudiante.agregarNota(5));   // [7, 5]
console.log(estudiante.agregarNota(9));   // [7, 5, 9]
console.log(estudiante.agregarNota(11));  // "La nota debe estar entre 0 y 10."
console.log(estudiante.promedio());       // 7
console.log(estudiante.mejorNota());      // 9
console.log(estudiante.aprobo());         // true
console.log(estudiante.resumen());        // { nombre, notas, promedio, asistencia, aprobo, mejorNota }