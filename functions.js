//Declaring Functions

// function greet(name) {
//     // return "Hello, " + name + "!";
// };

// const message = greet("Alice");
// console.log(message);


//Function Expressions

// const multiply = function(a, b) {
//     return a * b;
// };

// const result = multiply(5, 3);
// console.log(result);

//Arrow Functions

// const multiply = (a, b) => a * b;
// const result = multiply(5, 3);
// console.log(result);

//Default Parameters

// function power(base, exponent = 2) {
//     return Math.pow(base, exponent);
// };
// const poweredValue = power(3);
// console.log(poweredValue);

//Rest Parameter

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0)
// };
// const totalSum = sum(1, 2, 3, 4, 5);
// console.log(totalSum);

//Callback Functions

// function processData(data, callback) {
//     const processedData = data.toUpperCase();
//     callback(processedData);
// };

// function displayData(data) {
//     console.log("Processed data: ", data);
// };

// processData("coding with sean", displayData);

//Higher-Order Functions

// function applyOperation(value, operation) {
//     return operation(value);
// };

// const doubledValue = applyOperation(5, x => x * 2);
// console.log(doubledValue);

//Closures

// function createCounter() {
//     let count = 0;
//     return function() {
//         return ++count;
//     };
// };
// const counter = createCounter();
// console.log(counter());
// console.log(counter());