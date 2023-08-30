// Iteration 1: Names and Input

/*  1.1 Create a variable `hacker1` with the driver's name.
   1.2 Print `"The driver's name is XXXX"`.
   1.3 Create a variable `hacker2` with the navigator's name.
   1.4 Print `"The navigator's name is YYYY"`.
*/

let hacker1 ='Alexander';
console.log(`The driver's name is ${hacker1}`);
let hacker2 ='Alfonso';
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

/*2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:

   - `The driver has the longest name, it has XX characters.` or
   - `It seems that the navigator has the longest name, it has XX characters.` or
   - `Wow, you both have equally long names, XX characters!`.
*/

if(hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker2.length > hacker1.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
console.log(`Wow, you both have equally long names, XX characters!`);
}


// Iteration 3: Loops

/* 3.1 Print the characters of the driver's name, separated by space, and [in capital letters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), i.e., `"J O H N"`.

   3.2 Print all the characters of the navigator's name in reverse order, i.e., `"nhoJ"`
   3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print:
 - `The driver's name goes first.`
 - `Yo, the navigator goes first, definitely.`
 - `What?! You both have the same name?`
 */

 let capsName = '';
 const length = hacker1.length;

 for (let i = 0; i < length; i++) {
  const currentChar = hacker1[i];
  capsName += currentChar.toUpperCase();

  if (i < length - 1) {
    capsName += ' ';
  }
 }

 console.log(capsName);

 let reverseName = ''

 for (let i = length - 1; i >= 0; i--) {
  const currentChar = hacker1[i];
  reverseName += currentChar;
 }

console.log(reverseName);

const shortestName = hacker1.length < hacker2.length ? hacker1.length : hacker2.length;

for (let i = 0; i <= shortestName; i++) {
  const char1 = hacker1[i].toLowerCase();
  const char2 = hacker2[i].toLowerCase();

  if (char1 < char2) {
    console.log(`The driver's name goes first.`);
    break;
  }  else if (char2 < char1) {
    console.log(`Yo, the navigator goes first, definitely.`);
    break;
  }  else if (i === (shortestName - 1)) {
    console.log(`What?! You both have the same name?`);
  }
}


/* Bonus 1
  - Generate 3 paragraphs. Store the text in a new string variable named `longText`.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.
*/

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ligula tincidunt enim pulvinar lobortis. In fermentum ex nibh, ut molestie ipsum aliquet sed. Praesent varius aliquam libero non eleifend. Fusce ac cursus augue. Duis accumsan, lectus sit amet auctor porttitor, ipsum augue ultrices felis, et maximus ipsum risus sed sem. Phasellus efficitur risus nec molestie pharetra. Vestibulum mollis ligula et est pretium, aliquet placerat tortor dignissim.

Sed elit augue, luctus eget tincidunt sed, faucibus malesuada nisl. Praesent ut eros sit amet nunc venenatis pharetra vel sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate dignissim nulla, non euismod nunc faucibus nec. Nulla quis eros a arcu consequat tempor eu at purus. Mauris tempus ex nec lectus tempor malesuada. Maecenas lectus lorem, tincidunt vel convallis eu, suscipit mollis est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vitae tortor tellus. Integer placerat dictum nisl, quis venenatis neque euismod quis. Vestibulum vehicula mollis neque, et vehicula nisi venenatis ac.

In hac habitasse platea dictumst. Vestibulum mollis est ac dignissim hendrerit. Nulla neque lectus, placerat et lectus eu, mollis fringilla ipsum. Suspendisse consequat orci est, vel dapibus metus aliquet eget. Fusce commodo lorem id lacus gravida, et tempor neque condimentum. Aliquam pretium ac ex nec eleifend. Nulla iaculis vel tortor ac scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce consequat magna ut lacus rhoncus gravida. Duis leo orci, ullamcorper eget metus eget, aliquet posuere urna. Sed risus orci, lobortis vitae nibh nec, elementum blandit leo. Quisque lobortis vulputate rutrum. Praesent quis imperdiet nisi, nec tincidunt elit. Praesent dictum justo a egestas mattis. Fusce sit amet sapien id massa viverra auctor.`

let words = [];
let currentWord = '';

for (let i = 0; i < longText.length; i++) {
  const currentChar = longText[i];

  if (currentChar !== ' ' && currentChar !== '.' && currentChar !== ',') {
    currentWord += currentChar;
  } else {
    words.push(currentWord);
    currentWord = '';
  }

}

const numberOfWords = [];

for (let word of words) {
  if (word !== '') {
    numberOfWords.push(word);
  }
}

console.log(numberOfWords.length);

const etWords = [];

for (let word of words) {
  if (word === 'et') {
    etWords.push(word);
  }
}

console.log(etWords.length);

/*
Create a new variable, `phraseToCheck`, containing some string value. Write a code to check if the value assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes:

  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

const regex = /[^A-Za-z]/g;

let phrase = "A man, a plan, a canal, Panama!"

let sanitizedPhrase = phrase.replace(regex, '');
let phraseToCheck =''

for(let i = sanitizedPhrase.length - 1; i >= 0; i--){
phraseToCheck+=sanitizedPhrase[i];
}


if(phraseToCheck.toLowerCase() == sanitizedPhrase.toLowerCase()){
console.log("Is Palindrom!");
}else{
console.log("Not Palindrome!");
}