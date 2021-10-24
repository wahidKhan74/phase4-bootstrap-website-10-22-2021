var Account = /** @class */ (function () {
    function Account(uid, username, balance, enabled) {
        this.uid = uid;
        this.username = username;
        this.balance = balance;
        this.enabled = enabled;
    }
    Account.prototype.showBalace = function () {
        return this.balance;
    };
    Account.prototype.depositAmount = function (amount) {
        return this.balance += amount;
    };
    Account.prototype.withdrawAmount = function (amount) {
        return this.balance -= amount;
    };
    return Account;
}());
var account = new Account(1000278, "Robbin Hood", 89787.67, true);
console.log(account);
console.log(account.uid);
console.log("The Balance : ", account.showBalace());
console.log("The Balance After Deposit : ", account.depositAmount(10000));
console.log("The Balance After withdraw : ", account.withdrawAmount(10000));
