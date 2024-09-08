const accountId = 23232323
let accountEmail = "abcd@gamil.com"
var accountPassword = "232323" // not a good practics to use var type of variable.
accountCity ="Lahore"
let accountStateUndefined ;
let accountStateNull = null; 
let accountStateEmptyString = "";

// accountId = 2; // not allowed to change value of constant variables.
console.log("accountId is: " +  accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hello@gmail.com"
accountPassword = "333444"
accountCity ="KHI"


console.table([accountId, accountEmail, accountPassword, accountCity])
console.table([accountStateUndefined, accountStateNull, accountStateEmptyString])
