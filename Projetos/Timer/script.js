const Days = document.getElementById('days')
const Hours = document.getElementById('hours')
const Minutes = document.getElementById('minutes')
const Seconds = document.getElementById('seconds')

const targetDate = new Date('August 15 2025 00:00:00').getTime() /* cria um objeto de data para o dia 15 de Agosto

    "new" cria um novo objeto, nesse caso da classe "Date"
*/

function timer (){
    const currentDate = new Date().getTime()/* pega o timestamp atual em milissegundos */
    const distance = targetDate - currentDate

    const days = Math.floor(distance / 1000 / 60 / 60 / 24)
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24
    /* Para achar o restante em horas, é preciso pegar o resto da divisão por 24 */
    const minutes = Math.floor(distance / 1000 / 60) % 60
    const seconds = Math.floor(distance / 1000) % 60

    Days.innerHTML = days
    Hours.innerHTML = hours
    Minutes.innerHTML = minutes
    Seconds.innerHTML = seconds

    if(distance < 0){
        Days.innerHTML = "0"
        Hours.innerHTML = "0"
        Minutes.innerHTML = "0"
        Seconds.innerHTML = "0"
}
}
setInterval(timer, 1000)