// Chapter 17 - 20 (Q1)
// var Arr=[[1,2],[3,4],[5,6]];
// console.log(Arr);

// Chapter 17 - 20 (Q2)
// var Arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// console.log(Arr);

// Chapter 17 - 20 (Q3)
// for (i = 1; i <=10; i++){
//     console.log(i);
// }

// Chapter 17 - 20 (Q4)
// var number = prompt('Enter a number to show its multiplication table: ');
// var range = prompt('Enter lenght multiplication table: ');
// console.log("Multiplication Table of", number);
// console.log("Lenght", range);
// for(let i = 1; i <= range; i++) {  
//     console.log(number + " x " + i + " = " + number * i );
// }

// Chapter 17 - 20 (Q5)
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// console.log(fruits);
// for(i = 0; i < fruits.length; i++){
//     console.log("Element at index " + i + ": " + fruits[i]);
// }

// Chapter 17 - 20 (Q6)
//Counting
// function generateCountingSeries() {
//     const series = [];
//     for (let i = 1; i <= 15; i++) {
//         series.push(i);
//     }
//     return series.join(', ');
// }
// const countingSeries = generateCountingSeries();
// console.log('Counting: ' + countingSeries);

//Reverse Counting
// function generateReverseCountingSeries(count) {
//     const series = [];
//     for (let i = count; i >= 1; i--) {
//         series.push(i);
//     }
//     return series.join(', ');
// }
// const reverseCountingSeries = generateReverseCountingSeries(10);
// console.log('Reverse counting: ' + reverseCountingSeries);

//Even
// function generateEvenSeries(count) {
//     const evenSeries = [];
//     for (let i = 0; i <= count; i += 2) {
//         evenSeries.push(i);
//     }
//     return evenSeries.join(', ');
// }
// const evenSeries = generateEvenSeries(20);
// console.log('Even: ' + evenSeries);

//Odd
// function generateOddSeries(count) {
//     const series = [];
//     let currentNumber = 1;
//     for (let i = 0; i < count; i++) {
//         series.push(currentNumber);
//         currentNumber += 2;
//     }
//     return series.join(', ');
// }
// const oddSeries = generateOddSeries(10);
// console.log('Odd: ' + oddSeries);

//Series
// function generateSeries() {
//     const series = [];
//     for (let i = 2; i <= 20; i += 2) {
//         series.push(i + 'k');
//     }
//     return series.join(', ');
// }
// const series = generateSeries();
// console.log('Series: ' + series);


// Chapter 17 - 20 (Q7)
// Define the array
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];
// const userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?:");
// const searchItem = userInput.toLowerCase();
// const itemIndex = A.findIndex(item => item.toLowerCase() === searchItem);
// if (itemIndex !== -1) {
//     console.log(searchItem + " is available at index " + itemIndex + " in our Bakery");
// } else {
//     console.log("We are sorry. " + searchItem + " is not available in our bakery");
// }

// Chapter 17 - 20 (Q8)
// const A = [24, 53, 78, 91, 12];
// var largest = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// console.log("Array Items: " + A);
// console.log("The largest number in the array is: " + largest);

// Chapter 17 - 20 (Q9)
// const A = [24, 53, 78, 91, 12];
// var smallest = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// console.log("Array Items: " + A);
// console.log("The smallest number in the array is: " + smallest);

// Chapter 17 - 20 (Q10)
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// Chapter 21 - 25 (Q1)
// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");
// const fullName = `${firstName} ${lastName}`;

// alert(`Hello, ${fullName}!`);



// Chapter 21 - 25 (Q2)


// Chapter 21 - 25 (Q3)


// Chapter 21 - 25 (Q4)


// Chapter 21 - 25 (Q5)


// Chapter 21 - 25 (Q6)


// Chapter 21 - 25 (Q7)


// Chapter 21 - 25 (Q8)


// Chapter 21 - 25 (Q9)


// Chapter 21 - 25 (Q10)


// Chapter 21 - 25 (Q11)


// Chapter 21 - 25 (Q12)


// Chapter 21 - 25 (Q13)


// Chapter 21 - 25 (Q14)


// Chapter 21 - 25 (Q15)


// Chapter 21 - 25 (Q16)
// var university = "University of Karachi";

// var universityArray = university.split(" ");

// console.log("Array Elements: " + universityArray.join(", "));


// Chapter 21 - 25 (Q17)
// const userInput = prompt("Enter a word or phrase:");
// if (userInput !== null && userInput !== "") {
//     const lastCharacter = userInput.slice(-1);
//     console.log("User input: " + userInput);
//     console.log("The last character of your input is: " + lastCharacter);
// } else {
//     console.log("No input provided. Please enter something.");
// }


// Chapter 21 - 25 (Q18)
// const inputString = "The quick brown fox jumps over the lazy dog";
// const lowercaseString = inputString.toLowerCase();
// const searchWord = "the";
// const regex = new RegExp(searchWord, 'g');
// const count = (lowercaseString.match(regex) || []).length;

// console.log(`There are "${count} " occurrence(s) of the word '${searchWord}'`);
