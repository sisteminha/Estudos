// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const n1 = 7;
const n2 = 7;
const n3 = 7;
const media = (n1+n2+n3) / 3;

if(media < 5){
    console.log("Reprovado");
}
else if(media >= 5 && media < 7){
    console.log("Recuperação");
}
else if(media >= 7){ 
    console.log("Aprovado");
}