console.log("Work with List");

const salvador = "salvador";
const saoPaulo = "São Paulo";
const rioDeJaneiro = "Rio de Janeiro";

const ageUser = 19;
const companyAdult = false;
const buyTickt = true;

const cityArray = new Array("Salvador", "São Paulo", "Rio de Janeiro");
console.log("Destinos possiveis:");
console.log(cityArray, "\n");

if (ageUser >= 18 || companyAdult == true) {
  console.log("Comprador maior de Idade ou acompanhado!");
  console.log("Destino:", cityArray[2], "\n");
} else {
  console.log("ERRO - Menor de idade ou Não acompanhado\n");
}

console.log("Area de Embarquer: \n");
if (ageUser >= 18 && buyTickt == true) {
  console.log("Tudo certo, Boa viagem!");
} else {
  console.log("Impossivel embarcar!");
}
