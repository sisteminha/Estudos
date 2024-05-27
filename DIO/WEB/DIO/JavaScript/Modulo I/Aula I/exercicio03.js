// desenvolver uma solução que calcule o IMC e mostre os resultados conforme o IMC


const peso = 130;
const altura = 1.50

const IMC = peso  / Math.pow(altura, 2);

if (IMC < 18.5){
    console.log("Abaixo do peso");
}
else if(IMC > 18.5 && IMC < 25){
    console.log("Peso normal");
}
else if(IMC > 25 && IMC < 30){
    console.log("Acima do peso");
}
else if(IMC > 30 && IMC < 40){
    console.log("Obeso");
}
else if(IMC > 40){
    console.log("Muito gordo");
}