const produtos = {
rose: {
nome: "BLUSH ROSÉ",
preco: "R$ 40,00",
imagem: "./img/rose.jpg",
descricao: "Blush em tom rosado suave, ideal para deixar as bochechas com aparência saudável e delicada.",
tom: "TOM ROSA CLARO",
acabamento: "ACABAMENTO NATURAL",
indicacao: "IDEAL PARA O DIA A DIA"
},

pessego: {
nome: "BLUSH PÊSSEGO",
preco: "R$ 30,00",
imagem: "./img/pessego.jpg",
descricao: "Blush em tom pêssego, perfeito para proporcionar uma aparência saudável e iluminada.",
tom: "TOM PÊSSEGO",
acabamento: "ACABAMENTO NATURAL",
indicacao: "IDEAL PARA UMA MAKE LEVE"
},

berry: {
nome: "BLUSH BERRY",
preco: "R$ 25,00",
imagem: "./img/Berryy.jpg",
descricao: "Blush em tom berry, ideal para uma maquiagem com um toque de cor mais intenso.",
tom: "TOM BERRY",
acabamento: "ACABAMENTO MARCANTE",
indicacao: "IDEAL PARA PRODUÇÕES ESPECIAIS"
}
};

// Carregar os detalhes do produto
function carregarProduto() {
const parametros = new URLSearchParams(window.location.search);
const produtoEscolhido = parametros.get("produto");

const produto = produtos[produtoEscolhido] || produtos.rose;

document.getElementById("nomeProduto").textContent = produto.nome;
document.getElementById("precoProduto").textContent = produto.preco;
document.getElementById("imagemProduto").src = produto.imagem;
document.getElementById("descricaoProduto").textContent = produto.descricao;
document.getElementById("tomProduto").textContent = produto.tom;
document.getElementById("acabamentoProduto").textContent = produto.acabamento;
document.getElementById("indicacaoProduto").textContent = produto.indicacao;
}

// Filtrar os produtos
function filtrarProdutos(tipo, botao) {
const produtosLista = document.querySelectorAll(".produto");

produtosLista.forEach(function(produto) {
if (tipo === "todos" || produto.dataset.tipo === tipo) {
produto.style.display = "block";
} else {
produto.style.display = "none";
}
});

document.querySelectorAll(".filtro").forEach(function(filtro) {
filtro.classList.remove("ativo");
});

botao.classList.add("ativo");
}

// Executar ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
if (document.getElementById("nomeProduto")) {
carregarProduto();
}
});
