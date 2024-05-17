//elabore um algoritomo que calcule o que deve ser pago por um produto conforme a condição de pagamento

let valor = 100;
// condicoes = debito, dinheiro, credito
const condicaoPgt = "credito";
const parcelas = 3;

function aplicarJuros(valor, juros){
    return  valor + (valor * 0.1);
}

function aplicarDesconto(valor, desconto){
    return  valor = valor - (valor * (desconto/100));
}

function main(){
    if(condicaoPgt === "credito"){
        if(parcelas > 2){
            valor = aplicarJuros(valor, 10);
        }
        else{
            valor;
        }
    }
    else{
        if (condicaoPgt === "dinheiro"){
            valor = aplicarDesconto(valor, 15);        
        }
        else if(condicaoPgt === "debito"){
            valor = aplicarDesconto(valor, 10);
        }
    }
    console.log("valor a ser pago: " + valor);
}


main();
