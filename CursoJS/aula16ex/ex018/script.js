let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

let arr = document.getElementById('arr')


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        var item = document.createElement('option')
        item.text = `Número ${num.value} adicionado`
        valores.push(Number(num.value))
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()

}

function finalizar(){
    if (valores.length == 0){
        window.alert('Valores insuficientes')    

    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        media += valores[pos]/valores.length
        // ou
        // let media = soma / tot
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerText = `Ao todo temos ${tot} valores cadastrados`
        res.innerHTML += `<br>O maior valor informado é ${maior}`
        res.innerHTML += `<br>O menor valor informado é ${menor}`
        res.innerHTML += `<br>A soma de todos os números é ${soma}`
        res.innerHTML += `<br>A média dos valores é ${media}`
    }
    }