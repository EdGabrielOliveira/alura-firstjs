console.log("Work with LOOP");

const salvador = "salvador";
const saoPaulo = "São Paulo";
const rioDeJaneiro = "Rio de Janeiro";
const natal = "Natal";

const ageUser = 19;
const companyAdult = false;
const destiny = "Natal";
let buyTickt = false;

const cityArray = new Array("Salvador", "São Paulo", "Rio de Janeiro", "Natal");
console.log("Destinos possiveis:");
console.log(cityArray, "\n");

const acceptBuy = ageUser >= 18 || companyAdult == true;

let couting = 0;
let destinyTrue = false;

while (couting < 4) {
  if (cityArray[couting] == destiny) {
    destinyTrue = true;
    break;
  }
  couting += 1;
}

/*
for (let cout = 0; cout < 4; cout++) {
  if (cityArray[couting] == destiny) {
    destinyTrue = true;
    break;
  }
}
*/

console.log("Destino existente:", destinyTrue);

if (acceptBuy && destinyTrue) {
  console.log("Boa viagem!");
} else {
  console.log("Desculpe, tivemos um erro");
}
