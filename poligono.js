class Poligono {
    constructor(lados, longitudLado, apotema = null, altura = null) {
        //Restricciones: Minimi 3 lados y valores positivos
        if (lados < 3) throw new Error("Un poligono debe tener al menos 3 lados");
        if (longitudLado <= 0) throw new Error("La longitud debe ser un valor en positivo");

        this.lados = lados;
        this.longitudLado = longitudLado;
        this.apotema = apotema;
        this.altura = altura;
    }
    //Metodo para calcular el perimetro: lados * longitud
    perimetro() {
        return this.lados * this.longitudLado;
    }
    area() {
        if (!this.apotema) {
            return "No se puede calcular el area sin la apotema";
        }
        return (this.perimetro() * this.apotema) / 2;
    }
    //Tipo de poligonos segun sus lados
    tipo() {
        const nombres = {
            3: "Triangulo",
            4: "Cuadrado",
            5: "Pentagono",
            6: "Hexagono"
        };
        return nombres[this.lados] || "Poligono con varios lados";
    }
    //Volumen de un prisma: Area de la base * altura
    volumen() {
        const areaBase = this.area();
        if(!this.area || typeof areaBase === "string"){
            return "No se puede calcular el volumen (falta altura o apotema).";
        }
        return areaBase * this.altura;
    }

    //Resumen: Devuelve un objeto con la información
    resumen(){
        return {
            nombre: this.tipo(),
            perimetro: this.perimetro(),
            area: this.area(),
            volumen: this.volumen(),
        };
    }
}

//Test

//Ejemplo 1: Cuadrado(4 lados) de 10 cm, apotema de 5cm y altura de 20cm
const miCubo = new Poligono(4,10,5,20);
console.log(miCubo.resumen());

//Ejemplo 2: Triangulo(3 lados) de 10cm pero sin apotema ni altura
const miTriangulo = new Poligono(3,10);
console.log(miTriangulo.resumen());