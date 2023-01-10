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

  criaNovoItem(itemAtual);

  itens.push(itemAtual);

  localStorage.setItem("itens", JSON.stringify(itens));
  nome.value = "";
  quantidade.value = "";
});

//adiciona um novo item na lista//

const criaNovoItem = (item) => {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = item.quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += item.nome;

  listaFinal.appendChild(novoItem);
};
