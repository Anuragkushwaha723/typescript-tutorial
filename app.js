"use strict";
let num1Element = document.getElementById('num1');
let num2Element = document.getElementById('num2');
let buttonElement = document.querySelector('button');
let numberArray = [];
let textArray = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
    return +num1 + +num2;
}
function stringObject(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const resultString = add(num1, num2);
    stringObject({ val: result, timeStamps: new Date() });
    numberArray.push(result);
    console.log(numberArray);
    textArray.push(resultString);
    console.log(textArray);
});
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It's worked");
    }, 3000);
});
promise1.then((res) => { console.log(res); });
