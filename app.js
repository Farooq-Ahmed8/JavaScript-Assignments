//                            Fisrt Assignment  JavaScript Basic


// Q 01:- Display an Alert\ Create a simple web page that shows an alert box with a greeting message when
//        the page loads.\ Topics: Alerts?

// alert("Hello JavaScript");


// Q 02:-  Declare and Use String Variables\ Create two variables with your first name and last name, then
//         display them in an alert box using concatenation.\ Topics: Variables for Strings, Concatenating 
//         text strings?

// let firstName = "Farooq";
// let lastName = "Ahmed";

// let add = firstName + lastName;

// alert("My full name " + add);


// Q 03:- Declare and Use Number Variables\ Declare a variable for your age and display a message 
//        like "Iam 18 years old" using an alert.\ Topics: Variables for Numbers

// let age = 18;
// alert("My age " + age + " Years");


// Q 04:- Legal and Illegal Variable Names\ Write a JavaScript script that includes both legal
//        and illegal variable names. Add comments to explain why the illegal names are incorrect.\ Topics: Variable
//        Names Legal and Illegal?

//   Legal variables

// let firstName = "Farooq Ahmed";       
// let _age = 27;
// let $Number = 1000;
// let user123 = "Hayder";

// Illegal variables

// let first-Name = "Ahmed"; 
// let 123user = "saad";
// let let = "xyz";
// let user name = "raheel";


// Q 05:- Legal and Illegal Variable Names\ Write a JavaScript script that includes both legal and
//        illegal variable names. Add comments to explain why the illegal names are incorrect.\ 
//        Topics: Variable Names Legal and Illegal?

// let firstName = "Farooq Ahmed";       // simple varible name
// let _age = 27;                        // underscope se start hona b sahi hai
// let $Number = 1000;                   //'dolor sign b istemal ke sakte hai
// let userName = "Hayder";              // camelCase b use kr sakte hai
// let isPass123 = true;                 // last mai number b use kr sakte hai

// Illegal variables

// let first-Name = "Ahmed";             // variable k beech mai (hyphen) use nhi kr sakte
// let 123user = "saad";                 // variable k starting mai (123) use nhi kr sakte 
// let let = "xyz";                      // let ak javascript ka (reserved key word) hai use nhi kr sakte
// let user name = "raheel";             // variable k nam mai (space) use nhi kr sakte
// let @number = 12345';                 // varible k starting mai (@) use nhi kr sakte


//                            Second Assignment working Math and Conditions

// Q 01:- Simple Math Operations\ Create a calculator web page that can do addition, subtraction,
//        multiplication, and division with two numbers using familiar operators.\
//        Topics: Math Expressions: familiar operators?

// function calculate(operation) {
//             let num1 = parseFloat(document.getElementById("num1").value);
//             let num2 = parseFloat(document.getElementById("num2").value);
//             let result;

//             if (operation === '+') {
//                 result = num1 + num2;
//             } else if (operation === '-') {
//                 result = num1 - num2;
//             } else if (operation === '*') {
//                 result = num1 * num2;
//             } else if (operation === '/') {
//                 if (num2 !== 0) {
//                     result = num1 / num2;
//                 } else {
//                     result = "not division";
//                 }
//             }
//               document.getElementById("output").innerText = "Result:" + result;
//         }

// Q 02:- Advanced Math Operators\ Add modulus (%) and increment/decrement operators to the calculator.
//        Try pre- and post-increment. Display the result on the page.\ Topics: Math Expressions:
//        unfamiliar operators?

// Modules Operator (%)

// let result = 5 % 2;
// console.log(result);   1

// Pre-increment Operator (++)

// let x = 5;
// let pre = ++x;
// console.log(pre);     // pre pehle 6 hoga

// let x = 5;
// let post = x++;
// console.log(post);      // post bad mai 6 hoga


// Q 03:- Operator Precedence\ Write 3 expressions that use multiple operators. Add parentheses
//        to show how ambiguity is resolved.\ Topics: Math Expressions: eliminating ambiguity?

//       Multiplication and Addition

// let result = 5 + 3 * 2;      //  javaScript pehle multiplication krega
// console.log(result);         //  final result (11)

// let result = 5 + (3 * 2)
// console.log(result);         //  result:- (11)

//     Subtration and Addition

// let result = 10 - 4 + 2;    // result (8)
// console.log(result);

// let result = 20 / 5 + 3;    //  javaScript pehle division krega
// console.log(result);        //  final result (7)


//  Q 04:- Prompt and Conditional Logic\ Ask the user for their age using a prompt. Show a different
//         alert based on the user's age using if , else if , and else .\ Topics: Prompts, if 
//         statements, Comparison operators, if...else statements, else if statements?

