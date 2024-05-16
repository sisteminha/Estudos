class Carro{
    marca;
    cor;
    kmPorLitro;

    constructor(marca, cor, kmPorLitro ){
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    calcularCustoMedio(valorCombustivel){
        return valorCombustivel / this.kmPorLitro;
    }

    calcularValorGasto(distancia, valorCombustivel){
        return distancia * this.calcularCustoMedio(valorCombustivel);    
    }
}

const astra = new Carro('Chevrolet', 'preto', 11.5);

console.log(`O gasto médio foi de ${astra.calcularValorGasto(100, 5.79)} R$`);