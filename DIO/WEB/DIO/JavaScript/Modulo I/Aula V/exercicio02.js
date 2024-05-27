const { gets, print } = require('./funcoesAuxiliares_ex02');


let menorNumeroImpar = null;
let maiorNumeroPar = null;
const n = gets();

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0){
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;    
        }
        
    }
    else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    } 
}
print(menorNumeroImpar);
print(maiorNumeroPar);

// print(gets());
// print(gets());
// print(gets());