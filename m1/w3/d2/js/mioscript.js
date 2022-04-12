// variabili

var nome = 'simone';
var cognome = 'peraz';
var eta = 28;

console.log(nome)
console.log(cognome)
document.write(eta)

var nome = 'simone';
var cognome = 'peraz';
var eta = '28 anni';
var dati = 'simone ' + 'peraz ' + '28 anni';
console.log(dati);

var info = `${nome} ${cognome} ${eta};`
console.log(info);
console.log(info[0]);
console.log(info.length);
var ultimaLettera = info.length -1;
console.log(ultimaLettera);

var saluto = 'ciao';
var domanda = 'come stai?';
var frase = `ciao ${domanda}`;
document.write(frase);

var abcd = 'oila';
{
    console.log(abcd);
}

{
    var tre = '<br> 3';
}
document.write(tre);

var x = 6;
var y = 8;
{
    console.log(x*y);
    console.log(x+y);
}

var z = 6;
var z = 26; //var sovrascrivibile
console.log(z);

// let

// {
// let num = 8;
// }
// console.log(num); errore per let ha scope locale, ed essendo tra {} il console.log non può richiamarla.

// let num2 = 67;
// let num2 = 70;
// console.log(num2); let non sovrascrivibile

//const

const reset = 'sp177';
// const reset = 'spp88'; const non sovrascrivibile
console.log(reset);

// {
//     console.log(deb);
// }
// const deb = 4567;  const ha scope locale.

const OBJ = {
    nome: 'simone'
}
console.log(OBJ)
OBJ.nome = 'luca'       //posso modificare proprietà oggetto anche se in una const
console.log(OBJ)  

// conversioni

var n = 7;
var t = '7';
var t2 = '4€';
var sumNt = n+t;
console.log(sumNt) //sommati come se fossero due testi (+ è concatenamento, oltre che somma), quindi 7 vicino 7 = 77
var sumNt2 = t2+n;
console.log(sumNt2);
var perNt = n*t;
console.log(perNt);
console.log(t2*t); //non definito perchè non ha senso moltiplicare 2 stringhe
console.log(n*t); // * moltiplica, quindi stringa '7' viene letto come numero e moltiplicato per l'altro 7 = 49.


var names = 'simone, giulia, ';
names += 'silvano';
document.write(names);

let numbers = 44;
numbers += 36;
console.log(numbers);
numbers *= 2;
console.log(numbers); // fa prima la somma tra 44 e 36 = 80, poi moltiplica 80*2=160.
numbers += '6';
console.log(numbers); //aggiunge il 6 dopo il 160 come se fosse una stringa = 1606.
numbers *= '3'; //moltiplica il 1606*3(come se fosse un numero)=4818.
console.log(numbers);
numbers += 2;
console.log(numbers);

var arr = ['hey', 'quanti anni hai?', 28];
console.log(arr);
console.log(arr.length); //conta quanti elementi dentro array.

//boolean

var bool = false;
var phrase = 'il bool è ' + bool + '<br>';
console.log(phrase);
let nm = 4;
let boolean = true;
let moltBool = nm*boolean; //4 perchè boolean se vero=1 quando si moltiplica.
console.log(moltBool);
let sumBool = nm+boolean;
console.log(sumBool);
var nmb = 6;
var molBool = bool*nmb;
console.log(molBool);//0 perchè boolean se false=0 quando si moltiplica.

//function

function f(){
    var xx = 10;
    let yy = 20;
}
console.log(f);

//if

var yyy = 3
var comparazione = yyy < 5;
console.log(comparazione);

if (yyy < 5){
    console.log('Y è minore di 5')
} else {
    console.log('Y è maggiore di 5')
}


var ora = 18
if(ora <= 18){
    document.write('<br>good day')
} else {
    document.write('<br>bad day')
}


var age = prompt('')
if(age <= 8){
    document.write('<br>child')
}else if (age <=15) {
    document.write('<br>kid')
}else{
    document.write('<br>man')
}





