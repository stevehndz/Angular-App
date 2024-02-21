function sum1(a, b) {
    return a + b;
}

const sum2: (a: number, b: number) => number = function (a: number, b: number): number {
        return a + b;
    }

const sum3 = function (a: number, b: number): number {
    return a + b;
}

const sum4: (a: number, b: number) => number = function (a,b) {
    return a + b;
}

// Optional parameters and default values
/*function getFullName(name: string, lasName?: string): string {
    if(lasName) return name + " " + lasName;
    else return name;
}*/

function getFullName(name: string, lasName: string = 'Obrador'): string {
    if(lasName) return name + " " + lasName;
    else return name;
}

console.log(getFullName('Pedro'));
console.log(getFullName('Pedro', 'Paramo'));

// REST Params
function getFullName2 (name: string, ...restName: string[]): string {
    return name + " " + restName.join(' ');
}
console.log(getFullName2('Ana', 'Maria', 'Dolores', 'Garcia'));
