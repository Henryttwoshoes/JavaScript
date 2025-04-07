let valores = [8,1,7,4,2,9]
valores.sort()


setInterval(() => {
    function ordem() {
        console.log(valores)
    
        return valores
    }
    console.log(valores)
}, 1500);


let counter = 0
var countinterval = setInterval(counter, 1000);
function count() {
    console.log(counter++);

    if (counter > 5){
        clearInterval(ordem)
    }
}