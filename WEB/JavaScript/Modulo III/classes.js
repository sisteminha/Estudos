class Pessoa{
    nome;
    idade;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;

    }

    descrever (){
        console.log(`Meu nome é: ${this.nome} e minha idade é: ${this.idade}`);
    }
}


function compararPessoa (p1, p2){
    if(p1.idade === p2.idade){
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
    else if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }
    else{
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }
}   

const leonardo = new Pessoa('Leonardo', 32);
const chico = new Pessoa('Chico', 30);

compararPessoa(leonardo, chico)

// leonardo.nome = 'Leonardo';
// leonardo.idade = 29;

// const chico = new Pessoa();
// chico.nome = 'Chico';
// chico.idade = 50;

// console.log(leonardo);
// console.log(chico);

// leonardo.descrever();
// chico.descrever();

