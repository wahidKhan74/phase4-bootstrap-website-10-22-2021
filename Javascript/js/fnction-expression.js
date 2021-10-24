//function decleration  : by default fn decleration is hoisted 
showMessage();

function showMessage() {
    console.log("Hello, welcome to Javascript !");
}


// showData();  //Uncaught TypeError: showData is not a function
// function expresion : It is used with expression varaible syntax & it is not hoisted
    // > 1) labled function function expression
    // > 2) anonymous fubnctuion expression

// > 1) labled function function expression   
var showData = function show() {
    console.log("Hello , this is a sample labeled function expression !");
}

// > 2) anonymous fubnctuion expression
var showDetails = function () {
    console.log("Hello , this is a sample anonymous function expression !");
}

// > parametrised function expression 
var showAuthor = function (name,email) {
    console.log(`The Autor is ${name} and email is ${email}`);
}




//function calling
showMessage();

console.log(showData);
console.log(showDetails);

showData();
showDetails();

console.log("---------------");

showAuthor();
showAuthor("Mike William","mike@gmail.com");