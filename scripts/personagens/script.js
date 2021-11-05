/* define a variavel acessibilidade */
var acessibilidade = ''
/* a função persoagem. Quando o usuario clicar em uma das imagens pequenas dos personagens, ele muda o texto e a imagem para aquele respectivo personagem */
function personagem(x) {
    const img = document.getElementById('img')
    const personage = document.getElementById('nomepersonagem')
    const desc = document.getElementById('descricao')
    array = [ /* uma array com todas as info de cada personagem */
        {
            "nome": "CAPITÃO AMÉRICA",
            "texto": "Um Supersoldado no auge de força, resistência e destreza originárias de um soro experimental recebido durante a 2ª Guerra Mundial.",
        },
        {
            "nome": "THOR",
            "texto": "Filho de Odin e Deus do Trovão, empunha o martelo encantado Mjolnir. Achou um segundo lar na Terra junto dos Avengers.",
        },
        {
            "nome": "HOMEM-ARANHA",
            "texto": "Peter Parker, aos 15 anos, é picado por uma aranha irradiada e se torna o Espetacular Homem-Aranha que conhecemos! É um dos mais recentes integrantes dos vingadores.",
        },
        {
            "nome": "HOMEM DE FERRO",
            "texto": "Gênio inventor bilionário e cofundador dos Avengers. Jurou proteger o mundo de ameaças catastróficas.",
        },
        {
            "nome": "PANTERA NEGRA",
            "texto": "O Rei T'Challa é o herói Black Panther, protetor e atual líder de Wakanda. Quando as forças de Klaue ameaçam Wakanda, T'Challa está pronto para combatê-las.",
        },
        {
            "nome": "DR. ESTRANHO",
            "texto": "Talvez o mais poderoso vingador, é o Mago Supremo, o principal protetor da Terra contra ameaças mágicas e místicas",
        },
        {
            "nome": "HULK",
            "texto": "Uma dose imensa de radiação gama transformou o brilhante cientista Dr. Bruce Banner no gigante esmeralda conhecido como Hulk.",
        },
        {
            "nome": "VIÚVA NEGRA",
            "texto": "Criada no programa soviético supersecreto Sala Vermelha, Natasha Romanoff é uma mestre em espionagem, subversão e combate.",
        },

    ]
    img.className = String('personagem' + x);
    img.style.backgroundImage = array[x].imagem
    personage.innerHTML = array[x].nome
    desc.innerHTML = array[x].texto
}
/* deixa as leras  dos elementos com tag 'p'  maiores se elas estiverem normais. Se estiverem pequenas, deixa as letras normais. É usada na acessibilidade */
function grande(){
    var el = document.querySelectorAll('p')
    if (acessibilidade == 'pequeno'){
        el.forEach(element => {
            element.style.removeProperty('font-size');
          });
      } else {
        el.forEach(element => {
            element.style.fontSize = '2vw';
          });
      }
      acessibilidade = 'grande'
    }
    /* deixa as leras dos elementos com tag 'p' menores se elas estiverem normais. Se estiverem grandes, deixa as letras normais. É usada na acessibilidade */
  function pequeno(){
    var el = document.querySelectorAll('p')
      if (acessibilidade == 'grande'){
        el.forEach(element => {
            element.style.removeProperty('font-size');
          });
      } else {
        el.forEach(element => {
            element.style.fontSize = '0.8vw';
          });
      }
      acessibilidade = 'pequeno'
  }
