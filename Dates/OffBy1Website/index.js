"use strict";

window.onload() = init;

function init(){
    const buttonClicked = document.getElementById("dateBtn");

    buttonClicked.onclick = displayAsString;
}


function displayAsString(){
    let theDate = (document.getElementById("dateInput").value);
    theDate = theDate.toString();

    console.log(theDate);
    let answerField = document.getElementById("answerField");
    answerField.innerHTML = theDate;
}
