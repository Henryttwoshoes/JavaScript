var idade = 20
console.log(`Você tem ${idade} anos`)
// Condição composta
if (idade <18) {
    console.log('Não vota')
} else if  (idade >=16 && idade <18) {
        console.log('Voto opcional')
} else {
            console.log('Voto obrigatório')
}