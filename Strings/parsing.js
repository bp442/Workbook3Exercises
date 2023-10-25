"use strict";

function parseAndDisplayName(inputName){
    let spacePos = inputName.indexOf(" ");
    let first = inputName.substring(0, spacePos);
    let last = inputName.substring(spacePos + 1);

    console.log("Name : " + inputName);
    console.log("First name: " + first);
    console.log("Last name : " + last);
}

let name = "Brenda Kaye";

parseAndDisplayName(name);
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");