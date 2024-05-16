//elabore um algoritomo que calcule o que deve ser pago por um produto conforme a condição de pagamento

let valor = 100;
// condicoes = debito, dinheiro, credito
const condicaoPgt = "credito";
const parcelas = 3;

if (condicaoPgt === "dinheiro"){
    valor = valor - (valor * 0.15);
}
else if(condicaoPgt === "debito"){
    valor = valor - (valor * 0.1);
}
else if(condicaoPgt === "credito" && parcelas > 2){    
    valor = valor + (valor * 0.1);
}
else {
    valor;
}

console.log("valor a ser pago: " + valor);