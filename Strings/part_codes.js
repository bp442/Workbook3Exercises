"use strict";

let colonPos = "0";
let dashPos = "0";

function getSupplier(code){
    colonPos = code.indexOf(":");
    return code.substring(0, colonPos);
}

function getProductNum(code){
    dashPos = code.indexOf("-");
    return code.substring(colonPos + 1, dashPos);
}

function getSize(code){
    return code.substring(dashPos + 1)
}


let sample1 = "ACME:123-L";
let sample2 = "DI:12345-M";
let sample3 = "ACE:1-12";

console.log("Supplier Code: " + getSupplier(sample1));
console.log("Product Number: " + getProductNum(sample1));
console.log("Size : " + getSize(sample1));

console.log("Supplier Code: " + getSupplier(sample2));
console.log("Product Number: " + getProductNum(sample2));
console.log("Size : " + getSize(sample2));

console.log("Supplier Code: " + getSupplier(sample3));
console.log("Product Number: " + getProductNum(sample3));
console.log("Size : " + getSize(sample3));