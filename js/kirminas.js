import { header } from "./header.js";

header('snake');

const formDOM = document.forms[0];
const [widthDOM, heightDOM] = formDOM.querySelectorAll('input'); // [{}, {}]
const [widthNoteDOM, heightNoteDOM] = formDOM.querySelectorAll('.note'); // [{}, {}]



// // destrukturizavimas masyve
// const formDOM = document.forms[0];
// const allInputsDOMs = formDOM.querySelectorAll('input'); // [{}, {}]
// const allNoteDOMs = formDOM.querySelectorAll('.note'); // [{}, {}]
// const widthDOM = allInputsDOMs[0];
// const heightDOM = allInputsDOMs[1];
// const widthNoteDOM = allNoteDOMs[0];
// const heightNoteDOM = allNoteDOMs[1];



// matuojam visa world ploti
const worldDOM = document.getElementById('world');
//console.log([worldDOM]);
// idedant i masyva galima per console inspect paziureti duomenis surasti clientHeight ir pan tai duomenys px
/*
clientHeight: 563  susijes su paties elemento dydziu
offsetHeight: 563  susije su pozicionavimu
scrollHeight: 563

clientWidth: 1241
offsetWidth: 1241
scrollWidth: 1268

*/

const cellSize = 48;  
const { clientHeight, clientWidth} = worldDOM;
// console.log(clientHeight, clientWidth); // testinam susirasti reiksmes kokios apimties world langeliais  

const width = Math.floor(clientWidth / cellSize);
const height = Math.floor(clientHeight / cellSize);
console.log(width, height);  // susirasti kiek yra world erdveje langeliu pagal vieno langelio dydi


// uzpildo forma su perskaiciuota informacija pagal ekrano dydi
widthDOM.value = width; // iraso pirmini value
widthDOM.max = width;  // overridina max value
widthNoteDOM.textContent = 'max plotis: ' + width;  // nustatomos reiksmes max height ir width automatiskai nuo vh reiksmes
heightDOM.value= height;
heightDOM.max = height;
heightNoteDOM.textContent = 'height aukštis: ' + height;


/*
        <div class="row">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
        <div class="row">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>       SUGENERUOTI TOKI STRINGA pagal world 
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
        <div class="row">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
*/

let HTML = '';
for (let y = 0; y <height; y++) {  // pagal rows
    // let cellHTML = '';
    // for (let x = 0; x<width; x++) {  // pagal width cells
    //     cellHTML += '<div class="cell"></div>';
    // }
    const cellHTML = '<div class="cell"></div>'.repeat(width); // tas pats tik su repeat veitoj dvieju ciklu
    HTML += `<div class=row>${cellHTML}</div>`; // i rows iterpiam cells
}
worldDOM.innerHTML = HTML
    + `<img class="heart" style="top: 96px; left: 96px;" src="../images/heath.png" alt="heart">`
    + `<img class="snake" style="top: 0px; left: 0px;" src="../images/snake-round.png" alt="Snake">`
; // uzpildo pasauly langeliais ir pridedam paveiksliukus ant virsjaus



const snakeDOM = document.querySelector('.snake');
const heartDOM = document.querySelector('.heart');

// snake turest judeti 

const snakePosition = {
    x: 2,   // langeliais matuojamos reiksmes tarsi koordinates
    y: 1,
};
snakeDOM.style.top = (snakePosition.y * cellSize) + 'px';
snakeDOM.style.left = (snakePosition.x * cellSize) + 'px';


const heartPosition = {
    x: 1,   // langeliais matuojamos reiksmes tarsi koordinates
    y: 1,
};
heartDOM.style.top = (heartPosition.y * cellSize) + 'px';
heartDOM.style.left = (heartPosition.x * cellSize) + 'px';





















// const person = {
//     name: 'Jonas',
//     age: 99,
// };

// // const name = person.name;
// // const age = person.age;
// // tas pats destructurizavimas objekto
// // const {name, age} = person;



// const marks = [10, 2, 8, 4, 6];

// const first = marks[0];
// const second = marks[1];
// // destructurizavimas masyvo
// const [first, second] = marks;