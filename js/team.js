const teamSectionDOM = document.getElementById("team"); // pasirenka id team kur bus pakeistas tekslas su innerhtml
const teamMembers = [`Jonas`, `Marytė`, `Petras`, `Ona`, `Arvydas`, `Aldona`, `Zosa`, `Juozapas`, `Martynas`, `Aloyzas`, `Anastasija`, `Antanas`]; // sukonstruojamas masyvas su vardais

let membersHTML = '';  // tuscias string kuriame bus iterpiami vardai
for (const name of teamMembers) { // kiekviena varda masyve esanciam pasirenka 
    membersHTML += `<li class="member">${name}</li>`; // for of ciklas kuriame pridedamos reiksmes i tuscia string su li elementu 
}


teamSectionDOM.innerHTML = `<ul>${membersHTML}</ul>`; // isvedami is ciklo li elementai su vardais i neeiliuota sarasa taskais zymyma



// kai jau turinys yra sugeneruotas tada galima is naujo ju ieskoti consoleje su js

const membersListDOM = document.getElementsByClassName('member');
console.log(membersListDOM);

// galime surasti su ciklu teksta - kas parasyta kiekvienam elemente

for (const memberDOM of membersListDOM) {
    console.log(memberDOM.innerText);
}


