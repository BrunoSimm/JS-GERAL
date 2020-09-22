/*Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) 
estejam contidos em ambas palavras. */

const verificaStrings = function(string1, string2){
    if (string1.toLowerCase().includes(string2.toLowerCase())){ //Basta remover toLowerCase() para ser case sensetive!
        return true
    }
}

const txt1 = "abcd"
const txt2 = "dcba"

if(verificaStrings(txt1,txt2) === true){
    console.log("Todos os caracteres estão presentes em ambos os textos!")
} else console.log("Textos diferentes!")


//Outra métdo.
function testinput(re, str) {
    var midstring;
    if (str.search(re) != -1) {
      midstring = ' contem ';
    } else {
      midstring = ' nao contem ';
    }
    console.log(str + midstring + re);
  }

testinput(txt1,txt2)