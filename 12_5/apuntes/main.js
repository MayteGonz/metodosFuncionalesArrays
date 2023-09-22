'use strict';
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

names.sort();
console.log(names);

const times = [56, 9, 45, 28, 35];

times.sort((a, b) => a - b);
console.log(times);

const book = {
  title: 'Harry Potter and the Deathly Hallows',
  ds_title: 'Harry Potter 7',
  author: 'J. K. Rowling',
  ds_author: 'Rowling',
};

const keys = Object.keys(book);
console.log(keys); //['title', 'ds_title', 'author', 'ds_author', ...]
