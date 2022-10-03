"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// // const copy = obj;

// // copy.a = 10;

// // console.log(copy);
// // console.log(obj);

// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//          objCopy[key] = mainObj[key]
//     }
// }





// let userInfo = {
//     name: "Вася",
//     age: 30,
// }


// let user = Object.assign({}, userInfo);

// user.age = 18;
// userInfo.name = "Даша";

// console.log(userInfo);
// console.log(user);


// let userWeed = {
//     name: "Даня",
//     age: 20,
// }

// Object.assign(userWeed, {['Likes Weed']: true, city: "Chisinau"});
// console.log(userWeed);



// let personeInfo = {
//     name: "Шмаль",
//     age: 2,
//     adress: {
//         city: "Chisinau",
//         street: "Freedom",
//     }
// }

// for (let key in personeInfo) {
//     //Ключи
//     console.log(key);
//     //Значения ключей
//     console.log(personeInfo[key]);
// }

// for (let key in personeInfo.adress) {
//     //Ключи
//     console.log(key);
//     //Значения ключей
//     console.log(personeInfo.adress[key]);
// }


//Дублирование объектов
const obj = {
    a: 5,
    b: 1
};

// const copy = Object.assign({},obj);

// copy.a = 10;
// copy.b = 15 - 6;

// console.log(obj);
// console.log(copy); 

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
}


let num = 50;

for (let i = 1; i < 10; i++ ) {
    if (i === 6) {
        break;
    }

    console.log(i);
}









