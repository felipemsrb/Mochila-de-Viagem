const formulario = document.getElementById("novoItem");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  criaNovoItem(
    evento.target.elements["nome"].value,
    evento.target.elements["quantidade"].value
  );
});

const criaNovoItem = (nome, quantidade) => {
  console.log(nome);
  console.log(quantidade);
};

console.log(criaNovoItem);
