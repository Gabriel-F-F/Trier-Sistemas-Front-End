//Exercício 09
const quantidadeAlunos = prompt("Quantos alunos tem na sala?");

const listaAlunos = [];

// Funções
var mediaAluno = (notaTotal, quantidadeNotas) => {
    return notaTotal / quantidadeNotas;
}

var validaNota = (mediaAluno) => {
    return mediaAluno >= 7 ? true : false;
}

function somaNotas(quantidadeNotas) {
    let notaTotal = 0;
    for (let index = 0; index < quantidadeNotas; index++) {
        notaTotal += Number(prompt(`Digite a Nota ${index + 1}`));
    }
    return mediaAluno(notaTotal, quantidadeNotas);
}

for (let index = 0; index < quantidadeAlunos; index++) {

    let quantidadeNotas = Number(prompt(`Quantidade de notas do aluno ${index + 1}: `));

    let aluno = {
        id: index,
        nome: prompt("Nome do Aluno: "), 
        mediaAluno: somaNotas(quantidadeNotas),
        aprovacao: validaNota(mediaAluno)
    }

    listaAlunos.push(aluno);
    console.log(listaAlunos);
    console.log(`APROVADOS: \n ${listaAlunos.filter(aprovacao => aprovacao = true).map(aluno => `Nome: ${aluno.nome}\nMédia: ${aluno.mediaAluno}`)}`);
    console.log(`REPROVADOS: \n ${listaAlunos.filter(aprovacao => aprovacao = false).map(aluno => `Nome: ${aluno.nome}\nMédia: ${aluno.mediaAluno}`)}`);
}