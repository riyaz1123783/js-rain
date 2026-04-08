

// ==============================
// 1. NUMBER vs STRING
// ==============================

let score1 = 33; 
// This is a NUMBER because it is written without quotes

let score2 = "33"; 
// This is a STRING because it is inside double quotes (" ")

/*
IMPORTANT:
- "" (double quotes) or '' (single quotes) are used to define strings
- Even if the value looks like a number ("33"), it is still a string
*/

console.log(typeof score1); // number
console.log(typeof score2); // string



// ==============================
// 2. STRING → NUMBER CONVERSION
// ==============================

let score3 = "33";

/*
Number(value) converts a value into a number
*/

let valueInNumber1 = Number(score3);

console.log(typeof valueInNumber1); // number
console.log(valueInNumber1);        // 33


/*
SPECIAL CASES:
*/

// Case 1: Valid numeric string
Number("33");      // 33

// Case 2: Invalid numeric string
Number("33abc");   // NaN (Not a Number)

// Case 3: Completely non-numeric string
Number("kai");     // NaN

/*
NaN means:
The result is technically of type "number",
but it is NOT a valid numeric value.
*/

let score7 = "kai";
let valueInNumber2 = Number(score7);

console.log(typeof valueInNumber2); // number
console.log(valueInNumber2);        // NaN



// ==============================
// 3. NULL and UNDEFINED
// ==============================

let score4 = null;
let valueFromNull = Number(score4);

/*
null represents an empty value

Conversion result:
*/
console.log(valueFromNull); // 0
console.log(typeof valueFromNull); // number


let score5 = undefined;
let valueFromUndefined = Number(score5);

/*
undefined means value is not assigned

Conversion result:
*/
console.log(valueFromUndefined); // NaN
console.log(typeof valueFromUndefined); // number



// ==============================
// 4. BOOLEAN → NUMBER
// ==============================

let score6 = true;
let valueFromBoolean = Number(score6);

/*
Conversion rules:
true  => 1
false => 0
*/

console.log(valueFromBoolean); // 1



// ==============================
// 5. NUMBER → STRING
// ==============================

let someNumber = 33;

let stringNumber = String(someNumber);

/*
Converts number into string
*/

console.log(stringNumber);        // "33"
console.log(typeof stringNumber); // string



// ==============================
// 6. BOOLEAN CONVERSION (TRUTHY / FALSY)
// ==============================

/*
Boolean(value) converts a value into true or false

Falsy values (become false):
- 0
- ""
- null
- undefined
- NaN

Everything else is Truthy (becomes true)
*/

// Example 1
let isLoggedIn1 = 1;
console.log(Boolean(isLoggedIn1)); // true

// Example 2
let isLoggedIn2 = 0;
console.log(Boolean(isLoggedIn2)); // false

// Example 3
let isLoggedIn3 = "";
console.log(Boolean(isLoggedIn3)); // false

// Example 4
let isLoggedIn4 = "kai";
console.log(Boolean(isLoggedIn4)); // true



// ==============================
// FINAL SUMMARY
// ==============================

/*
"33"      => 33        (valid conversion)
"33abc"   => NaN       (invalid number)
true      => 1
false     => 0
null      => 0
undefined => NaN

""        => false
"kai"     => true
0         => false
1         => true
*/

/*
KEY TAKEAWAY:
JavaScript allows flexible type conversion,
but you must be careful because some results
like NaN can cause bugs if not handled properly.
*/








                  //*************************** Operatins ***************************

 
                               


let value = 3
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2**2);
//console.log(2%3);
//console.log(2/3);


let srt1 = "hello"
let str2 = " kaizen"
let str3 = srt1 + str2  // you can not substract, you can only add
//console.log(str3);

//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1" + 2 + 2);
//console.log (1 + 2 + "2");
//console.log( (3+4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3  
num1= num2 = num3 = 2 + 2        // code should be easily readable, not merry like this 

let gameCounter = 100
gameCounter++;    // important topic prefix and postfix 
console.log(gameCounter);









