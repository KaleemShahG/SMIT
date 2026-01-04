// function showDateTime() {
//   let now = new Date();
//   document.write("Current Date & Time: " + now);
// }
// showDateTime();


// function greetUser(firstName, lastName) {
//   document.write("Hello " + firstName + " " + lastName);
// }
// greetUser("Syed", "Kaleem");


// function addNumbers(num1, num2) {
//   return num1 + num2;
// }
// let number1 = parseFloat(prompt("Enter first number"));
// let number2 = parseFloat(prompt("Enter second number"));
// let result = addNumbers(number1, number2);
// document.write("Sum of two numbers is: " + result);
// function calculate(num1, num2, operator) {
//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     return num1 / num2;
//   } else {
//     return "Invalid Operator";
//   }
// }
// let n1 = parseFloat(prompt("Enter first number"));
// let n2 = parseFloat(prompt("Enter second number"));
// let op = prompt("Enter operator (+, -, *, /)");
// let result = calculate(n1, n2, op);
// document.write("Result: " + result);


// function square(num) {
//   return num * num;
// }
// let result = square(5);
// document.write("Square is: " + result);


// function factorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result = result * i;
//   }
//   return result;
// }
// let number = parseInt(prompt("Enter a number"));
// let fact = factorial(number);
// document.write("Factorial of " + number + " is: " + fact);


// function showCounting(start, end) {
//   for (let i = start; i <= end; i++) {
//     document.write(i + "<br>"); }
// }
// let startNum = parseInt(prompt("Enter start number"));
// let endNum = parseInt(prompt("Enter end number"));
// showCounting(startNum, endNum);


// let w = 7;
// let h = 4;

// let area2 = rectangleArea(w, h);
// document.write("Area (using variables): " + area2);
// function rectangleArea(width, height) {
//   return width * height;
// }
// let area1 = rectangleArea(5, 10);
// document.write("Area (using values): " + area1 + "<br>");
