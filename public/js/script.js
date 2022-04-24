window.onscroll = changeNavColor

const color1 = "#968E72";
const color2 = "#fafcc4";

const navcolor1 = "#E9EB9E";
const navcolor2 = "#8a805b";

var currentDiv = null

function changeNavColor(){
    const activediv = getActiveDiv()
    if (currentDiv == null) currentDiv = activediv
    else if (activediv == currentDiv) return
    if(activediv == 0){
        changeActive(document.getElementById('home'))
        navbar.forEach(item => {
            if(!item.childNodes[1].classList.contains('active')){
                item.childNodes[1].style.color = navcolor1;
            }else{
                item.childNodes[1].style.color = 'white';
            }
        })
    }
    if(activediv == 1){
        changeActive(document.getElementById('blog'))
        navbar.forEach(item => {
            if(!item.childNodes[1].classList.contains('active')){
                item.childNodes[1].style.color = navcolor2;
            }else{
                item.childNodes[1].style.color = 'black';
            }
        })
    }
    if(activediv == 2){
        changeActive(document.getElementById('about'))
        navbar.forEach(item => {
            if(!item.childNodes[1].classList.contains('active')){
                item.childNodes[1].style.color = navcolor1;
            }else{
                item.childNodes[1].style.color = 'white';
            }
        })
    }
    currentDiv = activediv
}

function getActiveDiv () {
    const els = [[document.getElementById('homediv')],document.getElementsByClassName('blogdiv'),[document.getElementById('aboutdiv')]]
    const rect = [];
    for(var i = 0; i < els.length; i++){
        rect[i] = []
        for(var j = 0; j < els[i].length; j++){
            rect[i][j] = els[i][j].getBoundingClientRect().top;
        }
    }
    var min1 = 0
    var min2 = 0
    var min = Math.abs(rect[min1][min2])
    for(var i = 0; i < els.length; i++){
        for(var j = 0; j < els[i].length; j++){
            if(Math.abs(rect[i][j]) < Math.abs(min)){
                min1 = i
                min2 = j
                min = Math.abs(rect[min1][min2])
            }
        }
    }
    return min1
}

function getCurrentActive(){
    return $('.active').attr('id')
}

function changeActive(element){
    document.getElementById(getCurrentActive()).classList.remove('active')
    element.classList.add('active')
}

const navbar = document.getElementById("indexes").querySelectorAll('li');

navbar.forEach(item => {
    item.onclick = () => {
        const id = item.childNodes[1].id
        switch(id){
            case 'home':
                document.getElementById("homediv").scrollIntoView()
                break
            case 'blog':
                document.getElementsByClassName("blogdiv")[0].scrollIntoView()
                break
            case 'about':
                document.getElementById("aboutdiv").scrollIntoView()
                break
        }
        changeActive(item.childNodes[1])
    }
})

$(document).ready(function() {
    console.log('Ready!')
    $('html').css('overflow-y', 'hidden')
    document.getElementById('loader').style.animation = 'test 1s'
    document.getElementById('loader').style.opacity = '0'
    setTimeout(function(){
        document.getElementById('loader').style.display = 'none'
        $('html').css('overflow-y', 'scroll')
    }, 1000)
    changeNavColor()
})