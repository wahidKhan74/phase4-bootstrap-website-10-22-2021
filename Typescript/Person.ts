class Person {
    //properties decleration
    private pid:number;
    private pname:string;
    private age:number;
    //constructor
    constructor(pid:number,pname?:string,age?:number){
        this.pid = pid;
        this.age = age;
        this.pname = pname;
    }

    // get & set 
    public getId():number {
        return this.pid;
    }
    public setId(pid:number):void {
       this.pid = pid;
    }

    public getName():string {
        return this.pname;
    }
    public setName(pname:string):void {
       this.pname = pname;
    }
}

let person = new Person(10001,"John Smith",31);
//set methods
person.setId(1000000111);
person.setName("Tonny Stark");

console.log(person.getId());
console.log(person.getName());

console.log(person);
