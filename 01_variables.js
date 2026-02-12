const accountId = 144453
let accountEmail ="kumar@gmail.com"
var accountPassword="657432"
accountCity="Bangalore"
let accountState;

// accountId= 2 not allowed
accountEmail="goa@gmail.com"
accountPassword="7256268"
accountCity="goa"
// console.log(accountId);

/*
preffered to not use var in javascript
because the issue of block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])