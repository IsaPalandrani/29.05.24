const cor1 = "#fff"; // branco
const cor2 = "#000"; // preto
const medida = "px"; // unidade de medida em pixel
const larguraCelulaPadrao = 100;
const alturaCelulaPadrao = 100;
const larguraPecaPadrao = 50;
const alturaPecaPadrao = 50;
const linhas = ["1","2","3","4","5","6","7","8"];
const colunas = ["a","b","c","d","e","f","g","h"];
const totalCelulas = linhas.length * colunas.length;
var pecas = []; // variável do tipo matriz que vai atribuir os objetos das peças
var celula = []; // variável do tipo matriz que vai atribuir os objetos das células/quadrantes
var numCelula = 0; // variável que vai contabilizar a quantidade de células dos quadrantes (linhas * colunas)
var corAtual = cor1; // variável que vai definir a cor atual da repetição entre linhas e colunas
const posicaoSuperiorInicial = 10; // variável que vai definir a posição superior inicial das células/quadrantes do tabuleiro, para uso na estrutura de repetição (for) das linhas e colunas
const posicaoEsquerdaInicial = 10;
var posicaoSuperior = posicaoSuperiorInicial; // variável que vai definir a posição superior inicial das células/quadrantes do tabuleiro, para uso na estrutura de repetição (for) das linhas e colunas
var posicaoEsquerda = posicaoEsquerdaInicial;
var divsCelulas = []; // variável do tipo matriz que vai atribuir os elementos <div> das células/quadrantes
const dirPecas = "./pecas/"; // variável somente leitura que armazena o caminho do diretório de imagens das peças
const dirQuadrantes = "./quadrantes/"; // variável somente leitura que armazena o caminho do diretório de imagens dos quadrantes
var corPermitida = cor1;

class HistoricoMovimento { // criação da classe HistoricoMovimento
    constructor () { // declaração do construtor da classe
        this.pecaMovimentada = []; // declaração da variavel de objeto/classe pecaMovimentada, do tipo matriz
        this.linhaOrigem = []; // declaração da variavel de objeto/classe linhaOrigem, do tipo matriz
        this.colunaOrigem = []; // declaração da variavel de objeto/classe colunaOrigem, do tipo matriz
        this.linhaDestino = []; // declaração da variavel de objeto/classe linhaDestino, do tipo matriz
        this.colunaDestino = []; // declaração da variavel de objeto/classe colunaDestino, do tipo matriz
    }
}


class Tabuleiro {
    constructor (cor, x, y, linha, coluna, altura, largura, nome, posicaoVetor) {
        this.cor = cor;
        this.x = x;
        this.y = y;
        this.linha = linha;
        this.coluna = coluna;
        this.altura = altura;
        this.largura = largura;
        this.nome = nome;
        this.posicaoVetor = posicaoVetor;
    }
}

class Peca {
    constructor (cor, linha, coluna, altura, largura, nome, img, tipo, posicaoVetor, movimento) {
        this.cor = cor;
        this.linha = linha;
        this.coluna = coluna;
        this.altura = altura;
        this.largura = largura;
        this.nome = nome;
        this.img = img;
        this.tipo = tipo;
        this.posicaoVetor = posicaoVetor;
        this.movimento = movimento;
    }
}


var pecas = [];

