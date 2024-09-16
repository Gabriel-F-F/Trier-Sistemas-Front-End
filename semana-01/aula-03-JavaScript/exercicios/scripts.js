//Exercício 09
const quantidadeAlunos = prompt("Quantos alunos tem na sala?");

const listaAlunos = [];

// Funções
function somaNotas(quantidadeNotas) {
    let notaTotal = 0;
    for (let index = 0; index < quantidadeNotas; index++) {
        notaTotal += Number(prompt(`Nota ${index + 1}: `));
    }
    return notaTotal / quantidadeNotas;
}

for (let index = 0; index < quantidadeAlunos; index++) {

    let nomeAluno = prompt(`Nome do Aluno ${index + 1}: `)
    let quantidadeNotas = Number(prompt(`Quantidade de notas do aluno ${index + 1}: `));
    let mediaCalculada = somaNotas(quantidadeNotas); 

    let aluno = {
        id: index,
        nome: nomeAluno, 
        mediaAluno: mediaCalculada,
        aprovacao: mediaCalculada >= 7 ? true : false
    }

    listaAlunos.push(aluno);  
}
const listaAprovados = listaAlunos.filter(aluno => aluno.aprovacao);
const listaReprovados = listaAlunos.filter(aluno => !aluno.aprovacao);

console.log(listaAlunos);
console.log(listaAprovados);
console.log(listaReprovados);