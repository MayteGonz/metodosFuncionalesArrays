'use strict';
const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const isPremium = users.filter((item) => item.isPremium);

console.log(isPremium);

const pins = [2389, 2384, 2837, 5232, 8998];

const pinsPar = pins.filter((item) => item % 2 === 0);

console.log(pinsPar);

const userPinPar = users.filter((item) => item.pin % 2 === 0);
console.log(userPinPar);
