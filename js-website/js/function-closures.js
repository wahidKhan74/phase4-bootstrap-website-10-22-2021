// Javascript nested function is a clouser function.
var firstName = "John";    // global varaible.

function makeFullName() {
    var lastName = "Smith";  // local varaible // outer variable

    // nested function : (closures).
    function combine() {
        var middleName = "William"; // local variable // inner variabe
        return `${firstName} ${middleName} ${lastName}`;
    }

    return combine();
}

console.log(makeFullName());


// clouser is simple nested function which has access to three diffrenet scope chain
// 1. inner varaible 2. outer varaible 3. global varible.