'use strict';
const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map((mark) => mark + 1);

console.log(inflatedMarks);

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const saludos = names.map((item) => `hola ${item}`);
console.log(saludos);

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const saludoPremium = users.map((user) => {
  if (user.isPremium) {
    console.log(`Bienvenida ${user.name}. Gracias por confiar en nosotros`);
  } else {
    console.log(`Bienvenida ${user.name}`);
  }
});
