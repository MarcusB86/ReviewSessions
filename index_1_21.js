// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given ab array of numbers and a given target. return the target if it's in the array or undefined if it's not
function returnTarget(arr, target) {

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === target) {
    //         return target;
    //     }
    // }
    // return undefined;
    return arr.find(num => num === target);
   
}
const myArray = [2,4,6,8,10];
const myTarget = 8;
const result = returnTarget(myArray, myTarget);
console.log(result);


// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14
function findBiggerNumber(arr) {
    // for (let num of arr) {
    //     if (num > 14) {
    //         return num;
    //     }
    // }
    // return undefined;
    return arr.find((num) => num > 14);

}
console.log(findBiggerNumber([9,12,5,7,8]));
console.log(findBiggerNumber([9, 6, 3, 1]));
console.log(findBiggerNumber([1, 2, 4, 5, 14, 15]));


// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found
function findString(arr) {
    return arr.find((str) => str.length > 4);


}
console.log(findString(["Hell", "Lotto", "Cat"]));
console.log(findString(["Player", "Gametime", "Baller"]));

// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 

function matchID(arr, targetId) {
//     let obj = [];
// for (let i = 0; i < arr.length; i++) {
//     if (obj.id === targetId) {
//         return obj;
//     }
//  }
//  return undefined;
return arr.find(obj => obj.id === targetId);
}

/*

{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/


// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/
function findName(arr, targetId) {
    return arr.find(obj => obj.name === targetId);
}