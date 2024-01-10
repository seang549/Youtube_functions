/*Write a higher-order function called operateOnArray that takes in an array of 
numbers and a callback function as arguments. The operateOnArray function 
should apply the callback function to each element in the array and 
return the modified array. Create a callback function called square that 
squares a number. Then, use operateOnArray with an array [1, 2, 3, 4] and 
the square callback function, and log the resulting array to the console.*/


function operateOnArray(array, callback) {
    return array.map(callback);
};

function square(num) {
    return num * num;
};
const numbers = [1, 2, 3, 4];
const squaredNumbers = operateOnArray(numbers, square);
console.log(squaredNumbers);
  