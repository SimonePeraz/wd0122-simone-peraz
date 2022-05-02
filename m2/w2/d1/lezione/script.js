let next = document.querySelector('#next')

next.addEventListener('click', function(){
    window.history.forward()
})

let prev = document.querySelector('#prev')

next.addEventListener('click', function(){
    window.history.back()
})

//posso aggiungere manualmente uno step di navigazione

let card1 = document.querySelector('#card1')
card1.addEventListener('click', function(){
    history.pushState({},'', 'index.html#card1')

})