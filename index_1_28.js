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



// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)


// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters
function getStringsLongerThanFive(strings) {
    let newerArray = [];
    for (let str of strings) {
        if (str.length > 5) {
            newerArray.push(str.length);
        }
    }
    return newerArray;
}
console.log()


// 4. Write a function that takes an array of numbers and returns the sum of all even numebrs
function returnSumOfEvenNumbers(numbers) {
    let sum = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}
  

// 5. Write a function that takes an array of numbers and returns the min num
function findMinNumber (numbers) {
    let minNumber = numbers[0];
    for (let num of numbers) {
        if (num < minNumber) {
            minNumber = num;

        }
        return minNumber;
    }
}

// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)
function findFrequentChar(string)