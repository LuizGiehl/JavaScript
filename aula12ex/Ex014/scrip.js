f
        document.body.style.backgrunction carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia. Agora são ${hora} horas`
        img.src = "fotomanha.png"ound = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `Boa Tarde. Agora são ${hora} horas`
    img.src = "fototarde.png"
    document.body.style.background = 'b9846f'
} else {
    msg.innerHTML = `Boa Noite. Agora são ${hora} horas`
    img.src = "fotonoite.png"
    document.body.style.background = '#515154'
}
}