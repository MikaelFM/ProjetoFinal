//Configurações da tag body:
const campo = document.getElementById("corpo"); //Pega o corpo para que possamos configurar

//Aqui criamos um array onde ficarão nossas posições do eixo Y das estrelas
var ArrayY = [];

//Lista das teclas pressionadas
var Teclas = [];

//Lista com a quantidade dos tiros
var quantTiros = [];

//Número da rodada
var Rodada = [0];

//Lista com os inimigos
var listaEnemies = [];

//Lista com o inicio
var IEF = [];

//Aqui criamos nosso super-heroi
var superHero = document.createElement("div");
superHero.id = "Heroi"; //Muda nosso id
campo.appendChild(superHero); //Adiciona o super-herói ao body

//Array de posicoes do heroi
posiHero = [50, 70];

//Cria uma lista onde ficarão nossos eventos
eventosLista = [];

//Posiciona nosso heroi
superHero.style.left = `${posiHero[posiHero.length -2]}vw`;
superHero.style.top = `${posiHero[posiHero.length -1]}vh`;

//Cria um canto com nossas rodadas
var leftSide = document.createElement('div');
leftSide.id = "esq";
leftSide.innerHTML = `<p>Rodada 1</p>`;
leftSide.style.display = "none";
campo.appendChild(leftSide);

//Cria um canto com nossas nossa quantidade de raios
var leftSideBottom = document.createElement('div');
leftSideBottom.id = "esqbot";
leftSideBottom.innerHTML = `<p>Raios: 290</p>`; 
leftSideBottom.style.display = "none";
campo.appendChild(leftSideBottom);

//Aqui configuramos os eventos de click para botões para o mobile
document.querySelector("#esquerda").addEventListener('touchstart', add.bind(null, 'a', Teclas, eventosLista));
document.querySelector("#esquerda").addEventListener('touchleave', back.bind(null, eventosLista));

document.querySelector("#direita").addEventListener('touchstart', add.bind(null, 'd', Teclas, eventosLista));
document.querySelector("#direita").addEventListener('touchleave', back.bind(null, eventosLista));

document.querySelector("#Raios").addEventListener('touchstart', add.bind(null, ' ', Teclas, eventosLista));
document.querySelector("#Raios").addEventListener('touchleave', back.bind(null, eventosLista));

//Função add faz com que os botões pressionados no mobile sejam como teclas do teclado, ativando as outras funções
function add(pressionada, lista, eve) {
    if (pressionada != lista[lista.length - 1]) {
        lista.push(pressionada);
    } else {
        lista.push(')');
    }

    if (lista.length >= 3) {
        lista.shift();
    }

    eve.push('keydown');
}

//Função back tem o efeito de keyup no mobile
function back(eve) {
    eve.push('keyup');
}

//Verifica se alguma tecla foi pressionada
document.addEventListener ('keydown', (event) => {
    //Verifica se a tecla pressionada é 'a', 'd' ou espaço
    if (event.key.toLowerCase() == 'a' || event.key.toLowerCase() == 'd' || event.key.toLowerCase() == ' ' && event.key.toLowerCase() != Teclas[Teclas.length - 1]) {
        Teclas.push(event.key);
    } else if (event.key == Teclas[Teclas.length - 1]) {
        Teclas.push(Teclas[Teclas.length -1 ]);
    } else {
        Teclas.push(')');
    }

    if (Teclas.length >= 3) {
        Teclas.shift();
    }
    
    eventosLista.push(event.type);
    //console.log(Teclas);
});

//Verifica se a telca pressionada foi solta
document.addEventListener ('keyup', (event) => {
    eventosLista.push(event.type);
});

//Aqui temos um loop for que irá criar 150 estrelas do nosso espaço
for (i = 0; i <= 150; i++) {
    var star = document.createElement("div"); //Cria nossa estrela
    star.className = "Estrela"; //Muda o id de nossa estrela

    campo.appendChild(star); // Adiciona ela ao body

    var Y = Math.random() * 0.4 * window.screen.height; //Da uma posição aleatória para nossa estrela no eixo Y
    var X = Math.random() * 2.0 * window.screen.width; //Da uma posição aleatória para nossa estela no eixo X
    

    ArrayY.push(Y); //Adiciona a posição Y ao nosso array

    //Aplica as posições determinadas anteriormente
    star.style.top = `${Y}px`; 
    star.style.left = `${X}px`;
}        

