function add(number1,number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
}

// add(45, 25);
var total = add(75, 25)
// console.log('total', total)

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
 var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log('Eating singaras', singaras)