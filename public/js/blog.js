const bufferedblog = JSON.parse(b64DecodeUnicode(blog))

$(document).ready(function(){
    const card = document.getElementById('card')
    $('html').css('overflow-y', 'hidden')
    card.childNodes[1].childNodes[1].childNodes[1].src = bufferedblog.img
    card.childNodes[1].childNodes[3].childNodes[1].innerHTML = bufferedblog.title
    card.childNodes[3].childNodes[1].innerHTML = new Date(Date.parse(bufferedblog.date)).toLocaleDateString()
    card.childNodes[3].childNodes[3].innerHTML = bufferedblog.content
    card.childNodes[3].childNodes[5].innerHTML = bufferedblog.author
    card.style.display = 'block'
    document.getElementById('card').style.animation = 'test 1s'
    document.getElementById('card').style.opacity = '1'
    $('html').css('overflow-y', 'scroll')
    console.log('Ready!')
})