
/*
Notes from class 5 / 3 / 2023
    o GMT is the universal time zone
*/
let date = new Date();

//only show the date 
console.log(date);

//date and time shown in GMT
console.log(date.toString());

//euopoean time
console.log(date.toUTCString());

//just shows the date
console.log(date.toDateString());

//also just shows the date
console.log(date.toLocaleDateString());

let anticipatedDate = new Date(2023, 5, 7, 15, 30, 10);
console.log(anticipatedDate.toString());