const botaoDeFotoGato = document.querySelector("#botao-de-foto-gato");
const botaoDeFotoCachorro = document.querySelector("#botao-de-foto-cachorro");
const imagemDeGato = document.querySelector("#imagem-de-gato");
const imagemDeCachorro = document.querySelector("#imagem-de-cachorro");

botaoDeFotoCachorro.addEventListener("click", mostrarFotoCachorro);
botaoDeFotoGato.addEventListener("click", mostrarFotoGato);

async function mostrarFotoCachorro() {
 const dadosCachorro = await fetch("https://random.dog/woof.json");
 const dadosCachorroJson = await dadosCachorro.json();
 imagemDeCachorro.classList.remove("opacity-0");
 imagemDeCachorro.classList.add("opacity-100");
 imagemDeCachorro.setAttribute("src", dadosCachorroJson.url);
}

async function mostrarFotoGato() {
 const dadosGato = await fetch("https://api.thecatapi.com/v1/images/search");
 const dadosGatoJson = await dadosGato.json();
 imagemDeGato.classList.remove("opacity-0");
 imagemDeGato.classList.add("opacity-100");
 imagemDeGato.setAttribute("src", dadosGatoJson[0].url);
}

imagemDeCachorro.addEventListener("error", () => {
 imagemDeCachorro.setAttribute("src", "./cachorro.jpg");
});

imagemDeGato.addEventListener("error", () => {
 imagemDeGato.setAttribute("src", "./gato.jpg");
});
