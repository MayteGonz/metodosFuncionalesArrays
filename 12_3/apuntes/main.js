'use strict';
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
let longName;

for (const name of names) {
  const nameLength = name.length;
  if (nameLength > 5 && longName === undefined) {
    longName = name;
  }
}

console.log(longName);

//lo mismo con find
const names1 = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longName1 = names1.find((name) => name.length > 5);

console.log(longName1);

const index = names1.findIndex((name) => name.length > 5);

console.log(index);
