const formulario = document.getElementById("novoItem");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  criaNovoItem(
    evento.target.elements["nome"].value,
    evento.target.elements["quantidade"].value
  );
});

//adiciona um novo item na lista//

const criaNovoItem = (nome, quantidade) => {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  const listaFinal = document.getElementById("lista");
  listaFinal.appendChild(novoItem);
};
