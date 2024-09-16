// Operadores Lógicos
console.log("Operadores Lógicos");

let a = true;
let b = false;
let c = "true";

console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(!b);

console.log(a == b);
console.log(a === b);
console.log(a == c);
console.log(a === c);

// Operadores Unários
console.log("Operadores Unários");

let numero = 10;
let negativo = -numero;
console.log(negativo);

let verdadeiro = true;
console.log(!verdadeiro);


let contador = 0;
contador++;
console.log(contador);

contador--;
console.log(contador);


let texto = "texto";
let numero2 = 12;
let falso = false;

console.log(typeof texto);
console.log(typeof numero2);
console.log(typeof falso);

// Operadores Ternários
console.log("Operadores Ternários");

const idade = 17;
let podeDirigir = idade >= 18 ? "pode" : "não pode";
console.log(`Ele ${podeDirigir} dirigir!`);