var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h3>Phone Manufacturers</h3>");
document.write("<select>");
for (var i = 0; i < phones.length; i++) {
    document.write("<option>" + phones[i] + "</option>");
}
document.write("</select>");


var fifoArray = [];

fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");

document.write("<h3>FIFO Order:</h3>");
while (fifoArray.length > 0) {
    document.write(fifoArray.shift() + "<br>");
}


var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");

document.write("<h3>Joined String:</h3>");
document.write(singleString);


var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(0, 3);

document.write("<h3>Selected Cities:</h3>");
document.write(selectedCities);



var colors = ["Red", "Green", "Blue"];
document.write("<h3>Initial Colors:</h3>" + colors + "<br><br>");

// a. Add color at beginning
var colorStart = prompt("Enter color to add at beginning:");
colors.unshift(colorStart);
document.write("After adding at beginning: " + colors + "<br>");

// b. Add color at end
var colorEnd = prompt("Enter color to add at end:");
colors.push(colorEnd);
document.write("After adding at end: " + colors + "<br>");

// c. Add two colors at beginning
colors.unshift("Purple", "Orange");
document.write("After adding two at beginning: " + colors + "<br>");

// d. Delete first color
colors.shift();
document.write("After deleting first color: " + colors + "<br>");

// e. Delete last color
colors.pop();
document.write("After deleting last color: " + colors + "<br>");

// f. Add color at desired index
var addIndex = +prompt("Enter index to add color:");
var addColor = prompt("Enter color name:");
colors.splice(addIndex, 0, addColor);
document.write("After adding at index: " + colors + "<br>");

// g. Delete colors from desired index
var delIndex = +prompt("Enter index to delete color(s):");
var delCount = +prompt("How many colors to delete?");
colors.splice(delIndex, delCount);
document.write("After deletion: " + colors + "<br>");




var scores = [320, 230, 480, 120];

document.write("<h3>Student Scores:</h3>");
document.write("Before Sort: " + scores + "<br>");

scores.sort(function(a, b) {
    return a - b;
});

document.write("After Sort (Ascending): " + scores);
