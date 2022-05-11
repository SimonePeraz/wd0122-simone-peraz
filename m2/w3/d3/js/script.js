fetch("json/discografia.json")
.then(res =>{
    console.log(res);
    return res.json();
})

//session storage===========================================

let first = document.querySelector('#first');
let bottone1 = document.querySelector('#scrivi');
let bottone2 = document.querySelector('#cancella');
let titolo = document.querySelector('#titolo');

bottone1.addEventListener('click', function(e){

    e.preventDefault()//per evitare il refresh della pagina quando clicki nel caso di un btn

    sessionStorage.setItem("nome", first.value);//settare un item con coppia chiave valore nel sessionStorage
    titolo.innerHTML = "ciao sono " + sessionStorage.getItem("nome")
})

bottone2.addEventListener('click', function(e){

    e.preventDefault()
    sessionStorage.clear()
    titolo.innerHTML = "No data"
    first.value = ""
})

//local storage===========================================


let bottone3 = document.querySelector('#write');
let bottone4 = document.querySelector('#delete');


bottone3.addEventListener('click', function(e){

    e.preventDefault()

    localStorage.setItem("nome", first.value);
})

bottone4.addEventListener('click', function(e){
    
    e.preventDefault()
    localStorage.clear()
    titolo.innerHTML = "No data"
    first.value = ""
})

titolo.innerHTML = "ciao sono " + localStorage.getItem("nome")


var timer = document.querySelector('#timer');
// let i = setInterval(function(){

//     i++

//     sessionStorage.setItem('tempo',i)
//     timer.innerHTML = sessionStorage.getItem('tempo')

//     localStorage.setItem('tempo',i)

// },1000);

setInterval(function(){
    s++
    sessionStorage.setItem('tempo',s)
    timer.innerHTML = 'sei in sessione da '+ sessionStorage.getItem('tempo')+' secondi'
},1000)

window.onload =  function(){
    if(sessionStorage.)
}