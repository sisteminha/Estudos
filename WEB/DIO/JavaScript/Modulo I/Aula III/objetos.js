//declaração de um objeto

const pessoa = {
    nome: 'Leonardo',
    idade: 29,
    descrever : function(){
        console.log(`Meu nome é: ${this.nome} e minha idade é: ${this.idade}`);
    }
}

const atributo = 'idade';
// console.log(pessoa[atributo]);
console.log(pessoa['nome']);

// pessoa.descrever();

// pessoa.altura = 1.90;

// // console.log(pessoa.nome);
// // console.log(pessoa.idade );
// console.log(pessoa);

// delete pessoa.idade;


// console.log(pessoa);