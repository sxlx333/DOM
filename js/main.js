import { capitalize } from "./capitalize.js";
console.log('LOG MAIN FILE...');

const homeDOM = document.getElementById('home');
console.log(homeDOM);

const footerDOM = document.getElementById('main_footer');
console.log(footerDOM);

const linksDOM = document.getElementsByTagName('a');
console.log(linksDOM);

const h1DOM = document.getElementsByTagName('h1');
console.log(h1DOM);

const h2DOM = document.getElementsByTagName('h2');
console.log(h2DOM);

console.log(h2DOM[1]);


const sectionTitleDOM = document.getElementsByClassName('section-title');
// The document.getElementsByClassName('section-title') method retrieves all elements in the document that have the section-title class. This method returns a live HTMLCollection, which is an array-like object. Any changes to the DOM that affect elements with the section-title class will automatically update this collection.
console.log(sectionTitleDOM);
console.log(sectionTitleDOM.length);

for (let i = 0; i < sectionTitleDOM.length; i++) {
    console.log(i, sectionTitleDOM[i]);
}
//Structure: This is a traditional for loop where you manually control the iteration using an index variable (i). Control: You have access to the index (i), allowing you to use it in the loop body. This is useful if you need to know the current index or if you want to access other elements or data structures by index. Accessing Elements: You access elements in the collection using sectionTitleDOM[i]. Output: The console.log(i, sectionTitleDOM[i]); will print the index and the corresponding element in each iteration.


for (const titleDOM of sectionTitleDOM) {
    console.log(titleDOM);
}
// The for...of loop is used to iterate over each element in the sectionTitleDOM collection. During each iteration, titleDOM represents a single h2 element with the class section-title.The console.log(titleDOM) statement logs each h2 element to the console.

//When this code is run: The getElementsByClassName method will select the six h2 elements with the section-title class from the HTML. The for...of loop will iterate through each of these elements and log them to the console one by one.

//The traditional for loop provides access to the index (i), which can be useful for specific tasks (e.g., counting, conditional logic based on index). The for...of loop does not give you the index by default; it only gives you the value of each element.
// The for...of loop is more concise and easier to read when you only need to work with the elements themselves and don’t need the index. The traditional for loop is more flexible if you need additional control over the iteration (like skipping elements or accessing the index).

console.clear();

const text1 = sectionTitleDOM[0].textContent;// .textContent Definition: Retrieves or sets the text content of an element and all its descendants. The text is returned exactly as it appears in the HTML, including whitespace, line breaks, and hidden elements. Generally faster. Use Case: Extracting raw text, including hidden content. Scenarios where you need the exact content, including whitespace, without considering layout or visibility.

const text2 = sectionTitleDOM[0].innerText;  // innertext padaro svaru teksta istriminta viska ir atvaizduoja eiluteje. little slower method. Use Case: Extracting text exactly as it is displayed to the user, for example, in screen readers or copying text that should match the visual appearance. Scenarios where you want the content as it appears to the user, ignoring hidden elements.
console.log(text1);
console.log(text2);
console.log(text1 === text2);
console.log(text1.trim() === text2);



// for (const titleDOM of sectionTitleDOM) {
//     titleDOM.textContent = titleDOM.textContent.toLowerCase();
// }  // visus susiradus sectiontitle h2 elementus paverciami i mazasias raides.



// capitalize su funkcija
for (const titleDOM of sectionTitleDOM) {
    titleDOM.textContent = capitalize(titleDOM.textContent);
}


