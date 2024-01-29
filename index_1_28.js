// Acc Pattern

// Iterative Native Array Methods

// For each of the following exercises, 
// 1. write them using a for loop first
// 2. comment out the accumulator pattern solution and write it using a native array method
// 3. call the function and console.log the result

// 1. Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length
// ["hello", "world"] => [5, 5] 
function getLengthOfString(strings) {
    let newArray = [];
    for (let str of strings) {
        newArray.push(str.length)
    }
    return newArray;
}
console.log(getLengthOfString(["Lion", "Shark", "Dog", "Cat"]));


// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters
 function findStringsLengthThanFive(strings) {
    return getLengthOfString(getStringsLongerThanFive(strings));
    // return strings.filter(str => str.length > 5).map(str => str.length);
    // const arrayOfStringsLongerThanFive = [];
    // for (let str of strings) {
    //     if (str.length > 5) {
    //         arrayOfStringsLongerThanFive.push(str.length);
    //     }
    // }
    // return arrayOfStringsLongerThanFive;

 }
 console.log(findStringsLengthThanFive(["Marcus", "Paul", "Steven", "Jackson"]));


// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)

function getStringsLongerThanFive(strings) {
    return strings.filter(str => str.length > 5);
    // let newerArray = [];
    // for (let str of strings) {
    //     if (str.length > 5) {
    //         newerArray.push(str.length);
    //     }
    // }
    // return newerArray;
}
console.log(getStringsLongerThanFive(["Marc", "Marcus", "Michele", "Samuel"]));

// 4. Write a function that takes an array of numbers and returns the sum of all even numbers
function returnSumOfEvenNumbers(numbers) {
    return numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
    // let sum = 0;
    // for (let num of numbers) {
    //     if (num % 2 === 0) {
    //         sum += num;
    //     }
    // }
    // return sum;
}
console.log(returnSumOfEvenNumbers([9,4,6,2,8,7,4,13]));

  

// 5. Write a function that takes an array of numbers and returns the min num
function findMinNumber (numbers) {
    return numbers.reduce((minNumber, num) => num < minNumber ? num : minNumber)
    // return Math.min(...numbers)
    // let minNumber = numbers[0];
    // for (let num of numbers) {
    //     if (num < minNumber) {
    //         minNumber = num;

    //     }
    //     return minNumber;
    // }
}
console.log(findMinNumber([12,55,76,22,21]));

// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)
function findFrequentChar(string) {

}