const hundreds = 1000000000000;
const hundreds1 = 1000000;
const result = hundreds.toLocaleString('en-In') // Adds commas according to Indian Standards
const result1 = hundreds1.toPrecision(5)
console.log(result1);
console.log(result);