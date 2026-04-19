class Poligono {
    constructor(lados, longitudLado, apotema = null, altura = null) {
        if (lados < 3) throw new Error("Mínimo 3 lados.");
        if (longitudLado <= 0) throw new Error("La longitud del lado debe ser mayor que 0.");
        if (apotema !== null && apotema <= 0) throw new Error("El apotema debe ser mayor que 0.");
        if (altura !== null && altura <= 0) throw new Error("La altura debe ser mayor que 0.");

        this.lados = lados;
        this.longitudLado = longitudLado;
        this.apotema = apotema;
        this.altura = altura;
    }

    perimetro() {
        return this.lados * this.longitudLado;
    }

    area() {
        if (!this.apotema) return null;
        return (this.perimetro() * this.apotema) / 2;
    }

    tipo() {
        const nombres = {
            3: "Triángulo",
            4: "Cuadrilátero",
            5: "Pentágono",
            6: "Hexágono",
            7: "Heptágono",
            8: "Octógono",
        };
        return nombres[this.lados] ?? `Polígono de ${this.lados} lados`;
    }

    volumen() {
        const area = this.area();
        if (!area || !this.altura) return null;
        return area * this.altura;
    }

    resumen() {
        return {
            tipo: this.tipo(),
            perimetro: this.perimetro(),
            area: this.area(),
            volumen: this.volumen(),
        };
    }
}

// --- Prueba ---
const hexagono = new Poligono(6, 5, 4.33, 10);
console.log(hexagono.tipo());       // Hexágono
console.log(hexagono.perimetro());  // 30
console.log(hexagono.area());       // 64.95
console.log(hexagono.volumen());    // 649.5
console.log(hexagono.resumen());    // { tipo, perimetro, area, volumen }

const triangulo = new Poligono(3, 7);
console.log(triangulo.tipo());      // Triángulo
console.log(triangulo.area());      // null (sin apotema)