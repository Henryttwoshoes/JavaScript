function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var periodo = 'manhã'
if (hora < 12){
    periodo = 'manha'
}
if (hora >= 12 && hora < 18){
    hora = hora - 12
    periodo = 'tarde'
}
if (hora >= 18){
    hora = hora - 12
    periodo = 'noite'
}

msg.innerHTML = `Agora são ${hora} da ${periodo}.`
if(periodo == 'manha'){
    img.src = 'fotomanha.png'
        msg.innerHTML += ' Bom dia!'
}
else if (periodo == 'tarde'){
    img.src = 'fototarde.png'
    document.body.style.background = '#c4a87b'
    msg.innerHTML += ' Boa tarde!'
}
else if (periodo == 'noite'){
    img.src = 'fotonoite.png'
    document.body.style.background = '#706b8d'
    msg.innerHTML += ' Boa noite!'
    
}

}