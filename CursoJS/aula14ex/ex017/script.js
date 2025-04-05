function tabuada(){
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    }
    else {
        var n = Number(num.value)
        res.innerText = `A Tabuada de ${n} é:`
        for(c = 1; c <= 10; c++)
            res.innerHTML += `<br> ${n} x ${c} = ${n*c}`
    }
}