//Cria uma função para fazer com que as estrelas desçam, dando efeito de movimento
function DesceLa(Arra, Place) {
    //Loop for nas childs de nosso body
    for (l = 0; l < Place.children.length; l++) {
        
        //Verifica se o elemento é uma estrela para que seja atualizado
        if(Place.children[l].className == "Estrela") {
            //Testa se está no fundo da tela
            if (Arra[l] >= 0.4 * window.screen.height) {
                Arra[l] = Math.random(); //Retorna a estrela pro inicio
            } else {
                Arra[l] += Number.parseInt(Math.random()*10); //Coloca a estrela em uma posição aleatória, mas mesmo assim da o efeito de estar descendo
            }

            Place.children[l].style.top = `${Arra[l]}px`; //Ajusta as posições
        }
    }
}

//Função que faz nosso super-herói andar
function andaHeroi(corpo, PegaTeclas, poHe, her, quanTi, leftSB) {
    //Array com a possíveis teclas de ação
    const Chaves = ['a', 'd', ' ', ')'];

    //Testa qual foi a tecla clicada
    if (PegaTeclas[PegaTeclas.length -1] == Chaves[0] && posiHero[posiHero.length -2] - 5 >= 5) {
        poHe.push(posiHero[posiHero.length -2] - 1.5); // Leva nosso personagem para a esquerda
        poHe.push(posiHero[posiHero.length -2] + 0);
        her.style.transform = "rotate(-20deg) scaleX(1)"; //Gira nossa imagem enquanto anda
    
    } else if (PegaTeclas[PegaTeclas.length -1] == Chaves[1] && posiHero[posiHero.length -2] + 5 <= 95) {
        poHe.push(posiHero[posiHero.length -2] + 1.5); // Leva nosso personagem para a direita
        poHe.push(posiHero[posiHero.length -2] + 0);
        her.style.transform = "rotate(20deg) scaleX(-1)"; //Gira nossa imagem enquanto anda
    
    } else if (PegaTeclas[PegaTeclas.length -1] == Chaves[2] && Number(leftSB.innerHTML.slice(9, leftSB.innerHTML.length - 4) - 1) >= 0) { //Aqui criamos até 300 tiros
        criaTiro(corpo , posiHero, quanTi); //Adiciona um tiro no nosso body
        leftSB.innerHTML = `<p>Raios: ${Number(leftSB.innerHTML.slice(9, leftSB.innerHTML.length-4)-1)}</p>`;

    } else if (PegaTeclas[PegaTeclas.length -1] == Chaves[3]) {
        poHe.push(posiHero[posiHero.length -2] + 0); //Não movimenta o nosso herói caso seja outra tecla
        poHe.push(posiHero[posiHero.length -2] + 0);
    }

    //Atualiza a posição do nosso herói
    her.style.left = `${posiHero[posiHero.length -2]}vw`;
    her.style.top = `${posiHero[posiHero.length -1]}vh`; 
    
}

//Aqui criaremos nossos tiros
function criaTiro(corpo, posHe, qT) {
    var Tiro = document.createElement("div"); //Cria uma div
    Tiro.className = "projetil"; //Muda o id dela para 'tiro'

    Tiro.style.left = `${posHe[posHe.length -2] + 0.25}vw`; //Posiciona ela junto ao nosso herói
    Tiro.style.top = `${posHe[posHe.length -1]}vh`; //Posiciona ela junto ao nosso herói

    corpo.appendChild(Tiro); //Adiciona ela ao body
    
    qT.push(Tiro); //Coloca ela em uma lista
}

//Cria uma orda de inimigos
function criaOrda(bodi, numRodada, lisEne) {
    //Faz um loop de 7 inimigos para cada rodada
    for(i = 0; i < numRodada.length * 7; i++) {
        var Inimigo = document.createElement("div"); //Cria uma div inimiga
        Inimigo.className = "ordaIni"; //Coloca este nome para a class

        bodi.appendChild(Inimigo); //Adiciona nosso inimigo ao body
        lisEne.push(Inimigo); //Adiciona nosso inimigo a uma lista de inimigos

        //Ajusta as posições de nosso inimigo
        Inimigo.style.left = `${24 + 8 * (i % 7)}vw`;
        Inimigo.style.top = `${0 - (10*Number.parseInt(i/7))}vh`;
    }
}

