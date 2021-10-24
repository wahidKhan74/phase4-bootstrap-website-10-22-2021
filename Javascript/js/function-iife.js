// IIFE : Imediately invoked function expression -> self excuting anonymous function

(function() {
    console.log("I am a Imediately invoked function expression");
})();

var age = 100;
(function(){
    var username= "John Smith";
    console.log(username);
    function display(name,age,gender) {
        console.log(`User details are name : ${name} , age:${age} , gender:${gender}`);
    }
    display(username, age, 'male');
})();