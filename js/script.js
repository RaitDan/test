'use strict';

for (let num = 1; num < 6; num++) {
    console.log(num);
}

let num = 0;
while (num < 3) {
    console.log(`Число: ${num}`);
    num++
}


for (let num = 0; num < 3; num++) {
    console.log(`Чиcло: ${num}`);
}


firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        console.log(size);
        if (size == 1) {
            break firstFor
        }
    }
}


