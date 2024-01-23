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

function matchId(arr, targetId) {
// for (let obj of arr) {
//     if (obj.id === targetId) {
//         return obj;
//     }
// }
return arr.find(obj => obj.id === targetId);
}
const newArray = [
    { "id": "Y42C_a", "name": "Robert", "occupation": "Chef", "eyeColor": "green" },
    { "id": "X91D_b", "name": "Alice", "occupation": "Engineer", "eyeColor": "brown" },
    { "id": "Z73E_c", "name": "John", "occupation": "Teacher", "eyeColor": "blue" },
    { "id": "P58F_d", "name": "Emily", "occupation": "Artist", "eyeColor": "hazel" },
    { "id": "R24G_e", "name": "Michael", "occupation": "Doctor", "eyeColor": "gray" },
    { "id": "L79H_f", "name": "Sophia", "occupation": "Writer", "eyeColor": "amber" },
    { "id": "M36I_g", "name": "Daniel", "occupation": "Scientist", "eyeColor": "black" },
    { "id": "K82J_h", "name": "Olivia", "occupation": "Developer", "eyeColor": "blue" },
    { "id": "N47K_i", "name": "William", "occupation": "Athlete", "eyeColor": "green" },
    { "id": "O15L_j", "name": "Emma", "occupation": "Musician", "eyeColor": "brown" }
  ];
  
  console.log(matchId(newArray,"R24G_e"));
  console.log(matchId(newArray,"152r"));
  console.log(matchId(newArray,"N47K_i"));
  
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
    // for (let obj of arr) {
    //     if (obj.id === targetId) {
    //         return {
    //             name : obj.name
    //         };
    //     }
    // }
    
    let obj = arr.find(obj => obj.id === targetId);
    return {
        name: obj.name
    }
}
console.log(findName(newArray, "R24G_e"));
console.log(findName(newArray, "K82J_h"));
console.log(findName(newArray, "M36I_g"));
console.log(findName(newArray, "P58F_d"));