var Person = /** @class */ (function () {
    //constructor
    function Person(pid, pname, age) {
        this.pid = pid;
        this.age = age;
        this.pname = pname;
    }
    // get & set 
    Person.prototype.getId = function () {
        return this.pid;
    };
    Person.prototype.setId = function (pid) {
        this.pid = pid;
    };
    Person.prototype.getName = function () {
        return this.pname;
    };
    Person.prototype.setName = function (pname) {
        this.pname = pname;
    };
    return Person;
}());
var person = new Person(10001, "John Smith", 31);
//set methods
person.setId(1000000111);
person.setName("Tonny Stark");
console.log(person.getId());
console.log(person.getName());
console.log(person);
