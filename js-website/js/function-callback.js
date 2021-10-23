// callback : callback is a function that is passed as an argument to another.

// function expression
var x = function () {
    console.log("I am a fn called from another function!");
    return 5000;
}

var y = function(callback){
    console.log("I am a processing function !");
    // console.log(callback);
    callback();
}


// console.log(x);
y(x);    // calling a function with another function as argument.

//Note : return value is always associated with function call.
// function call
// console.log(x());