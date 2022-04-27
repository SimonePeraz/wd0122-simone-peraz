function startShopping(){

    let budget = 1000;
    let buy = 0;


    while(budget > 0){

        let price = Math.floor(Math.random()*100);

        if (price <= budget){
            buy += 1;
            budget -= price;

            document.querySelector('#myBudget').innerHTML += '<p> Total amount: € ' + price + '<br>New budget: € ' + budget + '</p>';
        }

        if(budget <500 && budget >400){
            document.querySelector('#myBudget').innerHTML += '<p> Total amount: € ' + price + '<br>New budget: € ' + budget + '</p>';
            document.querySelector('#msg1').innerHTML = 'You spent half of your money: be careful!';
        }

        if(budget < 200){
            document.querySelector('#msg2').innerHTML = 'You have less than 200€: stop waisting your money!';
        }

        if(budget == 0){
            document.querySelector('#msg3').innerHTML = 'Congratulations: now you are poor!';
            break;
        }

    }

    document.querySelector('#myBudget').innerHTML += '<p>You bought: '+ buy + 'items </p>'
}