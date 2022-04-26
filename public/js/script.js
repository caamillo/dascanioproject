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
        console.log('main')
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
        console.log('blog')
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
        console.log('about')
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
    rect[1] = rect[1].splice(1)
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
                document.getElementsByClassName("blogdiv")[1].scrollIntoView()
                break
            case 'about':
                document.getElementById("aboutdiv").scrollIntoView()
                break
        }
        changeActive(item.childNodes[1])
    }
})

function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

Element.prototype.insertChildAtIndex = function(child, index) {
    if (!index) index = 0
    if (index >= this.children.length) {
      this.appendChild(child)
    } else {
      this.insertBefore(child, this.children[index])
    }
}

const maxdesktop = 1005
var lastres = null

function buildBlog(){
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width
    if (lastres != null)
        if (width >= maxdesktop && lastres) return
            else if (width < maxdesktop && !lastres) return
    const blogs = JSON.parse(b64DecodeUnicode(blog))
    const posts = []
    for (let b of blogs) posts.push(b)
    posts.filter(item => item.date != null).sort((a,b) => b.date - a.date)
    const postperpage = width >= maxdesktop ? 3 : 2
    const lastpage = (Math.ceil(posts.length/postperpage) * postperpage) / postperpage

    // Delete posts

    const postedcards = document.getElementsByClassName('card')
    while (postedcards.length > 1) postedcards[0].parentNode.removeChild(postedcards[0])
    postedcards[0].style.display = 'none'
    const sections = document.getElementsByClassName('blogdiv')
    while (sections.length > 1) sections[0].parentNode.removeChild(sections[0])
    sections[0].style.display = 'none'

    //Create posts

    for(var i = 0; i < lastpage; i++){
        const section = document.getElementsByClassName('blogdiv')[0]
        const clonesection = section.cloneNode(true)
        clonesection.style.display = 'flex';
        const container = document.getElementsByClassName('container')[0]
        container.insertChildAtIndex(clonesection,container.children.length - 1)
        const cards = document.getElementsByClassName('cards')[i + 1]
        for(var j = 0; j < postperpage; j++){
            const idx = i * postperpage + j
            if (idx >= posts.length) break
            const template = document.getElementsByClassName('card')[0]
            const clone = template.cloneNode(true)

            clone.style.display = width >= maxdesktop ? 'inline-block' : 'block'
            clone.childNodes[1].src = posts[idx].img
            clone.childNodes[3].childNodes[1].innerHTML = posts[idx].title
            clone.childNodes[3].childNodes[3].innerHTML = posts[idx].content.substr(0,50) + (posts[idx].content.length > 50 ? ' ...' : '')
            cards.appendChild(clone)
        }
    }
    lastres = !lastres
}

$(window).resize(function(){
    buildBlog()
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
    buildBlog()
})