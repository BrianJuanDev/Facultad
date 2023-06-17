// Crear una clase de Auto con los atributos (marca, modelo, potencia,
// max. velocidad)
//  Crear 5 autos en un array
//  Iterar el array y mostrar los autos por pantalla
//  Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda
// en forma óptima en recorrer x kms

class Auto {
    marca: string;
    modelo: number;
    potencia: number;
    maxVelocidad: number;
    
    constructor(marca: string, modelo: number, potencia: number, maxVelocidad: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.maxVelocidad = maxVelocidad;
    }

    imprimirObjeto(): void {
        console.log({
            marca: this.marca,
            modelo: this.modelo,
            potencia: this.potencia,
            maxVelocidad: this.maxVelocidad
        });
    };
    
    calcularTiempo(distancia: number): number {
        let tiempo: number = distancia / this.maxVelocidad;
        return tiempo;
    };
    
};

const autoArray : Auto[] = [
    new Auto("Renault", 2006, 150, 300),
    new Auto("Ford", 2010, 180, 320),
    new Auto("Honda", 2015, 315, 270),
    new Auto("Audi", 2018, 605, 350),
    new Auto("BMW", 2020, 600, 250)
];

// itera cada objeto de tipo Auto y los muestra por consola
for (let i=0; i < autoArray.length; i++) {
    autoArray[i].imprimirObjeto();
};


const distancia: number = 120;

// itera cada objeto de tipo Auto y calcula el tiempo que tarda el auto en recorrer x distancia de forma optima
for (let i=0; i < autoArray.length; i++) {
    let tiempoRecorrido: number = autoArray[i].calcularTiempo(distancia)
    console.log(`El auto tarda ${tiempoRecorrido} horas en recorrer ${distancia} km de forma optima.`)
};










