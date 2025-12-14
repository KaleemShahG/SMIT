var age = 22;
alert("I am " + age + " years old");


var visitCount = localStorage.getItem("visits");

if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = Number(visitCount) + 1;
}

localStorage.setItem("visits", visitCount);

document.getElementById("visitCount").innerHTML =
    "You have visited this site " + visitCount + " times";


var birthYear = 2002;
document.getElementById("birthYearMsg").innerHTML =
    "My birth year is " + birthYear + "<br>Data type of my declared variable is number";


var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

document.getElementById("orderMsg").innerHTML =
    visitorName + " ordered " + quantity + " " + productTitle +
    "(s) on XYZ Clothing store";
