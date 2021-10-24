class Account {

    public uid: number;
    private username: string;
    private balance: number;
    private enabled: boolean;
    public bankName: string;

    constructor(uid: number, username: string, balance: number, enabled: boolean) {
        this.uid = uid;
        this.username = username;
        this.balance = balance;
        this.enabled = enabled;
    }

    public showBalace(): number {
        return this.balance;
    }

    public depositAmount(amount: number): number {
        return this.balance += amount;
    }

    public withdrawAmount(amount: number): number {
        return this.balance -= amount;
    }

}

let account = new Account(1000278,"Robbin Hood",89787.67,true);
console.log(account);
console.log(account.uid);
console.log("The Balance : ",account.showBalace());
console.log("The Balance After Deposit : ",account.depositAmount(10000));
console.log("The Balance After withdraw : ",account.withdrawAmount(10000));