//Cria nossa função que irá representar o fluxo principal do jogo
function Run(Arr, camPrin, TEC, poHe, her, eveLis, quanTi, Rod, liE, ls, lsb, Finalizador) {
    //Desce nossas estrelass
    DesceLa(Arr, camPrin);

    //Testa se estamos com a tecla pressionada, pra só nos movimentarmos nesse momento
    if (eveLis[eveLis.length - 1] == 'keydown') {
        andaHeroi(camPrin, TEC, poHe, her, quanTi, lsb);
    } else {
        if (TEC[TEC.length -1] == 'd') {
            her.style.transform = "rotate(0deg) scaleX(-1)";
        } else if(TEC[TEC.length -1] == 'a') {
            her.style.transform = "rotate(0deg) scaleX(1)";
        }
    }
    
    //Movimenta os tiros
    for(o = 0; o < quanTi.length; o++) {
        
        //Testa nossos tiros, se estiverem fora da tela, são removidos, senão só continuam subindo
        if (Number(quanTi[o].style.top.slice(0, quanTi[o].style.top.length -3)) > -20) {
            quanTi[o].style.top = `${Number(quanTi[o].style.top.slice(0, quanTi[o].style.top.length -2)) - 5}vh`;
        } else {
            quanTi[o].style.top = "-10vh";
            quanTi[o].style.left = "-10vh";
            quanTi.splice(o, 1);
            if (quanTi[o]) {
                document.body.removeChild(quanTi[o]);
            }
           
        }     
    }
    
    //Testa se temos inimigos em tela
    if (liE.length == 0) {
        criaOrda(camPrin, Rod, liE);
        Rod.push(Rod[Rod.length -1] + 1);
        ls.innerHTML = `<p>Rodada: ${Rod[Rod.length - 1]}</p>`
        lsb.innerHTML = `<p>Raios: ${Number(lsb.innerHTML.slice(9, lsb.innerHTML.length-4)) + 10}</p>`;
    }

    //Se tivermos inimigos em tela, eles vão descer, se estiverem na mesma altura de nosso herói, perdemos o jogo
    if (liE.length > 0) {
        for(i = 0; i < liE.length; i++) {
            liE[i].style.top = `${Number(liE[i].style.top.slice(0, liE[i].style.top.length -2)) + 0.1}vh`;
            if (liE[i].style.top == her.style.top) {
                clearInterval(Finalizador[Finalizador.length - 1]);
                for(i = 0; i < document.getElementsByClassName('ordaIni').length; i++) {
                    document.getElementsByClassName('ordaIni')[i].style.display = "none"; //Some com os inimigos restantes
                }

                for(ii = 0; ii < document.getElementsByClassName('projetil').length; ii++) {
                    document.getElementsByClassName('projetil')[ii].style.display = "none";//Some com raios no meio da tela
                }

                let CIMA = document.querySelector('#esq').style;
                let CIMABAIXO = document.querySelector('#esqbot').style;
                CIMA.left = "39vw"; //Ajusta a posição do retângulo
                CIMA.top = "10vh"; //Ajusta a posição do retângulo
                CIMA.width = "25vw"; 
                CIMABAIXO.left = "39vw"; //Ajusta a posição do retângulo            
                CIMABAIXO.top = "20vh"; //Ajusta a posição do retângulo
                CIMABAIXO.width = "25vw"; 

                let But = document.createElement('button');
                But.className = 'Inicio';
                But.innerHTML = "Recomeçar";
                But.onclick = Restart;

                document.body.appendChild(But);
                
                
            }
        }
    }

    //Loop para testar colisões
    for(tiro = 0; tiro < quanTi.length; tiro++) {
        for(inimigo = 0; inimigo < liE.length; inimigo++) {
            var PosIni = liE[inimigo].getBoundingClientRect();
            var PosTir = quanTi[tiro].getBoundingClientRect();
            if((PosIni.top < PosTir.y && PosTir.y < PosIni.bottom) && (PosIni.left < PosTir.x && PosTir.x < PosIni.right)) {
                liE[inimigo].parentNode.removeChild(liE[inimigo]);

                liE.splice(inimigo, 1);
            }
            
        }
    }
    
}

//Reiniciar a página
function Restart() {
    document.location.reload(true);
}

//Loop principal do nosso game
function Comeca(inicioeFim) {
    document.getElementsByClassName("Inicio")[0].style.display = "none";
    leftSide.style.display = "block";
    leftSideBottom.style.display = "block";
    Intervalo = setInterval(Run, 30, ArrayY, campo, Teclas, posiHero, superHero, eventosLista, quantTiros, Rodada, listaEnemies, leftSide, leftSideBottom, IEF);
    inicioeFim.push(Intervalo);
}