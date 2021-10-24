function Account (id,name,balance,email) {
    this.id = id;
    this.name=name;
    this.balance = balance;
    this.email = email;
}


// add properties in prototype
Account.prototype.nationality = "Canadian";
Account.prototype.state = "Columbia";

// add methods in prototype
Account.prototype.showBalance = function () {
    return this.balance;
}

Account.prototype.deposit = function (amount) {
    return this.balance+=amount;
}



// console.log(Account);
var account1 = new Account(10001,"Mike Smith",200000.546, 'mike@gmail.com');
account1.username= "mike@123";
account1.nationality = "Indian";

var account2 = new Account(10002,"David Smith",100000.546, 'david@gmail.com');

//access properties & methods from prototype
console.log(account1.name);
console.log(account1.balance);
console.log(account1.nationality);
console.log(account1.state);
console.log(account1.showBalance());
console.log(account1.deposit(10000));
console.log(account1);



console.log(account2.name);
console.log(account2.balance);
console.log(account2.nationality);
console.log(account2.state);
console.log(account2.showBalance());
console.log(account2.deposit(10000));
console.log(account2);

