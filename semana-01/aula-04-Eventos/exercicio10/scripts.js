let listaTarefas = [];

function adicionarTarefa() {

    const input = document.getElementById("input-adicionar");

    if (input.value === "") {
        return alert("Deve-se digitar uma tarefa!");
    }

    let contador = listaTarefas.length + 1;

    let tarefa = {
        id: contador,
        todo: input.value,
        status: false,
        excluido: false
    }
    listaTarefas.push(tarefa);
    input.value = "";
    atualizarTabela();
    contagem();
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
            tarefa.status = true;
            contagem();
        });
        colunaStatus.appendChild(checkboxStatus);
        linha.appendChild(colunaStatus);

        const colunaExcluir = document.createElement("td");
        const botaoExcluir = document.createElement("button");
        botaoExcluir.typeContent = "Excluir";
        botaoExcluir.style = "height: 30px; width: 150px;"
        botaoExcluir.addEventListener("click", () => {
            excluirTarefa(tarefa.id);
        });
        colunaExcluir.appendChild(botaoExcluir);
        linha.appendChild(colunaExcluir);

        tabela.appendChild(linha);
    });
}

function retirarConcluidas() {
    listaTarefas = listaTarefas.filter(tarefa => tarefa.status !== true);
    atualizarTabela();
    contagem();
}

function excluirTarefa(id) {
    listaTarefas = listaTarefas.filter(tarefa => tarefa.id !== id);
    atualizarTabela();
    contagem();
}

function contagem() {
    let contadorPendentes = 0;
    let contagemConcluidas = 0;
    listaTarefas.forEach(tarefa => {
        if(tarefa.status !== true)
            contadorPendentes++;
    });

    contagemConcluidas = listaTarefas.length - contadorPendentes;
    
    document.getElementById("contador-pendentes").textContent = contadorPendentes;
    document.getElementById("contador-concluidas").textContent = contagemConcluidas;
}