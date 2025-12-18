
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// Print matrix
for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
}



for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}


var scores = [320, 230, 480, 120];

document.write("<h3>Student Scores:</h3>");
document.write("Before Sort: " + scores + "<br>");

scores.sort(function(a, b) {
    return a - b;
});

document.write("After Sort (Ascending): " + scores);
