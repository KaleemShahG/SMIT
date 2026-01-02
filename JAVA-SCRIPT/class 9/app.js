
// chapter 35-to-40
const prompt = require('prompt-sync')({sigint: true});
//FUNCTIONS
// var now = new Date();
// var year = now.getFullYear();
// var month = now.getMonth();
// var date = now.getDate();
// var day = now.getDay();
// var hours = now.getHours();
// var minutes = now.getMinutes();
// var seconds = now.getSeconds();

//FUNCTIONS WITH PARAMETERS AND ARGUMENTS
// console.log(hours+ ":" +minutes+":"+seconds);
// console.log( date +":"+ month +":"+ year )
// function greetUser(bisma , Shayan ){
//     console.log("how are u ");
//     console.log("get lost");
//     console.log("give me more money");
// }
// greetUser();

// var username = prompt("Enter Your Name")
// console.log(username);





function calculation(){
    const num1 = (prompt("Enter First Number: "));
    const num2 = (prompt("Enter Second Number: "));
    const operator = prompt("Enter Operator (+, -, *, /): ");

    if (operator === "+") {
        console.log(num1 + num2);
    } else if (operator === "-") {
        console.log(num1 - num2);
    } else if (operator === "*") {
        console.log(num1 * num2);
    } else if (operator === "/") {
            console.log(num1 / num2);
        }
    
}
calculation();
