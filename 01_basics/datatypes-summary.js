// Primitive

// 7 types : string , number, booleaan , null , undefined , BigInt, symbol

const score8 = 100
const scoreValue = 100.3

const isLoggedIn5 = false
const outsideTem = null
let userEmai;

const id = Symbol ('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);


const bigNumber = 36556563565659459598n




// Reference (non-primitive)

// Array, Objects, functions 

const heros = ["bq2", "h1k3", "kc4l", "rxz7"];

let myObj = {
    name: kai,
    age: 21,
}

const myFunction = function(){
    console.log("hello world");
    
}







//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (No-primitive)

let myGirlName = "Quynh"

let anotherName = myGirlName

anotherName = "kanchi"


console.log(myGirlName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@bl"
}



let userTwo = userOne

userTwo.email = "kai@123.com"


console.log(userOne.email);
console.log(userTwo.email);



