'use strict';
const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

runners.sort((a, b) => a.time - b.time);

console.log(runners);

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];
//Ordenado por nombre

/* users.sort(function (a, b) {
  var textA = a.name.toUpperCase();
  var textB = b.name.toUpperCase();
  return textA < textB ? -1 : textA > textB ? 1 : 0;
}); */

users.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});
console.log(users);

//ordenado por pin
users.sort((a, b) => a.pin - b.pin);
console.log(users);
