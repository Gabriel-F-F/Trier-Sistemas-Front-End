const listaTarefas = [{ todo: "Ir na Padaria", checked: false },
                    { todo: "Passear com a Girafa", checked: false },
                    { todo: "Voar de Helicóptero", checked: false }];
console.log(contador());

function tabela(lista) {
    const tabela = document.getElementById("tabela");
    const thead = tabela.querySelector("thead tr")

    listaTarefas.forEach(id => {
        lista = document.createElement("")
    });
}

function adicionarTarefa() {

    let tarefa = {
        todo: todo,
        checked: false
    }

    listaTarefas.push(tarefa);
}