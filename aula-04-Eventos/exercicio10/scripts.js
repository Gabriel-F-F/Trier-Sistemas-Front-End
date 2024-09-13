const listaTarefas = [{id: 0, todo: "Ir na Padaria!", status: false, excluir: false}];
console.log(contador());

function tabela(lista) {
    const tabela = document.getElementById("tabela");
    const tr = document.createElement(`<tr> <td>${listaTarefas.id}</td> <td>${listaTarefas.todo}</td><td>${listaTarefas.status}</td><td>${listaTarefas.excluir}</td> <tr>`);

    listaTarefas.forEach(id => {
        lista = document.append()
    });
}

function adicionarTarefa() {

    let tarefa = {
        todo: todo,
        status: false
    }

    listaTarefas.push(tarefa);
}