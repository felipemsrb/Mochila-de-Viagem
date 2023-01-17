const formulario = document.getElementById("novoItem");
const listaFinal = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) => {
  criaNovoItem(elemento);
});

//captura a informação das caixas de item e quantidade

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let nome = evento.target.elements["nome"];
  let quantidade = evento.target.elements["quantidade"];

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  const existe = itens.find((elemento) => elemento.nome === nome.value);

  //adiciona uma id ao elemento criado

  if (existe) {
    itemAtual.id = existe.id;
    atualizaElemento(itemAtual);
    //atualiza o local storage
    itens[itens.findIndex((elemento) => elemento.id === existe.id)] = itemAtual;
  } else {
    //atualiza o id ao criar um item novo depois que a lista é atualizada
    itemAtual.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;
    criaNovoItem(itemAtual);
    itens.push(itemAtual);
  }

  localStorage.setItem("itens", JSON.stringify(itens));
  nome.value = "";
  quantidade.value = "";
});

//adiciona um novo item na lista//

function criaNovoItem(item) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.dataset.id = item.id;
  numeroItem.innerHTML = item.quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += item.nome;

  novoItem.appendChild(botaoDeleta(item.id));

  listaFinal.appendChild(novoItem);
}

//atualiza a quantidade de itens na lista

function atualizaElemento(item) {
  document.querySelector("[data-id='" + item.id + "']").innerHTML =
    item.quantidade;
}

function botaoDeleta(id) {
  const itemBotao = document.createElement("button");
  itemBotao.innerHTML = "DELETA";
  itemBotao.addEventListener("click", function () {
    deletaItem(this.parentNode, id);
  });
  return itemBotao;
}

function deletaItem(tag, id) {
  tag.remove();
  itens.splice(itens.findIndex((elemento) => elemento.id === id));
  localStorage.setItem("itens", JSON.stringify(itens));
}
