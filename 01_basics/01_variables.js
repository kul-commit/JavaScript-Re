const accountId = 138060
let accountEmail = "Kul@gmail.com"
var accountPassword = "vyrus12"
accountCity = "Delhi"

let accountState;

//accountId= 2.  not allowed

accountEmail=("cyrus@gmail.com")
accountPassword = "22111322"
accountCity="neew york"

// console.log(accountId);
// console.log(accountEmail);


/*
preferred not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountPassword, accountCity, accountEmail, accountState]);


// create 3 variable

let firstName = "Cyrus"
let age = 22 
let city = "New Delhi"

console.log(firstName);
console.log(age);
console.log(city);

console.log("Hi my name is ",firstName +" I am " ,age ,"old" + "I live in" ,city );


//Create a variable score with value 85. Change its value to 95 and print it.

let score = 85
score = 95

console.log(score)


//Swap two variables

let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);