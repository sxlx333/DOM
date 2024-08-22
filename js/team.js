const teamSectionDOM = document.getElementById("team"); // pasirenka id team kur bus pakeistas tekslas su innerhtml
const teamMembers = [`Jonas`, `Marytė`, `Petras`, `Ona`, `Arvydas`, `Aldona`, `Zosa`, `Juozapas`, `Martynas`, `Aloyzas`, `Anastasija`, `Antanas`]; // sukonstruojamas masyvas su vardais

let membersHTML = '';  // tuscias masyvas kuriame bus iterpiami vardai
for (const name of teamMembers) { // kiekviena varda masyve esanciam pasirenka 
    membersHTML += `<li class="member">${name}</li>`; // for of ciklas kuriame pridedamos reiksmes i tuscia masyva su li elementu 
}


teamSectionDOM.innerHTML = `<ul>${membersHTML}</ul>`; // isvedami is ciklo li elementai su vardais i neeiliuota sarasiuka taskais zymyma



// kai jau turinys yra sugeneruotas tada galima is naujo ju ieskoti consoleje su js

const membersListDOM = document.getElementsByClassName('member');
console.log(membersListDOM);

// galime surasti su ciklu teksta - kas parasyta kiekvienam elemente

for (const memberDOM of membersListDOM) {
    console.log(memberDOM.innerText);
}


/* ND
failas: header.js
- jis iskvieciamas kiekviename puslapyje
- jame yra funkcija header()
- ji sugeneruoja normalu headeri
- nuorodas galima su cikliuku padaryti kaip anksciau team.js virsuj su vardais
<header>
    <img>
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </nav>
</header>


istatome i HTML ir isitikiname, jog galima naviguoti po projekto puslapius
*/