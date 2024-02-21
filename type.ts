// Boolean
let isValid: boolean = true;
isValid = false;

// Number
let age: number = 12;

// String
let firstName: string = 'Steve';
let lastName: string = 'Rodas';

let fullName: string = `${firstName} ${lastName}`;

// Array
let numbers1: number[] = [12,3,4,14,5,6];
let numbers2: Array<number> = [3,1,65,2];

// Tupla
let site: [string, number] = ['Casa', 28008];

// Enum
enum Status {
    Offline, // 0
    Undefined, // 1
    Online // 2
}

/* enum Status {
    Offline = -1,
    Undefined = 0,
    Online = 1
}*/

let stat: Status = Status.Online;
console.log(stat);

// Unknown
let withoutType: unknown = 'Hola';
withoutType = 32;
withoutType = true;

let newString: string = 'Esto es una cadena';
// newString = withoutType;

// Any
let undefinedType: any = 'Esto es un mensaje';
newString = undefinedType;

// Void
function logger(): void {
    console.log('Logger');
    
}