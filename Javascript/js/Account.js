//declerative class syntax
class Account {
    // properties
    id;
    name;
    email;
    balance;

    // function
    //show balance
    showBalnce() {
        console.log(`Hello user ${this.name}, you have a balance ${this.balance}`);
    }

    // deposit
    deposit(amount) {
        return this.balance+=amount;
    }

    // deposit
    withdraw(amount) {
        return this.balance-=amount;
    }
}


let account =  new Account();
account.id = 1000001;
account.name="Mike Smith";
account.balance =3465567.567;
account.email ="mike@gmail.com";

console.log(account);

//access properties
console.log(account.id);
console.log(account.name);
console.log(account.balance);

//access methods
account.showBalnce();
console.log("After Deposit : ",account.deposit(20000));
console.log("After Withdraw : ",account.withdraw(20000));


