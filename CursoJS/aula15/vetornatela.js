let valores = [8, 1,7,4,2,9]
valores.sort()
console.log(valores)

/*for (let nv=0; nv < valores.length; nv++)
    console.log(`A posição ${nv} tem o valor ${valores[nv]}`)
*/

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}
