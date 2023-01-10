const formulario = document.getElementById("novoItem");
const listaFinal = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) => {
  console.log(elemento.nome, elemento.quantidade);
});

//captura a informação das caixas de item e quantidade

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let nome = evento.target.elements["nome"];
  let quantidade = evento.target.elements["quantidade"];

  criaNovoItem(nome.value, quantidade.value);
  nome.value = "";
  quantidade.value = "";
});

//adiciona um novo item na lista//

const criaNovoItem = (nome, quantidade) => {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  listaFinal.appendChild(novoItem);

  const itemAtual = {
    nome: nome,
    quantidade: quantidade,
  };

  itens.push(itemAtual);

  localStorage.setItem("itens", JSON.stringify(itens));
};
