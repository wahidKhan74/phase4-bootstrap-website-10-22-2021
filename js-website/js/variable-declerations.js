//var : var keyword has function level scope
// let : let keyword has block level scope
// const : const keyword has block level scope but not reassignable.

function display() {

    var flag = true;
    //if block
    if (flag) {
        var itemOne = "Nike Shoes";
        let itemTwo = "Iphone 12 max pro";
        const itemThree = "Mac book xyz series";
        
        itemTwo ="One Plus Nord 5G";
        // itemThree ="Lenovo xyz series laptop.";  // Uncaught TypeError: Assignment to constant variable

        console.log(itemOne);
        console.log(itemTwo);
        console.log(itemThree);

    }
    console.log("--------------------");
    
    console.log(itemOne);
    // console.log(itemTwo);  // Uncaught ReferenceError: itemTwo is not defined
    // console.log(itemThree); // Uncaught ReferenceError: itemThree is not defined
}

display();