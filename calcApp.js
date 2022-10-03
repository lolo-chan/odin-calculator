function add(num1,num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    if (num2 !== 0){
        return num1/num2;
    }
    else{
        console.log('Undefined');
    }
}

function operate(operator, num1, num2){
    if (operator==='+'){
        return add(num1,num2);
    }
    if (operator==='-'){
        return subtract(num1,num2);
    }
    if (operator==='*'){
        return multiply(num1,num2);
    }
    if (operator==='/'){
        return divide(num1,num2);
    }
}

const equals = document.querySelector('.equals');
const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const btnX = document.querySelector('.X');
const btnDivide = document.querySelector('.division');

const btn0 = document.querySelector('.zero');
const btn1 = document.querySelector('.one');
const btn2 = document.querySelector('.two');
const btn3 = document.querySelector('.three');
const btn4 = document.querySelector('.four');
const btn5 = document.querySelector('.five');
const btn6 = document.querySelector('.six');
const btn7 = document.querySelector('.seven');
const btn8 = document.querySelector('.eight');
const btn9 = document.querySelector('.nine');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.back');
const display = document.querySelector('.display');

let num1 = 0;
num2 = 0;
let operator;
let ans;
let check = 0;

btnPlus.addEventListener('click', () => {
    num1 = parseInt(display.textContent);
    display.textContent = '';
    operator = '+';
    if (check > 0){
        ans = operate(operator, ans, num1);
    }
    else{
        ans = num1;
    }
    check++;
});

btnMinus.addEventListener('click', () => {
    num1 = parseInt(display.textContent);
    display.textContent = '';
    operator = '-';
    if (check > 0){
        ans = operate(operator, ans, num1);
    }
    else{
        ans = num1;
    }
    check++;
});

btnX.addEventListener('click', () => {
    num1 = parseInt(display.textContent);
    display.textContent = '';
    operator = '*';
});

btnDivide.addEventListener('click', () => {
    num1 = parseInt(display.textContent);
    display.textContent = '';
    operator = '/';
});

equals.addEventListener('click', () => {
    num2 = parseInt(display.textContent);
    display.textContent = operate(operator, ans, num1);
    check = 0;
});


clear.addEventListener('click', () => {
    display.textContent = '';
    num1 = 0;
    num2 = 0;
    ans = 0;
    check = 0;
});

btn0.addEventListener('click', () => {
    display.textContent += '0';
});

btn1.addEventListener('click', () => {
    display.textContent += '1';
});

btn2.addEventListener('click', () => {
    display.textContent += '2';
});

btn3.addEventListener('click', () => {
    display.textContent += '3';
});

btn4.addEventListener('click', () => {
    display.textContent += '4';
});

btn5.addEventListener('click', () => {
    display.textContent += '5';
});

btn6.addEventListener('click', () => {
    display.textContent += '6';
});

btn7.addEventListener('click', () => {
    display.textContent += '7';
});

btn8.addEventListener('click', () => {
    display.textContent += '8';
});

btn9.addEventListener('click', () => {
    display.textContent += '9';
});

backspace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0,-1);
});