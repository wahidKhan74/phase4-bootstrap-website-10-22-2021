// function a resuable code block 
// syntax : function functionName(params) {  function body }

// zero params function
// function decleartion / definition
function showMessage() {
    console.log("Hello, welcome to Javascript !");
}


// one params function
function showName(name){
    console.log("Hello user, ",name);
}

// multi param function
function showData(name,age,email){
    console.log("Hi user, ",name);
    console.log("User age, ",age);
    console.log("User email, ",email);
}


// es6 : default param function
function showDetails(name="user",phone=1010101010){
    console.log("Hi user, ",name);
    console.log("User phone number, ",phone);
}


// function calling 
showMessage();
showName("John Smith");
showName("David Smith");
showName("Mike Smith");

console.log("-------------------");
showData("John Smith",35, "john@gmail.com");
console.log("-------------------");
showData("Marry Smith",85, "marry@gmail.com");
console.log("-------------------");
showData(100034311,"Fifty", true);

console.log("-------------------");
showData();
console.log("-------------------");
showData("David Miller");

console.log("-------------------");
showDetails("David Miller",'9090909090');
console.log("-------------------");
showDetails();