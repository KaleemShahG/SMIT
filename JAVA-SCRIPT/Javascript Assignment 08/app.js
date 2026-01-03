let now = new Date();
document.write("Current Date & Time: " + now);


let months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];
let now = new Date();
let currentMonth = months[now.getMonth()];
alert("Current Month: " + currentMonth);
