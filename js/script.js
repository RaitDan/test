"use strict";

let users = ['Ваня', 'Иштван',];

users.push('Оля');
console.log(users);

users.splice(1, 1, 'Петя');
console.log(users);

let oneUsers = users.splice(0, 1);
console.log(oneUsers);
console.log(users);

users.splice(0, 0, 'Маша', 'Паша');
console.log(users);


let arr = ['Ваня', 'Иштван', 'Оля',];

let arrTwo = arr.splice(1, 1);

console.log(arr);
console.log(arrTwo);

let str = 'Ваня,Иштван,Оля';

let newStr = str.split(',');

console.log(newStr);







