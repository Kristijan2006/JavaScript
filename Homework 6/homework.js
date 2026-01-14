let paragraph = document.getElementsByClassName('paragraph')[0];
console.log(paragraph.textContent);
paragraph.textContent = 'This is the new text content of the first paragraph';

let paragraph2 = document.getElementsByClassName("paragraph second")[0];
console.log(paragraph2.textContent);
paragraph2.textContent = 'This is the new text content of the second paragraph'

let nextParagraph = document.getElementsByClassName("paragraph second")[0].nextElementSibling;
console.log(nextParagraph.textContent);
nextParagraph.textContent = 'This is the new text content of the third paragraph';

let header = document.getElementById("myTitle");
console.log(header.textContent);
header.textContent = 'This is the new title of the page';

let header2 = document.getElementsByTagName('h1')[1];
console.log(header2.textContent);
header2.textContent = 'This is the new second title of the page';

let header3 = document.getElementsByTagName('h1')[1].nextElementSibling;
console.log(header3.textContent);
header3.textContent = 'This is the new third title of the page';