"use strict";

function getSocSecTax(grossPay){
    let taxRate = 0.62;
    let tax = grossPay * taxRate;

    return tax.toFixed(2);
}

function getMedicareTax(grossPay){
    let taxRate = 0.0145;
    let tax = grossPay * taxRate;

    return tax.toFixed(2);
}

function getFederalTax(grossPay, witholdingCode){
    let taxRate = 0.23;
    let tax = 0;

    if(witholdingCode == 0){
        tax = grossPay * taxRate;

        return tax.toFixed(2);
    }
    else if(witholdingCode == 1){
        taxRate = 0.21;
        tax = grossPay * taxRate;

        return tax.toFixed(2);
    }
    else if(witholdingCode == 2){
        taxRate = 0.195;
        tax = grossPay * taxRate;

        return tax.toFixed(2);
    }
    else if(witholdingCode == 3){
        taxRate = 0.185;
        tax = grossPay * taxRate;

        return tax.toFixed(2);
    }
    else{
        taxRate = 0.18 - (2*0.005);
        tax = grossPay * taxRate;

        return tax.toFixed(2);
    }
}

let grossPay1 = 750, witholdingCode1 = 0;
let grossPay2 = 1550, witholdingCode2 = 2;
let grossPay3 = 1100, witholdingCode3 = 6;

console.log("Social Security Taxes in order: ");
console.log(getSocSecTax(grossPay1));
console.log(getSocSecTax(grossPay2));
console.log(getSocSecTax(grossPay3));

console.log("Medicare Taxes in order: ");
console.log(getMedicareTax(grossPay1));
console.log(getMedicareTax(grossPay2));
console.log(getMedicareTax(grossPay3));

console.log("Federal Taxes in order: ");
console.log(getFederalTax(grossPay1, witholdingCode1));
console.log(getFederalTax(grossPay2, witholdingCode2));
console.log(getFederalTax(grossPay3, witholdingCode3));