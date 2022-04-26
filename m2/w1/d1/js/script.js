let data = new Date()
document.write(data)

let anno = data.getFullYear()
document.write(`<br>`+ `<br>`+  anno)

let numeroMese = data.getMonth()
document.write(`<br>`+ `<br>`+  numeroMese)

let giornoDelMese = data.getDate()
document.write(`<br>`+ `<br>`+  giornoDelMese)

let ora = data.getHours()
document.write(`<br>`+ `<br>`+  ora)

let minuti = data.getMinutes()
document.write(`<br>`+ `<br>`+  minuti)

let secondi = data.getSeconds()
document.write(`<br>`+ `<br>`+  secondi)

let milliSecondi = data.getMilliseconds()
document.write(`<br>`+ `<br>`+  milliSecondi)

let numGiornoSettimana = data.getDay()
document.write(`<br>`+ `<br>`+  numGiornoSettimana) //0 domenica, 1 lun, 2 mart

let timestamp = data.getTime()
document.write(`<br>`+ `<br>`+  timestamp)

//
let year = new Date()
document.write(`<br>`+ `<br>`+ `millisecondi a partire da 1 gen 1970 ` + ` ` + year.setFullYear(2020)) //restituito in millisecondi a partire dal 1970

//
let xx = data.toLocaleDateString()
document.write(`<br>`+ `<br>`+  xx)



//
setInterval(function(){
    let n = new Date();
    document.querySelector('#minuti').innerHTML = n.getMinutes()
},60)

setInterval(function(){
    let x = new Date();
    document.querySelector('#secondi').innerHTML = x.getSeconds()
},1000)

setInterval(function(){
    let y = new Date();
    document.querySelector('#ore').innerHTML = y.getHours()
},60)