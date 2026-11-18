// iniciando informações do produto 
class Produtos {
    constructor(n, desc, prec, img, tom, acab, indi, i) {
        this.nome = n;
        this.preco = prec;
        this.descricao = desc;
        this.imagem = img;
        this.tom_produto = tom;
        this.acamento = acab;
        this.indicacao = indi;
        this.id = i;
    }


    card() {
        let article = document.createElement("article");
        article.classList.add("dog-card");
        article.innerHTML = `
            <div class="produto-imagem">
                <img src="./img/${this.imagem}" alt="${this.nome}">
            </div>

            <span class="numero">0${this.id}</span>

            <h2>${this.nome}</h2>

            <p>${this.tom}</p>

            <strong>${this.preco}</strong>

            <a class="botao" href="detalhes.html?id=${this.id}"> VER PRODUTO </a> 
        `;
        return article;
    }

    detalhe() {
        return `
            <div class="produto-detalhe">
                <div class="detalhe-imagem">
                    <img src="./img/${this.imagem}">
                </div>
                <div class="detalhe-informacoes">
                    <h2>${this.nome}</h2>
                    <strong>${this.preco}</strong>
                    <h3>DESCRIÇÃO</h3>
                    <p>${this.descricao}</p>
                    <div class="caracteristicas">
                        <span>${this.tom}</span>
                        <span>${this.acabamento}</span>
                        <span>${this.indicacao}</span>
                    </div>
                </div>
            </div>
    `
    }
}
// Cadastro dos produtos

const b1 = new Blush("BLUSH ROSÉ",
    "Blush em tom rosado suave, ideal para deixar as bochechas com aparência saudável e delicada.",
    "R$ 40,00",
    "TOM ROSA CLARO",
    "ACABAMENTO NATURAL",
    "IDEAL PARA O DIA A DIA",
    "rose.jpg", 1
);

const b2 = new Blush("BLUSH PÊSSEGO",
    "Blush em tom pêssego, perfeito para proporcionar uma aparência saudável e iluminada.",
    "R$ 27,00",
    "TOM PÊSSEGO",
    "ACABAMENTO NATURAL",
    "IDEAL PARA UMA MAKE LEVE",
    "pessego.jpg", 2
);

const b3 = new Blush("BLUSH BERRY",
    "Blush em tom berry, ideal para uma maquiagem com um toque de cor mais intenso.",
    "R$ 23,00",
    "TOM BERRY",
    "ACABAMENTO MARCANTE",
    "IDEAL PARA PRODUÇÕES ESPECIAIS",
    "Berryy.jpg", 3
);

// Lista de produtos
const lista = [b1, b2, b3];
