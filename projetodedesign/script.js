
class Blush {
    constructor(n, desc, tom, acabamento, indicacao, preco, img, categoria, i) {
        this.nome = n;
        this.descricao = desc;
        this.tom = tom;
        this.acabamento = acabamento;
        this.indicacao = indicacao;
        this.preco = preco;
        this.imagem = img;
        this.categoria = categoria;
        this.id = i;
    }

    card() {
        let article = document.createElement("article");
        article.classList.add("product-card");

        article.innerHTML = `
            <img src="./img/${this.imagem}" alt="${this.nome}">

            <div class="product-card-body">
                <div class="product-number">0${this.id}</div>

                <h3>${this.nome}</h3>

                <div class="product-meta">
                    ${this.tom} • ${this.acabamento}
                </div>

                <strong class="product-price">${this.preco}</strong>

                <a class="btn" href="detalhes.html?id=${this.id}">
                    Ver produto →
                </a>
            </div>
        `;

        return article;
    }

    detalhe() {
        return `
            <div class="detail-photo">
                <img src="./img/${this.imagem}" alt="${this.nome}">
            </div>

            <div class="detail-info">
                <span class="eyebrow">Detalhes do produto</span>

                <h1>${this.nome}</h1>

                <p class="detail-price">${this.preco}</p>

                <p>${this.descricao}</p>

                <ul class="detail-list">
                    <li><strong>Tom:</strong> ${this.tom}</li>

                    <li><strong>Acabamento:</strong> ${this.acabamento}</li>

                    <li><strong>Indicação:</strong> ${this.indicacao}</li>
                </ul>
            </div>
        `;
    }
}

// Produtos da loja Meu Blush
const b1 = new Blush(
    "BLUSH ROSÉ",
    "Blush em tom rosado suave, ideal para deixar as bochechas com aparência saudável e delicada.",
    "TOM ROSA CLARO",
    "ACABAMENTO NATURAL",
    "IDEAL PARA O DIA A DIA",
    "R$ 40,00",
    "rose.jpg",
    "po",
    1
);

const b2 = new Blush(
    "BLUSH PÊSSEGO",
    "Blush em tom pêssego, perfeito para proporcionar uma aparência saudável e iluminada.",
    "TOM PÊSSEGO",
    "ACABAMENTO NATURAL",
    "IDEAL PARA UMA MAKE LEVE",
    "R$ 27,00",
    "pessego.jpg",
    "cremoso",
    2
);

const b3 = new Blush(
    "BLUSH BERRY",
    "Blush em tom berry, ideal para uma maquiagem com um toque de cor mais intenso.",
    "TOM BERRY",
    "ACABAMENTO MARCANTE",
    "IDEAL PARA PRODUÇÕES ESPECIAIS",
    "R$ 23,00",
    "Berryy.jpg",
    "po",
    3
);

// Lista de produtos
const lista = [b1, b2, b3];
