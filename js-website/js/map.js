var phoneBook = new Map();
phoneBook.set("John",9989898994);
phoneBook.set("Mike",9989898995);
phoneBook.set("David",9989898996);
phoneBook.set("William",9989898997);
phoneBook.set("Sam",9989898999);


console.log(phoneBook);

console.log("Davids Number :" , phoneBook.get("David"));
phoneBook.delete("William");
console.log(phoneBook.keys());
console.log(phoneBook.values());

console.log("---------------");

let userMap = new Map();

userMap.set("firstName","Robbin");   // key is string & value is string
userMap.set("lastName","Hood");      // key is string & value is string
userMap.set(1,"Rank");               // key is number & value is string
userMap.set(true,"Married");         // key is boolean & value is string
userMap.set([],"Empty Array");         // key is array & value is string

let emptyObj = {};
userMap.set(emptyObj,"Empty Object");         // key is object & value is string


console.log(userMap);
console.log(userMap.get("firstName"));
console.log(userMap.get("lastName"));
console.log(userMap.get(true));
console.log(userMap.get(1));
console.log(userMap.get({}));  // undefined : object !== {}
console.log(userMap.get(emptyObj));  

//iterate over map
for(const key of userMap.keys()){
    console.log("----------------");
    console.log("Key : ",key);
    console.log("Value : ",userMap.get(key));
}
