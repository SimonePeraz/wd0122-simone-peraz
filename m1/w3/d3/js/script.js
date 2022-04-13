//calcolo range anni

function anni(dataNascita, annoAttuale = 2022){
    return annoAttuale - dataNascita
}

var risultato = anni(1994);
console.log(risultato);
var risultato = anni(1830,2022)
console.log(risultato);


var age = (a,b) => a - b; //funzione freccia
console.log(age(2022,1986));


function kmPercorsi(a, b, c) {
    return a - (b + c);
}
console.log(kmPercorsi(100,30,47));

let km = (a,b,c) => a - (b + c);//funzione freccia
console.log(km(100,20,38));


//operatori di comparazione
 let x = 2;
 let y = '2';

console.log(x == y); //true perchè num uguali
console.log(x === y);//false perchè uno è num l'altro è stringa

let w = 'ciao';
let z = '3';

console.log(x !== y);//true perchè x NON E' uguale a y

let xx = 'simone';
let yy = 'Simone';
console.log(xx === yy);//false perchè una iniza S maiuscola e 1 minuscola
console.log(xx === yy);//false perchè una iniza S maiuscola e 1 minuscola


var abc = 45;
var def = 37;
console.log(abc <= def);//false 45 > 37

var ghi = 40;
var jkl = 40;
console.log(ghi >= jkl);//true perchè uguali
console.log(ghi != jkl);//false perchè uguali


if(70 >= 60){
    console.log('maggiore')
}else{
    console.log('minore')
}

// funzione dentro funzione 
function kmPercorsi(a, b, c) {
    return a - (b + c);
}
console.log(kmPercorsi(100,30,47));

function tempoViaggio (x, y, z, v){
    var k = kmPercorsi(x, y, z);
    var h = k / v;
    return h
}

console.log(tempoViaggio(100,30,47,50))


function siv (d,e,f){
    return d * e / f
}
console.log(siv(6,7,4))

function cane(g,h,i,l){
    var j = siv(g,h,i);
    var k = j * l
    return k
}
    
console.log(cane(6,7,4,5));




