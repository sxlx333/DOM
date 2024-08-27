/**
 * Sugeneruoja <header> elemento HTML ir įstato į DOM.
 * @param {string} currentHref Norimos pažymėti nuorodos `href` reiksmė
 */


export function header(currentHref) {
    const navData = [
        {
            href: '',
            text: 'Pagrindinis',
        },
        {
            href: 'services',
            text: 'Paslaugos',
        },
        {
            href: 'team',
            text: 'Komanda',
        },
        {
            href: 'about',
            text: 'Apie',
        },
        {
            href: 'contactus',
            text: 'Kontaktai',
        },
        {
            href: 'basketball',
            text: 'Krepšinis',
        },
        {
            href: 'tournament',
            text: 'Turnyras',
        },
        {
            href: 'snake',
            text: 'Gyvatėlė',
        },
    ];

    let navHTML = '';

    for (const link of navData) {
        let classes = '';

        if (currentHref === link.href) {
            classes = 'link active';
        } else {
            classes = 'link';
        }

        navHTML += `<a class="${classes}" href="../${link.href}">${link.text}</a>`;
    }

    const headerHTML = `
    <header class="header">
        <img class="logo" src="/images/main-logo.jpg" alt="logo">
        <nav class="nav">${navHTML}</nav>
    </header>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}





















// export function header () {
//     const headerListDOM = document.getElementsByTagName('header');

// if (headerListDOM.length === 0) {
//     console.error('Nepavyko rasti "header" elemento.');
// } else {
//     const headerDOM = headerListDOM[0];
//     const headerElements = [
//         `<a id="home" href="/index.html">Home</a>`,
//         `<a href="/services/">Services</a>`,
//         `<a href="/team/">TEAM</a>`,
//         `<a href="/about/about.html">About</a>`,
//         `<a href="/contactus/contactus.html">Contact us</a>`
//     ];
//     // Start building the header
//     let headersHTML = `
//         <img src="/images/main-logo.jpg" alt="logo">
//         <nav>`;

//     // Loop through each element and add it to the <nav>
//     for (const element of headerElements) {
//         headersHTML += element;
//     }

//     // Close the <nav> tag
//     headersHTML += `</nav>`;

//     // Set the header's innerHTML
//     headerDOM.innerHTML = headersHTML;
// }};
// header();


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
