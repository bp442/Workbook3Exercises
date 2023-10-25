"use strict";

function parseAndDisplayName(inputName){
   
    const nameArray = inputName.split(" ");

    if (nameArray.length == 1){
        console.log("Name : " + inputName);
    }
    else if(nameArray.length == 2){
        let first = nameArray[0];
        let last = nameArray[1];

        console.log("Name : " + inputName);
        console.log("First name: " + first);
        console.log("Last name : " + last);
    }
    else if(nameArray.length == 3){
        let first = nameArray[0];
        let middle = nameArray[1];
        let last = nameArray[2];

        console.log("Name : " + inputName);
        console.log("First name: " + first);
        console.log("Middle name: " + middle);
        console.log("Last name : " + last);
    }
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");