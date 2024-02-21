function sum1(a, b) {
    return a + b;
}
const sum2 = function (a, b) {
    return a + b;
};
const sum3 = function (a, b) {
    return a + b;
};
const sum4 = function (a, b) {
    return a + b;
};
// Optional parameters and default values
/*function getFullName(name: string, lasName?: string): string {
    if(lasName) return name + " " + lasName;
    else return name;
}*/
function getFullName(name, lasName = "Obrador") {
    if (lasName)
        return name + " " + lasName;
    else
        return name;
}
console.log(getFullName("Pedro"));
console.log(getFullName("Pedro", "Paramo"));
// REST Params
function getFullName2(name, ...restName) {
    return name + " " + restName.join(" ");
}
console.log(getFullName2("Ana", "Maria", "Dolores", "Garcia"));
