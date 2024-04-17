console.log("Hello Atributs!");

const name = "Gabriel";
const subname = "Oliveira";
const age = 22;

// CONST AND VARIBLES NEED A NAME ESPECIFIC, STRONG AND DIRECT

console.log(name, subname, age);
console.log(`My name is ${name}`);

// ERROR //
// CONST NOT IS VARIABLE, IS CONSTANT!
//name = name + subname;
//console.log(name);

// VARIABLE //
// LET IS CONSTANT, IS VARIABLE AND ACCEPT A NEW ATRIBUT
let nameVar = name + subname;
console.log(nameVar);

// OR

// completeName = name + subname;
const completeName = name + subname;
console.log(completeName);
