// Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos

// Si le asignamos más de 500000 disparamos una alarma
// Si intentamos sacar más de lo que disponemos disparamos otra alarma
// Si intentamos sacar más de 100000 disparamos otra alarma

class CuentaBancaria {
    numDeCuenta: number;
    monto: number;  

    constructor(numDeCuenta: number, monto: number) {
        this.numDeCuenta = numDeCuenta;
        this.monto =  monto;
    }

    asignarFondos(fondo: number): void{
        if (fondo >= 500000)
            console.warn('Alertaa! El monto es mayor a 500000');

        this.monto += fondo;
        return console.info('El fondo ha sido depositado efectivamente');
    }

    sacarFondos(fondo: number): void{
        if (fondo > this.monto)
            console.warn('Alertaaa!! Monto de extraccion muy elevado');
            
        if (fondo > 100000)
            console.warn('Alertaaa!! Monto de extraccion muy elevado');

        this.monto -= fondo;
        console.info('El fondo ha sido extraido efectivamente');
        
    }
}

