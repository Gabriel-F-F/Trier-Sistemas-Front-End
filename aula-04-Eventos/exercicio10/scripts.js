let listaTarefas = [];

function adicionarTarefa() {

    const input = document.getElementById("input-adicionar");

    if (input.value === "") {
        return alert("Deve-se digitar uma tarefa!");
    }

    let tarefa = {
        id: contador(),
        todo: input.value,
        status: false,
        excluido: false
    }
    listaTarefas.push(tarefa);
    input.value = "";
    atualizarTabela();
}

function contador() {
    let contador = 0;
    listaTarefas.forEach(tarefa => {
        contador++;
    });
    contador++;
    return contador;
}

function atualizarTabela() {

    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";

    listaTarefas.forEach(tarefa => {
        const linha = document.createElement("tr");

        const colunaId = document.createElement("td");
        colunaId.textContent = tarefa.id;
        linha.appendChild(colunaId);

        const colunaTarefa = document.createElement("td");
        colunaTarefa.textContent = tarefa.todo;
        linha.appendChild(colunaTarefa);

        const colunaStatus = document.createElement("td");
        const checkboxStatus = document.createElement("input");
        checkboxStatus.type = "checkbox";
        checkboxStatus.checked = tarefa.status;
        checkboxStatus.addEventListener("change", () => {
            tarefa.status = checkboxStatus.checked();
        });
        colunaStatus.appendChild(checkboxStatus);
        linha.appendChild(colunaStatus);

        const colunaExcluir = document.createElement("td");
        const botaoExcluir = document.createElement("button");
        botaoExcluir.typeContent = "Excluir";
        botaoExcluir.style = "height: 25px; width: 150px;"
        botaoExcluir.checked = tarefa.excluido;
        botaoExcluir.addEventListener("click", () => {
            excluirTarefa(tarefa.id);
        });
        colunaExcluir.appendChild(botaoExcluir);
        linha.appendChild(colunaExcluir);

        tabela.appendChild(linha);
    });
}

function excluirTarefa(id) {
    listaTarefas = listaTarefas.filter(tarefa => tarefa.id !== id);
    atualizarTabela();
}