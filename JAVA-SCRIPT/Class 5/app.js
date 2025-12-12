console.log("kaleem");

// Array

var students = ["aslam","mohsin","farhan","imtiaz"];
console.log(students);
console.log(students[1]);

students[4]="usman";

console.log(students);


students.push("haseeb"); // last main add karta ha
console.log(students);

students.pop();  // last sy remove karta ha
console.log();

students.shift(); // first sy remove karta ha

students.unshift(); //first main add karta ha

//SPLICES 
// 3 kaam karta ha add , delete

var newstudents = ["ali","umer","ahsan"];
var result = newstudents.splice(2,1);
console.log(result);


var add = newstudents.splice(1,0,"hamza","salim"); //Add kardyga 1 ka mtlb index 1 or zero ka mtlb length 0
console.log(add);

