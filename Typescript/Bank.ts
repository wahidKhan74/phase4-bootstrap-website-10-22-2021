class Bank  {
    public name:string;
    public address:string;

    constructor(name:string,address:string) {
        this.name = name;
        this.address = address;
    }
}

class BOA extends Bank {
    public assets:number;
    public accounts:number;

    constructor(name:string,address:string,assets:number,accounts:number) {
        super(name,address);
        this.assets = assets;
        this.accounts = accounts;
    }

    public showDetails():string {
        return `The BOA : ${this.name} & assets : ${this.assets} & total accounts ${this.accounts}`
    }
}


class BOI extends Bank {

    public assets:number;
    public accounts:number;

    constructor(name:string,address:string,assets:number,accounts:number) {
        super(name,address);
        this.assets = assets;
        this.accounts = accounts;
    }

    public showDetails():string {
        return `The BOI : ${this.name} & assets : ${this.assets} & total accounts ${this.accounts}`
    }
}

let boa = new BOA("Bank Of America","America(US)",89545464,53445654);
console.log(boa.showDetails());
console.log("------------------");
let boi = new BOI("Bank Of India","India(IN)",4354565467,423459087);
console.log(boi.showDetails());
