var x = 0
setTimeout(() => {myFunction()}, 800);
window.addEventListener('scroll', function () {
    scroll()
})
// ve se o scroll esta no inicio ou nao. Se tiver, chama a função navbar(), se não, chama a função padrao().
const menu = function () {
    if (window.matchMedia("(max-width:1470px) and (min-width:611px)").matches) {
        navbar()
        console.log('a viewport tem pelo menos 800 pixels de largura')
    }
    var menu = document.getElementById('menu').style;
    menu.left = "0"

}
const fechar = function () {
    scroll()
    var menu = document.getElementById('menu').style;
    menu.removeProperty('left');
}
function open(link){
    alert(link)
    links = ["https://centralvingadores.com.br/poster-de-what-if-revela-chegada-de-tchalla-como-senhor-das-estrelas/", "https://centralvingadores.com.br/trailer-de-homem-aranha-sem-volta-para-casa-assista/"]
    alert(links[link])
    window.location = links[link];
    target = "_blank";
}