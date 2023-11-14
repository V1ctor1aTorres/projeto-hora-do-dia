function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <12) {
        //bom dia 
        img.src = 'imagens/manha1.png'
        document.body.style.background = '#d5bba0'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde1.png'
        document.body.style.background = '#bd933d'
    } else {
        //boa noite
        img.src = 'imagens/noite1.png'
        document.body.style.background = '#02254d'
    }
}
