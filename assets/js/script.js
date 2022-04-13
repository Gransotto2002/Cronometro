let tempo = document.getElementById('tempo')
let hora = 0
let minuto = 0
let segundo = 0
let milisegundo = 0
let interval;

addTempoDom = () => {
    tempo.textContent = `
    ${hora < 10 ? '0'+hora : hora} : ${minuto < 10 ? '0'+minuto : minuto} : 
    ${segundo < 10 ? '0'+segundo : segundo} : ${milisegundo < 10 ? '0'+milisegundo : milisegundo}
    `
}
calculo = () => {
    milisegundo++
    if(milisegundo == 100){
        segundo++
        milisegundo = 0

        if(segundo == 60){
            minuto++
            segundo = 0
            if(minuto == 60){
                hora++
                minuto = 0
            }
        }
    }
}


init = () => {
     interval = setInterval(() => {
        calculo()
        addTempoDom()

    stop = () => {
        clearInterval(interval)
    }

    reset = () => {
        clearInterval(interval)
        hora = 0
        minuto = 0
        segundo = 0
        milisegundo = 0
        addTempoDom()
    }

}, 10)}

