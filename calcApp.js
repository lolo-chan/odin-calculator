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
        return 'undefined';
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
const clearbtn = document.querySelector('.clear');
const backspace = document.querySelector('.back');
const botdis = document.querySelector('.botdis')
const topdis = document.querySelector('.topdis')

let num;
let num1 = 0;
let num2 = 0;
let operator;
let ans;
let check = 0;
let clear = 0;

btnPlus.addEventListener('click', () => {
    num = parseInt(botdis.textContent);
    if (check == 0) {
        ans = num;
        check++;
    }
    else {
        ans = operate(operator, ans, num);
    }
    operator = '+';
    botdis.textContent = ans;
    topdis.textContent += '+';
    clear = 1;
})

btnMinus.addEventListener('click', () => {
    num = parseInt(botdis.textContent);
    if (check == 0) {
        ans = num;
        check++;
    }
    else {
        ans = operate(operator, ans, num);
    }
    operator = '-';
    botdis.textContent = ans;
    topdis.textContent += '-';
    clear = 1;
});

btnX.addEventListener('click', () => {
    num = parseInt(botdis.textContent);
    if (check == 0) {
        ans = num;
        check++;
    }
    else {
        ans = operate(operator, ans, num);
    }
    operator = '*';
    botdis.textContent = ans;
    topdis.textContent += 'x';
    clear = 1;
});

btnDivide.addEventListener('click', () => {
    num = parseInt(botdis.textContent);
    if (check == 0) {
        ans = num;
        check++;
    }
    else {
        ans = operate(operator, ans, num);
    }
    operator = '/';
    botdis.textContent = ans;
    topdis.textContent += '/';
    clear = 1;
});

equals.addEventListener('click', () => {
    num = parseInt(botdis.textContent);
    ans = operate(operator, ans, num);
    botdis.textContent = ans;
});


clearbtn.addEventListener('click', () => {
    botdis.textContent = '';
    topdis.textContent = '';
    num1 = 0;
    num2 = 0;
    ans = 0;
    check = 0;
});

btn0.addEventListener('click', () => {
    if (clear == 1) {
        botdis.textContent = '';
        clear = 0;
    }
    botdis.textContent += '0';
    topdis.textContent += '0';
});

btn1.addEventListener('click', () => {
    if (clear == 1) {
        botdis.textContent = '';
        clear = 0;
    }
    botdis.textContent += '1';
    topdis.textContent += '1';
});

btn2.addEventListener('click', () => {
    if (clear == 1) {
        botdis.textContent = '';
        clear = 0;
    }
    botdis.textContent += '2';
    topdis.textContent += '2';
});

btn3.addEventListener('click', () => {
    if (clear == 1) {
        botdis.textContent = '';
        clear = 0;
    }
    botdis.textContent += '3';
    topdis.textContent += '3';
});

btn4.addEventListener('click', () => {
    if (clear == 1) {
        botdis.textContent = '';
        clear = 0;
    }
    botdis.textContent += '4';
    topdis.textContent += '4';
});

btn5.addEventListener('click', () => {
    if (clear == 1) {
        botdis.textContent = '';
        clear = 0;
    }
    botdis.textContent += '5';
    topdis.textContent += '5';
});

btn6.addEventListener('click', () => {
    if (clear == 1) {
        botdis.textContent = '';
        clear = 0;
    }
    botdis.textContent += '6';
    topdis.textContent += '6';
});

btn7.addEventListener('click', () => {
    if (clear == 1) {
        botdis.textContent = '';
        clear = 0;
    }
    botdis.textContent += '7';
    topdis.textContent += '7';
});

btn8.addEventListener('click', () => {
    if (clear == 1) {
        botdis.textContent = '';
        clear = 0;
    }
    botdis.textContent += '8';
    topdis.textContent += '8';
});

btn9.addEventListener('click', () => {
    if (clear == 1) {
        botdis.textContent = '';
        clear = 0;
    }
    botdis.textContent += '9';
    topdis.textContent += '9';
});

backspace.addEventListener('click', () => {
    botdis.textContent = botdis.textContent.slice(0,-1);
    topdis.textContent = topdis.textContent.slice(0,-1);
});