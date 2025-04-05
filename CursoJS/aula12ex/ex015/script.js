function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/bebe-m.png')
        }  else if (idade >= 10 && idade < 21) {
            //Jovem
        } else if (idade < 50) {
            //Adulto
        }
        else {
            //Idoso
        }
} else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
        }  else if (idade >= 10 && idade < 21) {
            //Jovem
        } else if (idade < 50) {
            //Adulto
        }
        else {
            //Idoso
        }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `<input type="button" value="Verificar" onclick="verificar()"> Detectamos ${genero} com ${idade} anos.`
}