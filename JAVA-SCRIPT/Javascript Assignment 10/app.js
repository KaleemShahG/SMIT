// function power(a, b) {
//   let result = 1;
//   for (let i = 1; i <= b; i++) {
//     result = result * a;
//   }
//   return result;
// }
// let base = parseInt(prompt("Enter base (a)"));
// let exponent = parseInt(prompt("Enter exponent (b)"));
// let answer = power(base, exponent);
// document.write(base + " raised to " + exponent + " is: " + answer);


// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return "Leap Year";
//   } else {
//     return "Not a Leap Year";
//   }
// }
// let year = parseInt(prompt("Enter a year"));
// let result = isLeapYear(year);
// document.write(year + " is a " + result);


// function triangleArea(a, b, c) {
//   let S = (a + b + c) / 2;
//   let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//   return area;
// }
// let a = parseFloat(prompt("Enter side a"));
// let b = parseFloat(prompt("Enter side b"));
// let c = parseFloat(prompt("Enter side c"));
// let result = triangleArea(a, b, c);
// document.write("Area of Triangle is: " + result.toFixed(2));


// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }
// function triangleArea(a, b, c) {
//   let S = calculateS(a, b, c);
//   return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }
// let a = 5, b = 6, c = 7;
// let area = triangleArea(a, b, c);
// document.write("Area of Triangle: " + area.toFixed(2) + "<br><br>");


// function customIndexOf(str, char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }
// let text = "JavaScript";
// let searchChar = "S";
// let result = customIndexOf(text, searchChar);
// document.write("Index: " + result);


// function removeVowels(sentence) {
//   let result = "";
//   for (let i = 0; i < sentence.length; i++) {
//     let ch = sentence[i].toLowerCase();
//     if (
//       ch !== "a" &&
//       ch !== "e" &&
//       ch !== "i" &&
//       ch !== "o" &&
//       ch !== "u"
//     ) {
//       result += sentence[i];
//     }
//   }
//   return result;
// }
// let text = prompt("Enter a sentence (max 25 characters)");
// let output = removeVowels(text);
// document.write("Without vowels: " + output);


// function countSuccessiveVowels(text) {
//   let count = 0;
//   for (let i = 0; i < text.length - 1; i++) {
//     let pair = text[i].toLowerCase() + text[i + 1].toLowerCase();
//     switch (pair) {
//       case "aa":
//       case "ae":
//       case "ai":
//       case "ao":
//       case "au":
//       case "ea":
//       case "ee":
//       case "ei":
//       case "eo":
//       case "eu":
//       case "ia":
//       case "ie":
//       case "ii":
//       case "io":
//       case "iu":
//       case "oa":
//       case "oe":
//       case "oi":
//       case "oo":
//       case "ou":
//       case "ua":
//       case "ue":
//       case "ui":
//       case "uo":
//       case "uu":
//         count++;
//         break;
//     }
//   }
//   return count;
// }
// let sentence = prompt("Enter a sentence");
// let result = countSuccessiveVowels(sentence);
// document.wri


// function toMeters(km) {
//   return km * 1000;
// }
// function toFeet(km) {
//   return km * 3280.84;
// }
// function toInches(km) {
//   return km * 39370.1;
// }
// function toCentimeters(km) {
//   return km * 100000;
// }
// let distanceKm = parseFloat(prompt("Enter distance between two cities (in km)"));
// document.write("Distance in Kilometers: " + distanceKm + " km<br>");
// document.write("Distance in Meters: " + toMeters(distanceKm) + " m<br>");
// document.write("Distance in Feet: " + toFeet(distanceKm).toFixed(2) + " ft<br>");
// document.write("Distance in Inches: " + toInches(distanceKm).toFixed(2) + " in<br>");
// document.write("Distance in Centimeters: " + toCentimeters(distanceKm) + " cm");


// function calculateOvertime(hoursWorked) {
//   let overtimePay = 0;
//   if (hoursWorked > 40) {
//     let overtimeHours = hoursWorked - 40;
//     overtimePay = overtimeHours * 12;
//   }
//   return overtimePay;
// }
// let hours = parseInt(prompt("Enter total hours worked"));
// let pay = calculateOvertime(hours);
// document.write("Hours Worked: " + hours + "<br>");
// document.write("Overtime Pay: Rs. " + pay.toFixed(2));
