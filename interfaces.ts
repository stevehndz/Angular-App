interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function showPerson(pPerson: Person): void {
    console.log(pPerson);   
}

showPerson({firstName: 'Beatriz', lastName: 'Perez', age: 20});

interface Car {
    brand: string;
    model: string;
    color?: string; // Not required
}

function showCar(pCar: Car) {
    console.log(`Marca: ${pCar.brand}. Modelo: ${pCar.model}`);
    
    if(pCar.color) {
        console.log(`Color: ${pCar.color}`);
    }
    else {
        console.log('El coche no tiene color');
        
    }
}

showCar({brand: 'Mercedes', model: 'C180'});
showCar({brand: 'Mercedes', model: 'TY121', color: 'Rojo'});