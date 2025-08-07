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

function calculate(operation) {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let result;

            if (operation === '+') {
                result = num1 + num2;
            } else if (operation === '-') {
                result = num1 - num2;
            } else if (operation === '*') {
                result = num1 * num2;
            } else if (operation === '/') {
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "not division";
                }
            }
              document.getElementById("output").innerText = "Result:" + result;
        }
