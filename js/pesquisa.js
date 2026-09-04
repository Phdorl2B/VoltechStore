const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("input", function () {

    const texto = pesquisa.value.toLowerCase();

    const produtosFiltrados = produtos.filter(function (produto) {

        return (
            produto.titulo.toLowerCase().includes(texto) ||
            produto.descricao.toLowerCase().includes(texto) ||
            produto.categoria.toLowerCase().includes(texto)
        );

    });

    console.log(produtosFiltrados);

    mostrarProdutos(produtosFiltrados);

});