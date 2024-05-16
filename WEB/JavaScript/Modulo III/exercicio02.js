//crie uma classe para representar pessoa com os atributos nome, peso, altura
class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return (this.peso  / Math.pow(this.altura, 2)).toFixed(2);
    }   

    classificarIMC(){
        const IMC =  this.calcularIMC();

        if (IMC < 18.5){
            return "Abaixo do peso";
        }
        else if(IMC > 18.5 && IMC < 25){
            return "Peso normal";
        }
        else if(IMC > 25 && IMC < 30){
            return "Acima do peso";
        }
        else if(IMC > 30 && IMC < 40){
            return "Obeso";
        }
        else if(IMC > 40){
            return "Muito gordo";
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);

console.log(`O IMC é de: ${jose.calcularIMC()} e está ${jose.classificarIMC()}`);