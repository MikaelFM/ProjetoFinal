window.addEventListener('scroll', function () {
    scroll()
})
// ve se o scroll esta no inicio ou nao. Se tiver, chama a função navbar(), se não, chama a função padrao().
const scroll = function () {
    const scrollado = window.pageYOffset;
    if (scrollado > 3) {
        navbar();
    } else if (scrollado == 0) {
        padrao()
    }
}
/* diminui a largura da navbar e empurra o logo pro lado */
const navbar = function () {
    let imagem = document.getElementById('logoavengers').style;
    let navbar = document.getElementById('navbar').style;
    let ham = document.getElementById('hamburguer').style;
    imagem.left = "calc(100vw - 32vh)";
    navbar.height = "10vh";
    imagem.height = "10vh"
    ham.fontSize = "5vh";


}
/* faz com que a largura e a posição do logo voltem ao normal */
const padrao = function () {
    let imagem = document.getElementById('logoavengers').style;
    let navbar = document.getElementById('navbar').style;
    let ham = document.getElementById('hamburguer').style;
    imagem.left = "0";
    navbar.height = "15vh";
    imagem.height = "15vh"
    ham.fontSize = "6vh";
}
/* abre o menu */
const menu = function () {
    if (window.matchMedia("(max-width:1470px) and (min-width:611px)").matches) {
        navbar()
        console.log('a viewport tem pelo menos 800 pixels de largura')
    }
    var menu = document.getElementById('menu').style;
    menu.left = "0"

}
/* fecha o menu */
const fechar = function () {
    scroll()
    var menu = document.getElementById('menu').style;
    menu.removeProperty('left');
}
