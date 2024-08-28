import { header } from "./header.js";
header('snake');


// iskeltos reiksmes is funkcijos ribu i globalius kad naudoti kitose funkcijose
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

let snakeDOM = null;
let heartDOM = null;
const snakePosition = {
    x: 0,   // langeliais matuojamos reiksmes tarsi koordinates
    y: 0,
};
const heartPosition = {
    x: 2,   // langeliais matuojamos reiksmes tarsi koordinates
    y: 2,
};
const world = {
    width: 2,
    height: 2,
};


function renderWorld () {
    let HTML = '';
    for (let y = 0; y <world.height; y++) {  // pagal rows
        // let cellHTML = '';
        // for (let x = 0; x<width; x++) {  // pagal width cells
        //     cellHTML += '<div class="cell"></div>';
        // }
        const cellHTML = '<div class="cell"></div>'.repeat(world.width); // tas pats tik su repeat veitoj dvieju ciklu
        HTML += `<div class=row>${cellHTML}</div>`; // i rows iterpiam cells
    }
    worldDOM.innerHTML = HTML
        + `<img class="heart" style="top: 96px; left: 96px;" src="../images/heath.png" alt="heart">`
        + `<img class="snake" style="top: 0px; left: 0px;" src="../images/snake-round.png" alt="Snake">`
    ; // uzpildo pasauly langeliais ir pridedam paveiksliukus ant virsjaus
    
    
    
    snakeDOM = document.querySelector('.snake');
    heartDOM = document.querySelector('.heart');
    
    // snake turest judeti 
    
    
    snakeDOM.style.top = (snakePosition.y * cellSize) + 'px';
    snakeDOM.style.left = (snakePosition.x * cellSize) + 'px';
    
    heartDOM.style.top = (heartPosition.y * cellSize) + 'px';
    heartDOM.style.left = (heartPosition.x * cellSize) + 'px';
    
}

function randomHeartPosition () {
    const newX =  Math.floor(Math.random() * world.width);
    const newY = Math.floor(Math.random() * world.height);
    // Check for overlap and recursively call if they match
    if (newX !== snakePosition.x || newY !== snakePosition.y) {
        heartPosition.x = newX;
        heartPosition.y = newY;
    }   else {
        randomHeartPosition();
    }
}

function gameOfSnakeAndHeart() {
    
const { clientHeight, clientWidth} = worldDOM;  // issitraukia auksti ir ploti teritorijos dydis
// console.log(clientHeight, clientWidth); // testinam susirasti reiksmes kokios apimties world langeliais  

const width = Math.floor(clientWidth / cellSize);    // pasiskaiciuoja didzius
const height = Math.floor(clientHeight / cellSize);

world.width = width;
world.height = height;
// console.log(width, height);  // susirasti kiek yra world erdveje langeliu pagal vieno langelio dydi


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


snakePosition.x = Math.floor(world.width / 2);    // snake starting position centre
snakePosition.y = Math.floor(world.height / 2);  // snake starting position centre

adjustPositionsToBounds();
randomHeartPosition();
renderWorld(); // Re-render the world with the adjusted positions

}
gameOfSnakeAndHeart();


window.addEventListener('resize', function () {  // kai resizinant is naujo sugeneruojamas zaidimas
    gameOfSnakeAndHeart();
 });
 window.addEventListener('keyup', event => {  // kai paspaudus mygtuka ir ji atleidus pasikeicia snake pozicija window'e
    if (event.key === 'w'){
        if (snakePosition.y > 0) {
            snakePosition.y--;
        }
    }
    if (event.key === 'a'){
        if (snakePosition.x > 0) {
            snakePosition.x--;
        }
    }
    if (event.key === 's'){
        if (snakePosition.y + 1 < world.height) {
            snakePosition.y++;
        }
    }
    if (event.key === 'd'){
        if (snakePosition.x + 1 < world.width) {
            snakePosition.x++;
        }
    }
    snakeDOM.style.top = (snakePosition.y * cellSize) + 'px';
    snakeDOM.style.left = (snakePosition.x * cellSize) + 'px';

    if (snakePosition.x === heartPosition.x && snakePosition.y === heartPosition.y) {
        alert('RIP');

        randomHeartPosition();

        //In JavaScript, px is not recognized as a variable but as a string literal that should be concatenated with the position values. It needs to be enclosed in quotes like 'px'
        heartDOM.style.top = (heartPosition.y * cellSize) + 'px';
        heartDOM.style.left = (heartPosition.x * cellSize) + 'px';
    }
 });


// norint padaryti perpiesti mygtuku forma/pasaulio dydi
 formDOM.addEventListener('submit', event => {   // event trumpiniai (ev, e)
    event.preventDefault();

    world.width = +widthDOM.value;
    world.height = +heightDOM.value;

    adjustPositionsToBounds();  // Ensure positions are within the new bounds
    renderWorld();  // Render the world after the adjustments
 }); // nes forma turi mygtuka su tipu 'submit' kreipiamasi i forma ne mygtuka



 // negalima iseiti is ribu
 function adjustPositionsToBounds() {
    // Adjust snake position to be within bounds
    if (snakePosition.x >= world.width) {
        snakePosition.x = world.width - 1;  // Move snake to the nearest valid position
    }
    if (snakePosition.y >= world.height) {
        snakePosition.y = world.height - 1;
    }

    // Adjust heart position to be within bounds
    if (heartPosition.x >= world.width) {
        heartPosition.x = world.width - 1;
    }
    if (heartPosition.y >= world.height) {
        heartPosition.y = world.height - 1;
    }
}



















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