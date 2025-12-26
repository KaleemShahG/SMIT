let age = prompt("Enter your age:");
age = Number(age);
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
console.log("Your year of birth is: " + birthYear);
