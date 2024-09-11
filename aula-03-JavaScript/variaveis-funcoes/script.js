// Introdução JavaScript

console.log("hello world")

var soma = 1 + 2;

console.log(soma)
console.warn(soma)
console.error(soma)

// Exercício 06
console.log("Exercício 6")
const a = 40;
const b = 5;
const c = 2;
var exercicio6 = (a + b) / c;
console.log(exercicio6.toFixed(2));

// Exercício 07
console.log("Exercício 7")
const nome1 = "Aula";
const nome2 = "Frontend";
console.log(`${nome1} de ${nome2}`);
console.log(nome1.substring(0, 2));

//Functions & Arrow Functions
console.log("Introdução de Functions")
function printString(texto) {
    console.log(texto);
}
var fPrintTexto = () => {
    return "Por Arrow Function!"
}
printString("Por função!")
console.log(fPrintTexto());

//Exercício 06
console.log("Exercício 6 com Função")
var somaEDivisão = () => {
    return (a + b) / c;
}
function funcaoExercicio6() {
    const a = 40;
    const b = 5;
    const c = 2;
   return somaEDivisão(a, b, c).toFixed(2);
}
console.log(funcaoExercicio6());

//Exercício 07
console.log("Exercício 7 com Função")
var concatString = () => {
    return (`${string1} de ${string2}`);
}
var getDigitos = () => {
    return string1.substring(0, 2);
}
function funcaoExercicio7() {
    const string1 = "Aula";
    const string2 = "Frontend";
    return concatString(string1, string2), getDigitos(string1);
}
console.log(funcaoExercicio7());

//Operadores