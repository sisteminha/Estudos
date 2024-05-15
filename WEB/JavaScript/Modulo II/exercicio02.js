function obterNome(nome){
    return nome;
}

function verificarIdade(idade){
    if(idade < 18){
        return 'Menor de idade';
    }    
    else{
        return 'Maior de idade';
    }
}

function main(){
console.log(obterNome('Leonardo')+ ' é ' + verificarIdade(29));
}

main();