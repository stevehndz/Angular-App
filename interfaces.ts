interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function showPerson(pPerson: Person): void {
    console.log(pPerson);   
}

showPerson({firstName: 'Beatriz', lastName: 'Perez', age: 20});