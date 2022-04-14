let stringa = 'Oggi il sole splende e gli uccellini cinguettano.'
let iniziale = stringa.indexOf('Oggi')
console.log(iniziale)
let finale = stringa.indexOf('cinguettano')//inizia a 37
console.log(finale)
let lunghezza = stringa.length
console.log(lunghezza)//49 tra caratteri e spazi

// let ultimo = stringa.lastIndexOf('stringa',0) ??
// console.log(ultimo)//-1 ??????



let stringa2 = 'Sabato andrò a scalare a Crni Kal.'
let posiz = stringa2.slice(4,10)//estrae da-a
console.log(posiz)
let posiz2 = stringa2.slice(-7,-2)
console.log(posiz2)
let posiz3 = stringa2.substring(15)//estrae tutto da-in poi
console.log(posiz3)
let posiz4 = stringa2.substr(10,6)// estrae a partire dal 10 i 6 caratteri successivi
console.log(posiz4)


let stringa3 = 'Dopo ndarò in baracca reggae a Barcola.'
let maiuscolo = stringa3.toUpperCase()
console.log(maiuscolo)
let minuscolo = stringa3.toLowerCase()
console.log(minuscolo)


let stringa4 = 'A Pasquetta si gliglia.'
let lista = stringa4.split('')
console.log(lista)
let uniti2 = lista[0] + lista[8]
console.log(uniti2)



// array di persone

let persone = [
    'ame',
    'nick',
    'sara',
    'ste',
    'cris'
]

let terzo = persone[2]
console.log(terzo)
let eliminaPersona = persone.pop()
console.log(eliminaPersona)
let aggiungiPers = persone.push('dorig')
console.log(aggiungiPers) //perchè 5? e non 'dorig'
let primoEliminato = persone.shift()
console.log(primoEliminato)
let aggiuntoPrimo = persone.unshift()
console.log(aggiuntoPrimo)

let nuovaLista = persone.splice(1,'reghi',3,4,'giulia')
console.log(nuovaLista.length)


let persone2 = [
    'mauro',
    'jack',
    'beppe',
    'dobri'
]

let personeTot = persone + persone2.slice(2,3)
console.log(personeTot)





function sommaArray(x,y,z){
    return x + y + z
    
}
let res = sommaArray(persone2.push('luca'),persone.unshift(),6)
console.log(res)








