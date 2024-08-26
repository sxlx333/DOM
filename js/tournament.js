import { header } from "./header.js";
header('tournament');

const calc1SectionDOM = document.getElementById('calc1');
const calcSectionDOM = document.getElementById('calc');

const plusPirmas1DOM = document.getElementById('1');
const plusPirmas2DOM = document.getElementById('2');
const plusPirmas3DOM = document.getElementById('3');

const plusAntras1DOM = document.getElementById('4');
const plusAntras2DOM = document.getElementById('5');
const plusAntras3DOM = document.getElementById('6');

const numberPirmasDOM = calc1SectionDOM.querySelector('.number1');
const numberAntrasDOM = calc1SectionDOM.querySelector('.number2');

let count1 = 0;
let count2 = 0;

function upByPirmas1() {
    numberPirmasDOM.textContent = ++count1;
}
function upByAntras1 () {
    numberAntrasDOM.textContent = ++count2;
}

function upPirmasBy2(){
    count1 += 2; // update count1
    numberPirmasDOM.textContent = count1;
}
function upAntrasBy2(){
    count2 += 2; // update count2
    numberAntrasDOM.textContent = count2;
}

function upPirmasBy3(){
    count1 += 3; // update count1
    numberPirmasDOM.textContent = count1;
}
function upAntrasBy3(){
    count2 += 3; // update count2
    numberAntrasDOM.textContent = count2;
}

plusPirmas1DOM.addEventListener('click', upByPirmas1);
plusAntras1DOM.addEventListener('click', upByAntras1);

plusPirmas2DOM.addEventListener('click', upPirmasBy2);
plusAntras2DOM.addEventListener('click', upAntrasBy2);

plusPirmas3DOM.addEventListener('click', upPirmasBy3);
plusAntras3DOM.addEventListener('click', upAntrasBy3);