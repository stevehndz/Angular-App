// Boolean
let isValid = true;
isValid = false;
// Number
let age = 12;
// String
let firstName = 'Steve';
let lastName = 'Rodas';
let fullName = `${firstName} ${lastName}`;
// Array
let numbers1 = [12, 3, 4, 14, 5, 6];
let numbers2 = [3, 1, 65, 2];
// Tupla
let site = ['Casa', 28008];
// Enum
var Status;
(function (Status) {
    Status[Status["Offline"] = 0] = "Offline";
    Status[Status["Undefined"] = 1] = "Undefined";
    Status[Status["Online"] = 2] = "Online"; // 2
})(Status || (Status = {}));
/* enum Status {
    Offline = -1,
    Undefined = 0,
    Online = 1
}*/
let stat = Status.Online;
console.log(stat);
// Unknown
let withoutType = 'Hola';
withoutType = 32;
withoutType = true;
let newString = 'Esto es una cadena';
// newString = withoutType;
// Any
let undefinedType = 'Esto es un mensaje';
newString = undefinedType;
// Void
function logger() {
    console.log('Logger');
}
