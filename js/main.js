const formulario = document.getElementById("novoItem");
const listaFinal = document.getElementById("lista");

//captura a informação das caixas de item e quantidade

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let caixaNome = evento.target.elements["nome"];
  let caixaQuantidade = evento.target.elements["quantidade"];

  criaNovoItem(caixaNome.value, caixaQuantidade.value);
  caixaNome.value = "";
  caixaQuantidade.value = "";
  console.log(caixaNome);
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
};
