//como declarar variáveis no Js

// let nomeVar = 10;

//o valor será imutavel
// const nome = "Leo";


const preco = 5.8;
const kmPorLitro = 12;
const distancia = 690;

const consumoMedio = distancia / kmPorLitro;
const valorGasto = consumoMedio * preco;

console.log(valorGasto.toFixed(2));