"use strict";

function displayMailingLabel(name, address, city, state, zip){
    console.log(name + "'s address is " + address + ", " + city + ", " + state + ", " + zip);
}

displayMailingLabel("Brian", "200 Anderson Avenue", "Englewood Cliffs", "New Jersey", "07040");
displayMailingLabel("Evil Brian", "-200 Anderson Avenue", "Cliffwood Engles", "Old Jersey", "04070");

function addNumbers(num1, num2){
    let finalNumber = num1 + num2;

    console.log(num1 + " + " + num2 + " = " + finalNumber);
}

addNumbers(5, 10);
addNumbers(10, 15);

function displayReceipt(totalDue, amountPaid){
    let changeDue = amountPaid - totalDue;

    console.log("Total Due : $" + totalDue);
    console.log("Amount Paid : $" + amountPaid);
    console.log("Change Due : $" + changeDue);
}

displayReceipt(100, 150);
displayReceipt(100, 100);
displayReceipt(300, 150);