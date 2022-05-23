let p1:number = 5;
console.log(p1);

let p2:number = 27;
console.log(p2);

let p3:number = Math.floor(Math.random()*(100-1)+1)
console.log(p3);




function confronta(){
    if(p1 === p3){
        console.log('hai azzeccato');
        
    }else{
        console.log('hai sbagliato');
    }
        
    if(p2 === p3){
        console.log('hai azzeccato');
        
    }else{
        console.log('hai sbagliato');
    }
    if(p3-p1 < p3-p2){
        console.log('p1 ci sei andato più vicino');
        
    }else{
        console.log('p2 ci sei andato più vicino');
        
    }
}
console.log(confronta());
//=================================
alert('Who is going to win?')
let pl1:any = prompt('Player1 says:');
let pl2:any = prompt('Player2 says:');
let nrandom:any = Math.floor(Math.random()*(100-1)+1);
let dif1:any;
let dif2:any;
if(pl1 == nrandom){
    alert('Player1 won!')
}else{
    dif1 = Math.abs(nrandom - pl1)
}

if(pl2 == nrandom){
    alert('Player2 won!')
}else{
    dif2 = Math.abs(nrandom - pl2)
}

if(dif1 < dif2){
    alert('No one got the random number, but Player1 got closer')
}else{
    alert('No one got the random number, but Player2 got closer')

}





//=================================
// function compare(){
//     let p1:any = document.getElementById('p1');
//     let p2:any = document.getElementById('p2');
//     let p3:number = Math.floor(Math.random()*(100-1)+1);
//     let result:any = document.getElementById('result');
//     let diff1:number = Math.abs(p3 - p1);
//     let diff2:number = Math.abs(p3 - p2);
//     let submit:any = document.getElementById('result')

//     if(diff1 < diff2){
//         document.write('p1 got closer than p2');
//     }else{
//         document.write('p2 got closer than p1');
//     }



// }




