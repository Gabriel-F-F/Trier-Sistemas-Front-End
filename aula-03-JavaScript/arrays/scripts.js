// Arrays
console.log("Arrays");

const lista = [1, 2, 3, 4, 5];

console.log(lista);

// Adiciona 6 como ultimo elemento da lista
lista.push(6) 
console.log(lista);

// Adiciona o 0 como primeiro elemento da lista
lista.unshift(0);
console.log(lista);

// Remove o ultimo elemento da lista
lista.pop();
console.log(lista);

// Remove o primeiro elemento da lista
lista.shift();
console.log(lista);

const obj = {id: 4};
const lista2 = [{id: 1}, {id: 2}, {id: 3}, obj];
console.log(lista2.find(item => item.id = 2)); //find
console.log(lista2.findIndex(item => item.id == 3)); //findIndex
console.log(lista2.indexOf(obj)); //indexOf
console.log(lista2.some(item => item.id == 10)); //some
console.log(lista2.every(item => item.id == 1)); //every
console.log(lista2.includes(obj)); // includes

const lista3 = [{id: 1, ativo: true}, {id: 2, ativo: true}, {id: 3, ativo: true}, {id: 4, ativo: false}];
console.log(lista3.filter(item => item.ativo == true)); // filter

for (let index = 0; index < 10; index++) {  // for
}

for (const item of lista3) {    //for
//    console.log(item);
}

for (const index of lista3) {   //for
//    console.log(index, lista3[index]);
}

lista3.forEach(item => {  //forEach
//    console.log(item);
});

let count = 0;
while (count < 10) {
    count++;
    console.log(count);
}

// Inputs
console.log("Inputs");

//const meuInput = prompt("Este é meu input");
//console.log(meuInput);

// Objects
console.log("Objects");

let pessoa = {
    id: 1,
    nome: "Gabriel",
    idade: 19,
    saudacoes: () => {
        console.log(`Olá, meu nome é ${pessoa.nome}!`);
    }
}
console.log(pessoa);
pessoa.saudacoes();

let carro = new Object();
carro.placa = "placa1";
carro.marca = "marca1";
console.log(carro);