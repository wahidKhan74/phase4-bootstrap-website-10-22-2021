// constrctor : It is a blueprint to create multipe dynamic objects

// create object js
user = {
    id:100,
    name:'john',
    age:30,
    email:'john@gmail.com'
}

function User(id,name,age,email){
    this.id= id;
    this.name= name;
    this.age= age;
    this.email = email;
}

function Account (id,username,balance){
    this.id = id;
    this.username = username;
    this.balance = balance;
}



var user1 = new User(1001,"Mike",30,'mike@gmal.com');
var user2 = new User(1002,"David",30,'david@gmal.com');


console.log(user1);
console.log(user2);


var account1 = new Account(1000001,"sam@123",2335456.546);
var accountn = new Account(1000002,"mike@123",34546567.567);

console.log(account1);
console.log(accountn);

