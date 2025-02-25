function scrollToProducts() {
 document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
}

function adicionarAoCarrinho(produto, preco) {
 alert(`Você adicionou ${produto} ao carrinho por R$ ${preco.toFixed(2)}`);
}
