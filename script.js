function adicionarTarefa() {
  let valordoinput = document.querySelector("input").value;

  // impede adicionar tarefas vazias
  if (valordoinput.trim() === "") return;

  let li = document.createElement("li");
  li.innerHTML = `
    ${valordoinput}
    <div>
      <button class="conclui" onclick="concluirTarefa(this)">concluir</button>
      <button class="deleta" onclick="deletartarefa(this)">deletar</button>
    </div>
  `;

  document.querySelector("ul").appendChild(li);

  document.querySelector("input").value = ""; // limpa o campo
}

function deletartarefa(botao) {
  botao.parentElement.parentElement.remove(); // remove o li inteiro
}

function concluirTarefa(botao) {
  const li = botao.parentElement.parentElement;
  li.classList.toggle("concluida"); // alterna a classe
}
