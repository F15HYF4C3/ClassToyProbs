// Write a function named numbers that returns true if all the parameters it is passed are of the Number type. Otherwise, the function should return false. The function should accept any number of parameters.

// Example usage:

// numbers(1, 4, 3, 2, 5); // true
// numbers(1, "a", 3); // false
// numbers(1, 3, NaN); // true

// Create your numbers function here
const numbers = function (){
    let answer = true;
    for(let i = 0; i< arguments.length; i++){
    if(typeof arguments[i]!== 'number'){
    answer =false;
    } 
    return answer;
//     ORRRRR
//return Array.from(arguments).every((e)=>{
// return typeof e === "number";
// })
// return argu.reduce((r, e)=>{
//     return typeof e !== "number";
}
}

// Instructor Slack:
// // Write a function named numbers that returns true if all the 
// // parameters it is passed are of the Number type.
// // Otherwise, the function should return false. 
// // The function should accept any number of parameters.
// // Example usage:

// // numbers(1, 4, 3, 2, 5); // true
// // numbers(1, "a", 3); // false
// // numbers(1, 3, NaN); // true

// const numbers = function () {
//     return Array.from(arguments).every((e) => {
//         return  typeof e === "number";
//     })
// }

// console.log(numbers(1,2,3,4))
