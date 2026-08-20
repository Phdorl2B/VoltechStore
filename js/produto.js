
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const produto = produtos.find(produto => produto.id === id);

console.log(produto);

    if (produto) {
      document.getElementById("titulo").textContent = produto.titulo;
      document.getElementById("descricao").textContent = produto.descricao;
      document.getElementById("preco").textContent = produto.preco;
      document.getElementById("especificacoes").textContent = produto.especificacoes
      document.getElementById("imagem").src = produto.imagem;
    } else {
      document.getElementById("titulo").textContent = "Produto não encontrado";
    }
     const categoriasBtn = document.getElementById("categoriasBtn");
const categoriasMenu = document.getElementById("categoriasMenu");

categoriasBtn.addEventListener("click", function (event) {

    event.stopPropagation();

    categoriasMenu.classList.toggle("hidden");

});

document.addEventListener("click", function (event) {

    if (
        !categoriasBtn.contains(event.target) &&
        !categoriasMenu.contains(event.target)
    ) {
        categoriasMenu.classList.add("hidden");
    }

});