const headerListDOM = document.getElementsByTagName('header');

if (headerListDOM.length === 0) {
    console.error('Nepavyko rasti "header" elemento.');
} else {
    const headerDOM = headerListDOM[0];
    const headerElements = [
        `<a id="home" href="/index.html">Home</a>`,
        `<a href="/services/">Services</a>`,
        `<a href="/team/">TEAM</a>`,
        `<a href="/about/about.html">About</a>`,
        `<a href="/contactus/contactus.html">Contact us</a>`
    ];
    // Start building the header
    let headersHTML = `
        <img src="/images/main-logo.jpg" alt="logo">
        <nav>`;

    // Loop through each element and add it to the <nav>
    for (const element of headerElements) {
        headersHTML += element;
    }

    // Close the <nav> tag
    headersHTML += `</nav>`;

    // Set the header's innerHTML
    headerDOM.innerHTML = headersHTML;
}

// `
//     <header>
//         <img src="/images/main-logo.jpg" alt="logo">
//         <nav>
//             <a id="home" href="/index.html">Home</a>
//             <a href="/services/">Services</a>
//             <a href="/team/">TEAM</a>
//             <a href="/about/about.html">About</a>
//             <a href="/contactus/contactus.html">Contact us</a>
//         </nav>
//     </header>`


// ND
// failas: header.js
// - jis iskvieciamas kiekviename puslapyje  (services, team, about, contact us) nes home jau turi header
// - jame yra funkcija header()
// - ji sugeneruoja normalu headeri
// - nuorodas galima su cikliuku padaryti kaip anksciau team.js virsuj su vardais
// <header>
//     <img>
//     <nav>
//         <a href="#">Home</a>
//         <a href="#">About</a>
//         <a href="#">Services</a>
//         <a href="#">Contact</a>
//     </nav>
// </header>
// istatome i HTML ir isitikiname, jog galima naviguoti po projekto puslapius
