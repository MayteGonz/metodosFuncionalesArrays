'use strict';
const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const user5232 = users.find((user) => user.pin === 5232);
console.log(user5232);

const indexUser = users.findIndex((user) => user.pin === 5232);
console.log(indexUser);

const borrarUser = users.splice(indexUser, 1);
console.log(borrarUser);
console.log(users);
