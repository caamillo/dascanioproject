var currentDiv = getActiveDiv()

window.onscroll = function() {
    const activediv = getActiveDiv()
    if (activediv == currentDiv) return console.log('test')
    console.log('avanti')
    if(activediv == 0){
        changeActive(document.getElementById('home'))
        if(document.documentElement.classList.contains('color2')){
            document.documentElement.classList.remove('color2')
            document.documentElement.classList.add('color1')
            setTimeout(scrollRedraw, 300)
        }
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
        if(document.documentElement.classList.contains('color1')){
            document.documentElement.classList.remove('color1')
            document.documentElement.classList.add('color2')   
            setTimeout(scrollRedraw, 200)
        }
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
        if(document.documentElement.classList.contains('color2')){
            document.documentElement.classList.remove('color2')
            document.documentElement.classList.add('color1')   
            setTimeout(scrollRedraw, 300)
        }
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

const color1 = "#968E72";
const color2 = "#fafcc4";

const navcolor1 = "#E9EB9E";
const navcolor2 = "#8a805b";

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

function scrollRedraw() {
    $('html').css('overflow', 'hidden').height();
    $('html').css('overflow-y', 'scroll')
    $('html').css('overflow-x', 'hidden')
    $('html').css('scroll-snap-type', 'y mandatory')
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
    $("html").addClass('color1')
})