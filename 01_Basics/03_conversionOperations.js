let score1 = 33
console.log(score1, typeof score1) // value is 33 and type is number
let score2 = "33"
console.log(score2, typeof score2) // value is 33 and type is string
let score3 = "33abc"
let valueInNumber = Number(score3)
console.log(valueInNumber, typeof valueInNumber);  // value is NaN and type is number (this produced ambiguity)
let temperature = null
console.log(temperature, typeof temperature); // value is null, and type is object
let no = Number(temperature)
console.log(no, typeof no); // value is 0, and type is number (why, temperature which hold null has been converted to no with zero in value, this also produced ambiguity)
let testUndefined = undefined
console.log(testUndefined, typeof undefined); // value is undefined, and type is also undefined.
let notestUndefined = Number(testUndefined)
console.log(notestUndefined , typeof notestUndefined ); // value is NaN but type if number (which creates ambiguity)
let isLoggedIn = true
console.log(isLoggedIn, typeof isLoggedIn); // value is true, and type is boolean
let noIsLoggedIn = Number(isLoggedIn)
console.log(noIsLoggedIn, typeof noIsLoggedIn); // value is 1, and type is number

// following values will be available when converting to Number from (string, or boolean)
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

// now, converting to Boolean.
let isConfirmed = true
let booleanIsConfirmed = Boolean(isConfirmed)
console.log(booleanIsConfirmed, typeof booleanIsConfirmed); // value true, and type is boolean

// true => true, boolean
// fasle => false, boolean
// "" => false, boolean
// "majid" => true, boolean 
// null => false, boolean
// undefine => false, boolean

// now, string conversion.

let someNumber = "33";
let stringNumber = String(someNumber);
console.log(stringNumber, typeof stringNumber); // value 33, and type is string.



