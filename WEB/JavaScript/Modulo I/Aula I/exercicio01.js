/* Faça um programa para calcular o valor de uma viagem

você terá 5 variáveis, sendo elas:
1-  preço do etanol
2-  preço da gasolina
3-  o tipo do combustivel abastecido;
4-  gasto médio do combustível por KM;
5-  distancia em KM da viagem;
*/

const tipoCombustivel = "alcool";
const precoAlcool = 3.50;
const precoGasolina = 5.8;

const kmPorLitro = 11.5;
const distanciaPercorrida = 100;

const consumoMedio = distanciaPercorrida / kmPorLitro;
let valorGasto = 0;

if (tipoCombustivel === "alcool"){
    valorGasto = consumoMedio * precoAlcool;
}
else{
    valorGasto = consumoMedio * precoGasolina;
}

console.log(valorGasto.toFixed(2));