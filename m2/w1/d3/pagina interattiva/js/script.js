function toggleFunction(){
    document.querySelector('#myDropdown').classList.toggle('show')
}

//=======================================================================

function ingrandisci(){
    let x = document.querySelector('#pag').style.fontSize = '100px';

}

function colora(){
    let x = document.querySelector('#pag').style.color = 'red';
}

function maiusc(){
    let x = document.querySelector('#pag').style.textTransform = 'uppercase';
}

function nasc(){
    let x = document.querySelector('#pag').style.opacity = '0';
}

function mostra(){
    let x = document.querySelector('#pag').style.opacity = '1';
}

//=========================================================================
let lista = document.querySelectorAll('li');

for (var i = 0; i < lista.length; i++) {

    lista[i].addEventListener('mouseover', function() {
        this.classList.add('selezione');
    });

    lista[i].addEventListener('mouseout', function() {
        this.classList.remove('selezione');
    });

    lista[i].addEventListener('click', function() {
        this.classList.toggle('fatto');
    });
}