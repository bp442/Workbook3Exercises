"use strict";

window.onload = init;

function init(){
    const buttonClicked = document.getElementById("dateBtn");

    buttonClicked.onclick = displayAsString;
}


function displayAsString(){
    const theDate = document.getElementById("dateInput").value;

    let answerField = document.getElementById("answerField");
    answerField.innerHTML = theDate.toString();
}
