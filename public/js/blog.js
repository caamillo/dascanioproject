const bufferedblog = JSON.parse(b64DecodeUnicode(blog))

$(document).ready(function(){
    const card = document.getElementById('card')
    card.childNodes[1].childNodes[1].childNodes[1].src = bufferedblog.img
    card.childNodes[1].childNodes[3].childNodes[1].innerHTML = bufferedblog.title
    card.childNodes[3].childNodes[1].innerHTML = new Date(Date.parse(bufferedblog.date)).toLocaleDateString()
    card.childNodes[3].childNodes[3].innerHTML = bufferedblog.content
    card.childNodes[3].childNodes[5].innerHTML = bufferedblog.author
    console.log('Ready!')
})