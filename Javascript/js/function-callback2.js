// callback : callback is a function that is passed as an argument to another.


var y = function(callback){
    console.log("I am a processing function ! - Y ");
    // console.log(callback);
    callback();
}


// console.log(x);
y(function () {
    console.log("I am a fn called from another function!- X");
    return 5000;
});    // calling a function with another function as argument.

//Note : return value is always associated with function call.
// function call
// console.log(x());