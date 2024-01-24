// 1.----------------------------------
// // Write a function that takes in a string and returns a new string with every word capitalized. Write your own examples to call the function with.
function capitalizeWords(str) {
    //   const words = str.split(" ");
    //   //   const capitalizedWords = [];
  
    //   for (let i = 0; i < words.length; i++) {
    //     const word = words[i];
    //     words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
    //     // capitalizedWords.push(capitalWord);
    //   }
  
    //   return words.join(" ");
    return str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
  
  console.log(capitalizeWords("hello world what a beautiful day!"));
  
//   // Example usage:
// // 2.----------------------------------
// // Write a function that takes in an object and returns a formatted greeting.
// // This is the format of the object - 

function formatGreeting (obj) {
    return `Hello ${obj.firstName} ${obj.lastName}, have a great day at your job as a ${obj.occupation}`;

}
 

const john = {
    firstName: "John",
    lastName: "Klaus",
    occupation: "Carpenter"
  }
  
  const rebecca = {
    firstName: "Rebecca",
    lastName: "Cohen",
    occupation: "Teacher"
  }
  
  console.log(formatGreeting(john) === "Hello John Klaus, have a great day at your job as a Carpenter")
  
  console.log(formatGreeting(rebecca) === "Hello Rebecca Cohen, have a great day at your job as a Teacher")
  
//   // 3.----------------------------------
//   // Write a function that takes an array of objects and a targetId and returns a formatted string. Each object in the array will have the same structure as the objects from the previous question plus an id. Use chatGPT to create an array of 10 such objects.
  function formatString(arr, targetId) {
    for (let obj of arr) {
        if (obj.id === targetId) {
            return {
                
            }
        }
        
    }
    
  }
  const arrayOfObjects = [
    { id: "Tfjso_4M", firstName: "John", lastName: "Klaus", occupation: "Carpenter" },
    { id: "Ahsd7_2P", firstName: "Alice", lastName: "Smith", occupation: "Engineer" },
    { id: "Bcde8_9Q", firstName: "Bob", lastName: "Johnson", occupation: "Teacher" },
    { id: "Xyzt1_3R", firstName: "Emily", lastName: "Williams", occupation: "Doctor" },
    { id: "Lmno4_5S", firstName: "David", lastName: "Brown", occupation: "Artist" },
    { id: "Hijk6_7U", firstName: "Sara", lastName: "Miller", occupation: "Programmer" },
    { id: "Wvwx9_1A", firstName: "Michael", lastName: "Davis", occupation: "Chef" },
    { id: "Ghij2_8B", firstName: "Laura", lastName: "Taylor", occupation: "Scientist" },
    { id: "Pqrs5_6C", firstName: "Chris", lastName: "Wilson", occupation: "Writer" },
    { id: "Zabc3_0D", firstName: "Megan", lastName: "Clark", occupation: "Athlete" }
  ];
  
  console.log(arrayOfObjects);
  
//   /* Example Object
//   {
//     id: "Tfjso_4M"
//     firstName: "John",
//     lastName: "Klaus",
//     occupation: "Carpenter