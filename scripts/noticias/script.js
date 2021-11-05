var x = 0
window.addEventListener('scroll', function () {
    scroll()
})
// ve se o scroll esta no inicio ou nao. Se tiver, chama a função navbar(), se não, chama a função padrao(). funcoes nao usadas neste site, mas mantidas para evitar erros.
const menu = function () { /* faz com que o menu abra */
    if (window.matchMedia("(max-width:1470px) and (min-width:611px)").matches) {
        navbar()
        console.log('a viewport tem pelo menos 800 pixels de largura')
    }
    var menu = document.getElementById('menu').style;
    menu.left = "0"

} /* fecha o menu */
const fechar = function () {
    scroll()
    var menu = document.getElementById('menu').style;
    menu.removeProperty('left');
}