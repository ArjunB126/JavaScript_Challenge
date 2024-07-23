console.log("Lets Start With Javascript Strings");
/* 

JavaScript String is a sequence of characters, typically used to represent text. It is enclosed in single or double quotes and supports various methods for text manipulation.
JavaScript strings can be created by enclosing text within either single or double quotes.

Basic Terminologies of JavaScript String

--> String: A sequence of characters enclosed in single (‘ ‘) or double (” “) quotes.
--> Length: The number of characters in a string, obtained using the length property.
--> Index: The position of a character within a string, starting from 0.
--> Concatenation: The process of combining two or more strings to create a new one.
--> Substring: A portion of a string, obtained by extracting characters between specified  indices.
--> Split: The process of splitting a string into an array of substrings, based on a specified delimiter
--> Replace: The process of replacing a substring with a new string, based on a specified search pattern
--> Trim: The process of removing leading and trailing whitespace characters from a string.

*/

const name = "RAKESH" // String in a name variable 
const emailId = "rakesh@gmail.com"

const result = `Hi my name is ${name} and my email address is ${emailId} `
 // String Interpolation ` ------- ${} ----- `
console.log(result);

// Methods of Strings 

const something = " I Love Javascript "

console.log(something.length); // Length of the String
console.log(something.indexOf("Javascript")); // Index of the String
console.log(something.lastIndexOf("Javascript")); // Last Index of the String
console.log(something.includes("Javascript")); // Check if the String is present or not
console.log(something.slice(0,5));
console.log(something);
console.log(something.trim()); // Removes Spaces in the variable declartion