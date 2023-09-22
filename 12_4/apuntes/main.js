'use strict';
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
let result = 0;

for (let i = 0; i < scores.length; i++) {
  result += scores[i];
}

console.log(result);

//ejemplo con reduce

const scores1 = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

const result1 = scores1.reduce((acc, number) => acc + number, 0);

console.log(result1);

const result2 = scores.reduce((acc, number) => acc + number);
console.log(result2);
