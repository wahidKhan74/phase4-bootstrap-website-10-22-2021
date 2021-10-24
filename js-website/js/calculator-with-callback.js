let add = function (num1, num2) {
    return num1 + num2;
}

let sub = function (num1, num2) {
    return num1 - num2;
}

let mul = function (num1, num2) {
    return num1 * num2;
}


let div = function (num1, num2) {
    return num1 / num2;
}

let avg = function (num1, num2) {
    return (num1 + num2)/2;
}

//arithmatic calculator
function calculator(num1,num2,callback) {
    return callback(num1,num2);
}



var x = 1000;
var y = 500;

var response = calculator(x,y,add);
console.log(`Addtion ${x} + ${y} = ${response}`);

console.log(`Substraction ${x} - ${y} = ${calculator(x,y,sub)}`);

console.log(`Multiplication ${x} * ${y} = ${calculator(x,y,mul)}`);

console.log(`Division ${x} / ${y} = ${calculator(x,y,div)}`);

console.log(`Average ${x} & ${y} = ${calculator(x,y,avg)}`);