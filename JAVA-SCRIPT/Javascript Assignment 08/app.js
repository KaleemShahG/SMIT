// let now = new Date();
// document.write("Current Date & Time: " + now);


// let months = [
//   "January", "February", "March", "April",
//   "May", "June", "July", "August",
//   "September", "October", "November", "December"
// ];
// let now = new Date();
// let currentMonth = months[now.getMonth()];
// alert("Current Month: " + currentMonth);


// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let today = new Date();
// let currentDay = days[today.getDay()];
// alert("Today is: " + currentDay);


// let today = new Date();
// let day = today.getDay(); // 0 = Sunday, 6 = Saturday
// if (day === 0 || day === 6) {
//   alert("It’s Fun day");
// }


// let today = new Date();
// let date = today.getDate();
// if (date < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }


// let now = new Date();
// minutesSinceEpoch = Math.floor(now.getTime() / (1000 * 60));
// document.write("Minutes since Jan 1, 1970: " + minutesSinceEpoch);


// let now = new Date();
// let hours = now.getHours();
// if (hours < 12) {
//   alert("Its AM");
// } else {
//   alert("Its PM");
// }


// let laterDate = new Date(2020, 11, 31);
// document.write(laterDate);
// let ramadanStart = new Date(2015, 5, 18); // June = 5
// let today = new Date();
// let diffTime = today.getTime() - ramadanStart.getTime();
// let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
// alert(diffDays + " days have passed since 1st Ramadan, 2015");


// let referenceDate = new Date(1970, 0, 1); // Jan 1, 1970
// let start2015 = new Date(2015, 0, 1);     // Jan 1, 2015
// let diffTime = start2015.getTime() - referenceDate.getTime();
// let diffSeconds = diffTime / 1000;
// document.write("Seconds elapsed between reference date and Jan 1, 2015: " + diffSeconds);


// let currentDate = new Date();
// let currentHours = currentDate.getHours();
// console.log("Current Hours: " + currentHours);
// currentDate.setHours(currentHours + 1);
// document.write("Date & Time after 1 hour: " + currentDate);


// let currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years back: " + currentDate);



// let age = parseInt(prompt("Enter your age"));
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;
// document.write("Your birth year is: " + birthYear);