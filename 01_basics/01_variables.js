const accountId = 12345
let accountEmail ="kai@gmail.com"
var accountPassword ="5656"
accountCity ="Jorhat"
let accountState;

// accountId = 2   // not allowed 

accountEmail = "h1h1h@gmail.com"
accountPassword = "653124"
accountCity = "Guwahati"


/*
 Prefer not to use var
 because of issue in block scope and funtional scope
*/


console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
