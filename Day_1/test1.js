/*
Learnings:


Q - Difference between var and let in JavaScript
Ans : In the early days of JavaScript, there was only one way of declaring variables and that was using the var keyword. A variable declared with var is defined throughout the program. One of the issues with using the var keyword was redeclaring a variable inside a block will also redeclare the variable outside the block.  With the introduction of ES6 in 2015 two more keywords, let and const came into the picture. var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. Variable declared by let cannot be redeclared and must be declared before use whereas variables declared with var keyword are hoisted. 


-- var and let create variables that can be reassigned another value.
-- const creates "constant" variables that cannot be reassigned another value.
-- Developers shouldn't use var anymore. They should use let or const instead.
-- If you're not going to change the value of a variable, it is good practice to use const.


*/

let firstName = "aman";
const age = 20;
var isMarried = true;
console.log(firstName,age,isMarried);
console.table([firstName,age,isMarried]);