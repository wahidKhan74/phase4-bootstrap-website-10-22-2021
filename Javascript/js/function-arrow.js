// Arrow function : new sytanx from es6 onwards for decleration function 

// zero parm arrow function.
var showData = () => {
    console.log("Hello , Arrow  function expression !");
}

// zero param one line arrow 
var showDetails = () => console.log("Hello , Arrow One line function!");

var showAuthor = (name,email) => {
    console.log(`The Autor is ${name} and email is ${email}`);
}

var showName = (name) =>  name ;   // one liner arrow function with return value.

showData();
showDetails();
showAuthor("John SMith",'john@gmail.com');

console.log(showName("John Smith"));