// let age = prompt("Enter your age");

// if(age >= 15 && age < 18){
//     alert("You are UnAdult");
// }else if(age >= 20 && 18 <= 25){
//     alert("Your are Adult");
// }else if(age >= 25 && 18 <= 40){
//     alert("Your are old man");
// }else{}


//  Q 05:- Nested Conditions\ Create a script that checks the temperature. If it’s below 10, 
//         print “Too cold”, if between 10–25, print “Just right”, and if above 25, print “Too hot”.
//         Add another layer: if temperature is below 0, print “Freezing”.\ Topics: Testing
//         sets of conditions, if statements nested?

// let temperature = prompt("Enter the temperature");

// if(temperature >= 10 && temperature <=  15){
//     alert("Very Cold")
// }else if( temperature >= 16 && temperature <= 25){
//     alert("temperature is normal")
// }else{
//     alert("Very hot")
// }


//             Third Assignment Arrays and Loops

// Q 01:- Using Arrays\ Create an array of 5 fruits and display them using a loop.\ Topics:
//        Arrays, for loops?

// let fruits = ["Apple", "Mango", "Banana", "Olive", "Graphs"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);   
// }

// Q 02:- Modifying Arrays\ Add 2 fruits to the array, then remove 1. Display the final array
//        using a loop.\ Topics: Arrays: adding and removing elements?

// let fruits = ["Apple", "Banana", "Mango", "Graphs", "Orange"];

// fruits.splice(1, 1, "WaterMaloon", "PineApple");

// for(let i = 0; i < fruits.length; i++){

//     console.log(fruits[i]);
// }

// Q 03:- Insert, Remove, Slice\ Use splice() to insert a fruit at index 2, remove the third
//        fruit, and slice the array to get the first 3 fruits. Print all operations.\ Topics:
//        Arrays: removing, inserting, and extracting elements?

// let fruits = ["Appple", "Banana", "Mango", "Graphs", "Olive"];
// console.log(fruits);

// fruits.splice(2, 0, "PineApple");
// console.log(fruits);

// fruits.splice(2, 1);
// console.log(fruits);

// let newFruits = fruits.slice(0, 3);
// console.log(newFruits);


// Q 04:- Loop Control\ Write a script that loops through an array of numbers. Break the loop
//        when a number greater than 50 is found. Print whether such a number exists.\ Topics:
//        for loops: flags, Booleans, array length, and breaks?
 
// let numbers = [22, 15, 25, 45, 17, 19,77];
// let check = false;
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 50){
//         check = true;
//         break;
        
//     }
// }
// if(check){
//     console.log("Number is availble greater than 50");
// }else{
//     console.log("Number is not availble greater than 50");
    
// }


// Q 05:- Nested Loops\ Create a multiplication table (1 to 10) using nested loops. Display
//        results in the console or on the web page.\ Topics: for loops nested?

// for(let i = 1; i <= 10; i++){
//     for(let j = 1; j <= 10; j++){
//         console.log(i + " X " + j + " = " + (i * j));
        
//     }
//     console.log("---------");
    
// }


//         Forth Assignment Strings and Numbers

// Q 01:- Case Conversion and Length\ Ask the user for their full name using a prompt. Show the
//        length of the name and convert it to upper and lower case.\ Topics: Changing case,
//        Strings: measuring length?

// let fullName = prompt("Enter Your Name");
// console.log(fullName);


// let userLength = fullName.length;
// console.log(userLength);

// let upper = fullName.toUpperCase() 
// console.log(upper);

// let lower = fullName.toLowerCase();
// console.log(lower);


// Q 02:- Finding Characters\ Search for the first space in the user's name. Then extract the
//        first name and ast name using slice() .\ Topics: Strings: finding segments, finding
//        a character at a location, extracting parts?

// let fullName = prompt("Enter Your Name");
// console.log(fullName);

// let space = fullName.indexOf(" ");

// let firstName = fullName.slice(0, space);
// console.log(firstName);

// let lastName = fullName.slice(space + 1);
// console.log(lastName);


// Q 03:- Replacing Text\ Create a string and replace all instances of “bad” with “good”.\ 
//        Topics: Strings: replacing characters?

// let str = "This is a bad example. That was a really bad idea. such bad behavior!";
// console.log(str);

// let replacing = str.replaceAll("bad", "good");
// console.log(replacing);


// Q 04:- Random Number Generator\ Write a script that simulates a dice roll (1 to 6). Run it 10
//        times and store the result in an array. Print the frequency of each number.\ Topics:
//        Generating random numbers?
























