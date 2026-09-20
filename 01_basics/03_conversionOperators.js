// Conversion from string to no or boolean to no

let age = undefined

console.log(typeof(age))

let valueInNumber = Number(age)

console.log(typeof(valueInNumber));
console.log(valueInNumber);


// "33" => 33 string to no;
// "33abc" => NaN (not a no)
// true => 1; false => 0;
// null => 0
// undefined => NaN

//conversion from no to boolean and string to boolean

let isLoggedIn = 1

console .log(typeof(isLoggedIn))

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(typeof(booleanLoggedIn))
console.log(booleanLoggedIn);


// 1 => true. ;  0=> false;
// "" => false
// "kul" => true

//conversion from  no to string and boolean to string

let count = 42

let stringCount = String(count)

console.log(typeof( stringCount))
console.log(stringCount)
