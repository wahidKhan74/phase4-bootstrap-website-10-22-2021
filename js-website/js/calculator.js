//arithmatic calculator  : without callback
function calculator (num1,num2,calcType){
    if(calcType==="add") {
        return num1 + num2;
    } else  if(calcType==="sub") {
        return num1 - num2;
    } else if(calcType==="mul") {
        return num1 * num2;
    } else  if(calcType==="div") {
        return num1 / num2;
    }
}

var x = 1000;
var y = 500;

var response = calculator(x,y,"add");
console.log(`Addtion ${x} + ${y} = ${response}`);


console.log(`Substraction ${x} - ${y} = ${calculator(x,y,"sub")}`);

console.log(`Multiplication ${x} * ${y} = ${calculator(x,y,"mul")}`);

console.log(`Division ${x} / ${y} = ${calculator(x,y,"div")}`);
