// Declare two numbers
var num1 = 10;
var num2 = 3;

// Addition
var add = num1 + num2;
document.getElementById("add").innerHTML =
    "Sum of " + num1 + " and " + num2 + " is " + add;

// Subtraction
var sub = num1 - num2;
document.getElementById("sub").innerHTML =
    "Difference of " + num1 + " and " + num2 + " is " + sub;

// Multiplication
var mul = num1 * num2;
document.getElementById("mul").innerHTML =
    "Product of " + num1 + " and " + num2 + " is " + mul;

// Division
var div = num1 / num2;
document.getElementById("div").innerHTML =
    "Division of " + num1 + " and " + num2 + " is " + div;

// Modulus
var mod = num1 % num2;
document.getElementById("mod").innerHTML =
    "Modulus of " + num1 + " and " + num2 + " is " + mod;
window.onload = function () {
   // JS code here
}
