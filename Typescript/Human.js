class Human {
    //constructor
    constructor(pid, pname, age) {
        this.pid = pid;
        this.age = age;
        this.pname = pname;
    }
    // es6 : new syntanx => get & set 
    get Id() {
        return this.pid;
    }
    set Id(pid) {
        this.pid = pid;
    }
    get Name() {
        return this.pname;
    }
    set Name(pname) {
        this.pname = pname;
    }
}
let human = new Human(10001, "John Smith", 31);
//set methods : use as peoperties
human.Id = 1000000111;
human.Name = "Tonny Stark";
//get methods : use as object properties
console.log(human.Id);
console.log(human.Name);
console.log(human);
