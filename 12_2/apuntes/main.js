'use strict';

//solución con bucle

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames = [];

for (const name of names) {
  const nameLength = name.length; // ¡Sí, podemos usar .length con strings para saber su longitud!
  if (nameLength > 5) {
    longNames.push(name);
  }
}

console.log(longNames);

//solución con filter:
const names1 = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames1 = names1.filter((name) => name.length > 5);

console.log(longNames1);

//mezclar filter y map
const names2 = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames2 = names2
  .filter((name) => name.length > 5)
  .map((name) => name.toUpperCase());

console.log(longNames2);
