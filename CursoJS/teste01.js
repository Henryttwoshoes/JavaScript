let valores = [8, 1, 7, 4, 2, 9];
valores.sort();
let c = 0;

let intervalo = setInterval(() => {
  console.log(valores);
  c++;

  if (c == 4) {
    clearInterval(intervalo);
  }
}, 1500);

/*
let counter = 0
function count() {
    console.log(counter++);

    if (counter > 5){
        clearInterval(ordem)
    }
}*/
