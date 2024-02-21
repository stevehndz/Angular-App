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

// Read Only Properties
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 121, y: 64 };
// p1.x = 45;

interface Search {
    (value: string, search: string): boolean;   
}

const mySearch: Search = (v: string, b: string): boolean => {
    const result = v.search(b);
    return result > -1;
}

console.log(mySearch('hola', 'ola'));

// Interface inside class
interface Human {
    name: string;
    age: number;
}

class Adult implements Human {
    name: string;
    age: number;
    car: boolean;

    constructor(pName: string, pAge: number, pCar: boolean) {
        this.car = pCar;
        this.name = pName;
        this.age = pAge;
    }
}

class Child implements Human {
    name: string;
    age: number;
    school: boolean;
}