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

let temperature = prompt("Enter the temperature");

if(temperature >= 10 && temperature <=  15){
    alert("Very Cold")
}else if( temperature >= 16 && temperature <= 25){
    alert("temperature is normal")
}else{
    alert("Very hot")
}