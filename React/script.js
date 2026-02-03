//Marks and grading (if)

// let marks = prompt ("Please enter number between 0 to 100: ");
// let grade;

// if(marks >= 80 && marks <= 100){
//     grade = "A";
// } else if(marks >= 70 && marks <= 79){
//     grade = "B";
// } else if(marks >= 60 && marks <= 69){
//     grade = "C";
// } else if(marks >= 40 && marks <= 59){
//     grade = "D";
// } else if(marks >= 0 && marks <= 39){
//     grade = "F";
// } else if(marks < 0 || marks > 100 || isNaN(marks)){
//     console.log("Please enter a valid number.")
// }
// if(grade){
//     console.log("The grade you have obtained is: " + grade);
// }

///////////////////////////////// (for)

//Display all even numbers from 0 - 100

// for (let a = 0; a <= 100; a = a + 2){
//     console.log(a);
// }

//////////////////////// (while)

//Guessing game for the user where the user has to keep gussing until they get the right number; 

// let ans = 7;
// let num = prompt("Guess the number: ");
// while(num != ans){
//     console.log("Wrong guess! Try again");
//     num = prompt("Guess the number: ");
// }

// console.log("You guessed right. ");

////////////////////////////////////// (CONCATINATION)

// Create a username where user gives full name and the output is generated with @ in the front, username with no space and number of letters at the last.

// let fname = prompt("Enter Name: ");
// let nsname = fname.replace(" ", "");
// let lname = fname.length;             //Length is taken but only after the end along with @ for some reason.
// console.log("@" + nsname + lname);

///////////////////////////////

// for a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

// unoptimal method:
// let marks = [85, 97, 44, 37, 76, 60];
// console.log((marks[0]+ marks[1]+ marks[2]+ marks[3]+ marks[4]+ marks[5])/6)

//optimal method??:

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let m of marks){
//     sum += m;
// }

// let average = sum/marks.length;

// console.log("The average marks is " + average);



////////////////////////////////////

//For a given array with prices of 5 items = [250, 645, 300, 900, 50]
//All items have a offer of 10% OFF on them. Change the array to store final price after applying offer.

// let items = [250, 645, 300, 900, 50];
// console.log(`Price of items before the discount: ${items}`);

// for (let i = 0; i < items.length; i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
// }

// console.log("Price of items after the disount: "+ items);

//////////////////////////////////////

// Create an array to store companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
//a. Remove the first company from the array
//b. Remove Uber & Add Ola in its place 
//c. Add Amazon at the end

// let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let fcomp = comp.shift();
// console.log(comp);

// let gcomp = comp.splice(1, 1, "Ola");
// console.log(comp);

// let hcomp = comp.push("Amazon");
// console.log(comp);


/////////////////////////////////////// ()

// Create a function using the "funciton" keyword that takes a string as an argument & 
// returns the number of vowels in the string.

// function word(str){
//     let count = 0;
//     for (const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }

//     }
//     console.log(count);
// }


////////////////////////////////////// (arrow function)

// For a given array of numbers, print the square of each value using the forEach loop

// let num = [1, 2, 3, 4, 5];

// num.forEach((val) => {
//     console.log(val * val);
// })

////////////////////////////////////  (arrow function)
// Array of marks of students. Filter out the marks of the students that scored 90+
// [30, 40, 99, 69]

// let marks = [30, 40, 99, 69];

// let winner = marks.filter((val) => {
//     return val>90;
// })

// console.log(winner);

////////////////////////////////////

// Take a number n as a input from user. Create an array of numbers from 1 to n,
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

// let n = prompt("Please input a number");

// let arr = [];

// for(let i = 0; i <= n; i++){
//     arr[i-1] = i;
// }

// console.log("Numbers in the array: " + arr);

//// ADDition and prduct is let to calculate 



///////////////////////////////////


// Create a H2 heading element with text = "Hello JS". Append "from name" to this text using JS.


// Create 3 divs with common class name - "Box". Access them and add some unique text ot each of them.


// Create a new button element. Give it a text "Click Me", background color of red and text color of white.
    // Insert the button as the first element inside the body tag.


// Create a <p> tag in html, give it a class and some styling. 
// Now Create a new class in CSS and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList.

 
// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.


////////////////////////////////////////

// You are creating a website for your college. Create a class User with 2 properties, name & email. IT also has method 
// called viewData() that allows user to view website data.

// Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit 
// website data.


