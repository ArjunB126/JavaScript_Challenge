//  Datatypes

/*
JavaScript supports multiple data types. Understanding these data types is fundamental to effective programming. JavaScript data types are broadly categorized into primitive and non-primitive types. The primitive data types include Number, String, Boolean, Null, Undefined, and Symbol. Non-primitive types include Object, Array, and Function. This guide will delve into these data types, providing a comprehensive overview and examples to help you master their usage in JavaScript.

The latest ECMAScript standard defines eight data types Out of which seven data types are Primitive [predefined] and one complex or Non-Primitive.

Primitive Datatypes:

1. Number:	JavaScript numbers are always stored in double-precision 64-bit binary format  IEEE 754
2. String : JavaScript Strings are made up of a list of characters, essentially an array of characters.
3. Boolean	: JavaScript Boolean values are either true or false.
4. Undefined :	JavaScript Undefined values are created when a variable is declared but not assigned a value.
5. Null	: JavaScript Null values are created when a variable is assigned the value null.
6. Symbol	: JavaScript Symbols are a new data type introduced in ES6. Symbols are unique and immutable.
7. BigInt	: BigInt is a built-in object providing a way to represent whole numbers    larger than 253-1.

Non Primitive Datatypes:

1. Object	: JavaScript Objects are containers for named values called properties or methods.
2. Array	: JavaScript Arrays are list-like objects designed to hold collections of values.
3. Function	: JavaScript Functions are reusable blocks of code that can be called upon to perform a specific task.


*/


let logIn = 50

// Converstion Int to Boolean
let result = Boolean(logIn);
let result1 = String(logIn); // Converstion Int to String
console.log(result);
console.log(typeof(result1));


/* Operations In Datatypes:

 1. Arithmetic Operations
 2. Relational Operations
 3. Logical Operations
 4. Bitwise Operations
 5. Assignment Operations
 6. Comparison Operations
 7. Conditional Operations
 8. Unary Operations

*/
