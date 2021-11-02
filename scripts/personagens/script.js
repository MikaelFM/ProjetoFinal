
window.addEventListener('scroll', function() {
    scroll()
})
// ve se o scroll esta no inicio ou nao
const scroll = function(){
    const scrollado = window.pageYOffset;
    if (scrollado > 3){
        navbar();
    } else if (scrollado == 0){
        padrao()
    }
}
const navbar = function() {
    let imagem = document.getElementById('logoavengers').style;
    let navbar = document.getElementById('navbar').style;
    let ham = document.getElementById('hamburguer').style;
    imagem.left = "calc(100vw - 32vh)";
    navbar.height = "10vh";
    imagem.height = "10vh"
    ham.fontSize = "5vh";

    
}
const padrao = function() {
    let imagem = document.getElementById('logoavengers').style;
    let navbar = document.getElementById('navbar').style;
    let ham = document.getElementById('hamburguer').style;
    imagem.left = "0";
    navbar.height = "15vh";
    imagem.height = "15vh"
    ham.fontSize = "6vh";
 }
const menu = function(){
    var menu = document.getElementById('menu').style;
    menu.left = "0"
}
const fechar = function(){
    console.log('fechado')
    var menu = document.getElementById('menu').style;
    menu.left = "-50vw"
}