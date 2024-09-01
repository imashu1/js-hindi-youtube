const accountId = 123098
let accountEmail = "ashu@google.com"
var accountPassword = "458976"
accountCity = "Patna"
let accountState;

// accountId = 2 //not allowed


accountEmail = "rjkhf@sbd.com"
accountPassword = "458345"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
