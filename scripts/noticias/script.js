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
function myFunction() {
    array = ['test1', 'teste2', 'rs2']
    setInterval(function(){
        if (x > 3){
            x = 0
        }
        desc = document.getElementById('descnot')
        desc.innerText = array[x]
        x += 1
    }, 5300);
  }
