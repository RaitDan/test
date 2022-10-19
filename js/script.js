"use strict";

const textElement = document.querySelector('.lesson__text');

// const textElementContent = textElement.innerHTML;

// textElement.innerHTML = ` <p>${textElementContent}</p> Кури <span class="green">шмаль</span> и развивайся!`;

// console.log(textElement.innerHTML);
// console.log(textElementContent);

// const textElementContent = textElement.outerHTML;

// textElement.outerHTML = `<p>Я хочу курить 
// <span class="green">шмаль</span> и пить <span class="yellow">сок</span></p>`
// console.log(textElementContent);

const newElement = document.createElement('div');

newElement.innerHTML = `Кури <span class="green">шмаль</span>,
 туси и <span class="yellow">развивай свой мозг</span> на будущее`;
 console.log(newElement); 

 textElement.append(newElement);
 