pecas[0] = new Peca(cor2, linhas[0], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "torre_preto_1", './torrecinza.webp', "torre", 0, 0);
pecas[1] = new Peca(cor2, linhas[0], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "torre_preto_2", './torrecinza.webp', "torre", 1, 0);
pecas[2] = new Peca(cor2, linhas[0], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "cavalo_preto_1", './cavalocinza.webp', "cavalo", 2, 0);
pecas[3] = new Peca(cor2, linhas[0], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "cavalo_preto_2", './cavalocinza.webp', "cavalo", 3, 0);
pecas[4] = new Peca(cor2, linhas[0], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "bispo_preto_1", './bispocinza.png', "bispo", 4, 0);
pecas[5] = new Peca(cor2, linhas[0], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "bispo_preto_2", './bispocinza.png', "bispo", 5, 0);
pecas[6] = new Peca(cor2, linhas[0], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "rei_preto", './reicinza.webp', "rei", 6, 0);
pecas[7] = new Peca(cor2, linhas[0], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "rainha_preto", './rainhacinza.webp', "rainha", 7, 0);
pecas[8] = new Peca(cor2, linhas[1], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_1", './peaocina.webp', "peao", 8, 0);
pecas[9] = new Peca(cor2, linhas[1], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_2", './peaocina.webp', "peao", 9, 0);
pecas[10] = new Peca(cor2, linhas[1], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_3", './peaocina.webp', "peao", 10, 0);
pecas[11] = new Peca(cor2, linhas[1], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_4", './peaocina.webp', "peao", 11, 0);
pecas[12] = new Peca(cor2, linhas[1], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_5", './peaocina.webp', "peao", 12, 0);
pecas[13] = new Peca(cor2, linhas[1], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_6", './peaocina.webp', "peao", 13, 0);
pecas[14] = new Peca(cor2, linhas[1], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_7", './peaocina.webp', "peao", 14, 0);
pecas[15] = new Peca(cor2, linhas[1], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_8", './peaocina.webp', "peao", 15, 0);

pecas[16] = new Peca(cor1, linhas[7], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "torre_branco_1", './torreazul1.png', "torre", 16, 0);
pecas[17] = new Peca(cor1, linhas[7], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "torre_branco_2", './torreazul1.png', "torre", 17, 0);
pecas[18] = new Peca(cor1, linhas[7], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "cavalo_branco_1", './cavaloazul.png', "cavalo", 18, 0);
pecas[19] = new Peca(cor1, linhas[7], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "cavalo_branco_2", './cavaloazul.png', "cavalo", 19, 0);
pecas[20] = new Peca(cor1, linhas[7], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "bispo_branco_1", './bispoazul1.png', "bispo", 20, 0);
pecas[21] = new Peca(cor1, linhas[7], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "bispo_branco_2", './bispoazul1.png', "bispo", 21, 0);
pecas[22] = new Peca(cor1, linhas[7], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "rei_branco", './reiazul.png', "rei", 22, 0);
pecas[23] = new Peca(cor1, linhas[7], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "rainha_branco", './rainhaazul.png', "rainha", 23, 0);
pecas[24] = new Peca(cor1, linhas[6], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_1", './peaoazul.png', "peao", 24, 0);
pecas[25] = new Peca(cor1, linhas[6], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_2", './peaoazul.png', "peao", 25, 0);
pecas[26] = new Peca(cor1, linhas[6], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_3", './peaoazul.png', "peao", 26, 0);
pecas[27] = new Peca(cor1, linhas[6], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_4", './peaoazul.png', "peao", 27, 0);
pecas[28] = new Peca(cor1, linhas[6], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_5", './peaoazul.png', "peao", 28, 0);
pecas[29] = new Peca(cor1, linhas[6], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_6", './peaoazul.png', "peao", 29, 0);
pecas[30] = new Peca(cor1, linhas[6], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_7", './peaoazul.png', "peao", 30, 0);
pecas[31] = new Peca(cor1, linhas[6], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_8", './peaoazul.png', "peao", 31, 0);

/**
 * Desafio: criar todos os 64 "objetos" em uma estrutura de loop
 */

var celula = [];
var numCelula = 0;
var corAtual = cor1;
var posicaoSuperior = 0;

try {
    for (let l = 0; l < linhas.length; l++) { 
        posicaoEsquerda = posicaoEsquerdaInicial;
        if (corAtual == cor1) { 
            corAtual = cor2; 
        } else { 
            corAtual = cor1; 
        } 
        for (let c = 0; c < colunas.length; c++) { 
            celula[numCelula] = new Tabuleiro(corAtual, posicaoSuperior, posicaoEsquerda, linhas[l], colunas[c], alturaCelulaPadrao, larguraCelulaPadrao, "celula_" + colunas[c] + "_" + linhas[l], l); 
            posicaoEsquerda += larguraCelulaPadrao; 

            if (corAtual == cor1) { 
                corAtual = cor2; 
            } else { 
                corAtual = cor1; 
            } 

            numCelula++; 
        } 
        posicaoSuperior += alturaCelulaPadrao;
    } 
} catch (e) {
    console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para a criação dos quadrantes. Veja o erro: ", e);
}

try {
    for (let c = 0; c < celula.length; c++) { 
        divsCelulas[c] = document.createElement("div"); 
        divsCelulas[c].id = celula[c].nome; 
        divsCelulas[c].style.backgroundColor = celula[c].cor; 
        divsCelulas[c].style.position = "absolute"; 
        divsCelulas[c].style.top = celula[c].x + medida; 
        divsCelulas[c].style.left = celula[c].y + medida; 
        divsCelulas[c].style.height = celula[c].altura + medida;
        divsCelulas[c].style.width = celula[c].largura + medida;
        divsCelulas[c].dataset.line = celula[c].linha;
        divsCelulas[c].dataset.column = celula[c].coluna;
        divsCelulas[c].style.border = "solid 1px #000"; 

        if (celula[c].cor == cor1) { 
            divsCelulas[c].style.color = cor2; 
        } else { 
            divsCelulas[c].style.color = cor1;
        } 

        divsCelulas[c].style.display = "grid"; 
        divsCelulas[c].style.alignItems = "center"; 
        divsCelulas[c].style.backgroundImage = "url(" + dirQuadrantes + celula[c].coluna + celula[c].linha + ".png)";
        divsCelulas[c].style.backgroundRepeat = "no-repeat";
        divsCelulas[c].style.backgroundPosition = "center";

        for (let p = 0; p < pecas.length; p++) { 
            if (celula[c].linha == pecas[p].linha && celula[c].coluna == pecas[p].coluna) {
                peca_tmp.src = dirPecas + pecas[p].img;
                peca_tmp.width = pecas[p].largura;
                peca_tmp.height = pecas[p].altura;
                peca_tmp.style.marginLeft = "auto";
                peca_tmp.style.marginRight = "auto";
                peca_tmp.dataset.indexNumber = pecas[p].posicaoVetor;
                peca_tmp.id = pecas[p].nome;
                divsCelulas[c].appendChild(peca_tmp);  
            } 
        } 

        document.body.appendChild(divsCelulas[c]);
    } 
} catch (e) {
    console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para a criação das peças. Veja o erro: ", e);
}

var divsCelulas = [];

for (let c = 0; c < celula.length; c++) {
    divsCelulas[c] = document.createElement("div");
    divsCelulas[c].id = celula[c].nome;
    divsCelulas[c].style.backgroundColor = celula[c].cor;
    divsCelulas[c].style.position = "absolute";
    divsCelulas[c].style.top = celula[c].x + medida;
    divsCelulas[c].style.left = celula[c].y + medida;
    divsCelulas[c].style.height = celula[c].altura + medida;
    divsCelulas[c].style.width = celula[c].largura + medida;
    divsCelulas[c].dataset.line = celula[c].linha;
    divsCelulas[c].dataset.column = celula[c].coluna;
    if (celula[c].cor == cor1) {
        divsCelulas[c].style.color = cor2;
    } else {
        divsCelulas[c].style.color = cor1;
    }
    divsCelulas[c].style.display = "grid";
    divsCelulas[c].style.alignItems = "center";

    for (let p = 0; p < pecas.length; p++) {
        if (celula[c].linha == pecas[p].linha && celula[c].coluna == pecas[p].coluna) {
            let peca_tmp = document.createElement("img");
            peca_tmp.src = pecas[p].img;
            peca_tmp.width = pecas[p].largura;
            peca_tmp.height = pecas[p].altura;
            peca_tmp.style.marginLeft = "auto";
            peca_tmp.style.marginRight = "auto";
            peca_tmp.dataset.indexNumber = pecas[p].posicaoVetor;
            peca_tmp.id = pecas[p].nome;
            divsCelulas[c].appendChild(peca_tmp);
        }
    }

    document.body.appendChild(divsCelulas[c]);
}

class Movimento {
    constructor (peca, linhaOrigem, colunaOrigem, linhaDestino, colunaDestino, historico_movimentos) {
        this.peca = peca;
        this.linhaDestino = linhaDestino;
        this.colunaDestino = colunaDestino;
        this.linhaOrigem = linhaOrigem;
        this.colunaOrigem = colunaOrigem;
        this.historico_movimentos = historico_movimentos;
    }

    moverPeca (peca, linhaOrigem, colunaOrigem, linhaDestino, colunaDestino, historico_movimentos) {
        if (!this.impedirMovimento()) {
            historico_movimentos.pecaMovimentada.push(peca);
            historico_movimentos.linhaOrigem.push(linhaOrigem);
            historico_movimentos.colunaOrigem.push(colunaOrigem);
            historico_movimentos.linhaDestino.push(linhaDestino);
            historico_movimentos.colunaDestino.push(colunaDestino);
        }
    }

    impedirMovimento(peca) {
        let linhaTemp = linhas[parseInt(peca.linha) + 1];
        let colunaTemp = colunas[colunas.indexOf(peca.coluna) + 1];
        if (pecaTemp.tipo != "cavalo") {
            if (this.quadranteDireitaLivre()) {

            }
        }
        return true;
    }

    quadranteDireitaLivre(peca) {
        let linhaTemp = peca.
        if (peca.dataset.indexNumber)
        return true;
    }
}

var movimento = new Movimento();

class HistoricoMovimentos {
    constructor () {
        this.pecaMovimentada = [];
        this.linhaOrigem = [];
        this.colunaOrigem = [];
        this.linhaDestino = [];
        this.colunaDestino = [];
    }
}

var historico_movimentos = new HistoricoMovimentos();

(function() {
    document.onmouseup = handleMouseUp;
    function handleMouseUp(event) {
        let pecaTemp = document.getElementById('pecaTemp');
        pecaTemp.innerHTML = '';
        pecaTemp.style.display = "none";
        event = event || window.event; // IE-ism
        if (event.target.tagName == "IMG" || event.target.tagName == "img") {
            console.log("Ops! Não é possível realizar este movimento, pois a peça " + event.target.id + " já está ocupando a posição.");
        } else {
            console.log(event.target.id);
            if (event.target.tagName == "DIV" || event.target.tagName == "div") {
                if (event.target.innerHTML == "") {
                    let peaoH2 = pecas[15];
                    if (peaoH2.linha < event.target.dataset.line && peaoH2.coluna == event.target.dataset.column){
                    pecaMovimentada.push(pecaClicada);
                    linhaOrigem.push(pecas[pecaClicada.dataset.indexNumber].linha);
                    colunaOrigem.push(pecas[pecaClicada.dataset.indexNumber].coluna);
                    linhaDestino.push(event.target.dataset.line);
                    colunaDestino.push(event.target.dataset.column);
                    console.log("pecaMovimentada: ", pecaMovimentada);
                    console.log("linhaOrigem: ", linhaOrigem);
                    console.log("colunaOrigem: ", colunaOrigem);
                    console.log("linhaDestino: ", linhaDestino);
                    console.log("colunaDestino: ", colunaDestino);

                    let pecaClicadaTemp = pecaClicada;
                    pecaClicada.remove();
                    event.target.appendChild(pecaClicadaTemp);
                }
                } else {
                    console.log("Ops! Não é possível realizar este movimento, pois o quadrante " + event.target.id + " já está ocupado.");
                }
            }
        }
        pecaClicada = null;
    }

    document.onmousedown = handleMouseDown;
    function handleMouseDown(event) {
        event = event || window.event; 
        if (event.target.tagName == "IMG" || event.target.tagName == "img") {
            document.getElementById('pecaTemp').style.display = "block";
            pecaClicada = event.target;
            let imgPecaTemp = document.createElement('img');
            if (pecaClicada.tagName == "img" || pecaClicada.tagName == "IMG") {
                if (pecaClicada != null) {
                    imgPecaTemp.src = './' + pecaClicada.src.replace(/^.*[\\/]/, '');
                }
                imgPecaTemp.width = larguraPecaPadrao;
                imgPecaTemp.height = alturaPecaPadrao;
                pecaTemp.appendChild(imgPecaTemp);
            }
        }
        console.log(pecaClicada.id);
    }

    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, 
            doc, 
            body,
            pecaTemp = document.getElementById('pecaTemp');

        event = event || window.event; 

        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        pecaTemp.style.left = (event.pageX + 50) + medida;
        pecaTemp.style.top = event.pageY + medida;
        return false;
    }
})();
