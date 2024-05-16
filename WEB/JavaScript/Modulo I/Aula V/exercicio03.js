// Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 

//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a	R$ 2500.00 = 10.00%
//     Maior que 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('./funcoesAuxiliares_ex03');

const valorSalarioBruto = gets();
const valorBeneficio = gets();

function calcularImposto(salario, aliquota) {
    return salario - (salario * (aliquota / 100));
}


function definirAliquota(salario) {
    if (valorSalarioBruto > 0 && valorSalarioBruto <= 1100) {
        return 5;
    }
    else if (valorSalarioBruto > 1100.1 && valorSalarioBruto <= 2500) {
        return 10;
    }
    else {
        return 15;
    }
}

function main() {

    const aliquota = definirAliquota(valorSalarioBruto);
    const salarioLiquido = calcularImposto(valorSalarioBruto, aliquota);

    print(`O salario liquido é de ${salarioLiquido.toFixed(2)} e com os beneficios o total é de ${(salarioLiquido + valorBeneficio).toFixed(2)}`)
}

main();