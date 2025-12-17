// sort

// var arr1 =[3,9,6,4,8,5,2]
// arr1.sort()
// console.log(arr1);

// reverse 

// var arr2 =[3,9,6,4,8,5,2]
// arr2.reverse()
// console.log(arr2);

// split

// var arr3 ="lorem ipsum dolor sit amet"
// var res = arr3.split("") 
// console.log(res);

//Join

// var array =["hello","world","kaleem"]
// var kaleem = array.join("*")
// console.log(kaleem);

// splice

// var arr4 =[3,9,6,4,8,5,2]
// arr4.splice(2,3,11,12,13)
// console.log(arr4);

// =========== LOOPS======================
// for loop
//Question 1:

// for (var a=1; a<=5; a++){
//     console.log(a);
    
// }

//Question 2: print * pattern 

// for (var i=1 ; i<=5; i++){
// for(var j=1; j<=i; j++){
//     console.log( );}
//     console.log("*".repeat(i));

// }

// var cities =["karachi","lahore","islamabad","quetta","peshawar"]
// var visitor = prompt("Enter your City")
// var found =false;

// for (var b = 0 ; b < cities.length;b++){
//     if (cities[b]==visitor ){
//         found = true;

//     }
//     console.log();
    
// }

// if(found){
//     console.log();
    
// } else {
//     console.log();
    
// }

var countries = ["pakistan","srilanka","turkey","Bangladash"]
var cities = ["karachi","columbo","istanbul","dhaka"]

for (var c= 0 ; c < countries.length; c++){
    console.log("The capital of " + countries[c] + " is " + cities[c]);

}
