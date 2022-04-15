function addNumber(bottone){
    let number = (bottone.innerHTML);

    let display = document.querySelector('#display');

    display.value += number;
}

function result(){
    let display = document.querySelector('#display');
    
    let totale = eval(display.value);
    
    display.value = totale;

}

function canc(){
    let display = document.querySelector('#display');

    display.value = ' ';
}

function multiply(){
    let display = document.querySelector('#display');

    display.value += '*';

}