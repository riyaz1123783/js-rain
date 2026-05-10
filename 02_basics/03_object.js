 // singleton
// Object.create

//object literals


const mySym = Symbol("key1")


const JsUser = {
    name:"kai",
    "full name": "kaizen",
    [mySym]: "mykey1",
    age:20,
    location: "Assam",
    email: "kaizen@123",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "kaizen1234@gmail.com"
// Object.freeze(JsUser)

JsUser.email = "kai@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());








 
 
 
 