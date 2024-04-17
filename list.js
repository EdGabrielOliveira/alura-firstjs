console.log("Work with List");

const salvador = "salvador";
const saoPaulo = "São Paulo";
const rioDeJaneiro = "Rio de Janeiro";

// ARRAY LIST
const cityArray = new Array("Salvador", "São Paulo", "Rio de Janeiro");
console.log(cityArray);
// ['Salvador', 'São Paulo', 'Rio de Janeiro']

// THE PUSH ADD A NEW ELEMENT IN ARRAY LIST
cityArray.push("Natal");
console.log(cityArray);
// ['Salvador', 'São Paulo', 'Rio de Janeiro', 'Natal']

// PULL A SPECIFIC ELEMENT IN ARRAY
console.log(cityArray[2]);

// THE SPLICE REMOVE ELEMENT FROM ARRAY WITH A INDEX OF START AND END
const removeCity = cityArray.splice(1, 1);
console.log("Remove:", removeCity);
// Remove: ["São Paulo"];
// ['Salvador', 'Rio de Janeiro', 'Natal']
