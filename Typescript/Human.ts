class Human {
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

    // es6 : new syntanx => get & set 
    public get Id():number {
        return this.pid;
    }
    public set Id(pid:number) {
       this.pid = pid;
    }

    public get Name():string {
        return this.pname;
    }
    public set Name(pname:string) {
       this.pname = pname;
    }
}

let human = new Human(10001,"John Smith",31);
//set methods : use as peoperties
human.Id=1000000111;
human.Name="Tonny Stark";
//get methods : use as object properties
console.log(human.Id);
console.log(human.Name);

console.log(human);
