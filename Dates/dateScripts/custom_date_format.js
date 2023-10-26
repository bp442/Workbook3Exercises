"use strict";

let currentTime = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
"October", "November", "December"];
let currentDay = weekday[currentTime.getDay()];
let currentMonth = month[Number(currentTime.getMonth())];

let timeString = currentTime.getDate() + "-" + currentMonth + "-" + currentTime.getFullYear() + " (" + 
currentDay + ")";

console.log(timeString);