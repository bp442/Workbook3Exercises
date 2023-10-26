"use strict";

//num of days between dates
let startDate = "July 11, 2022";
let endDate = "November 11, 2022";

let dateStart = new Date(startDate);
let dateEnd = new Date(endDate);

let betweenTime = dateEnd.getTime() - dateStart.getTime();
let betweenDays = (betweenTime / (1000 * 3600 * 24)).toFixed(0);

console.log("Total number of days between these dates: ");
console.log(startDate);
console.log(endDate);
console.log(betweenDays + " days.");