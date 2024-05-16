// gets, prints e importação de arquivos
const entradas = [5,3,4,201,10,8];
let i = 0;


function gets(){
    const valor = entradas[i];
    i++;
    return valor;
   }
   
   function print(texto){
       console.log(texto);
   }
   

   module.exports = {gets, print};