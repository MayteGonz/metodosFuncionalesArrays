'use strict';

//antes haciamos esto:

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const capitalNames = [];

for (let i = 0; i < names.length; i++) {
  const capitalName = names[i].toUpperCase();
  capitalNames.push(capitalName);
}

console.log(capitalNames);

//ahora con map para que sea más facil podemos hacer:

const names1 = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const capitalNames1 = names1.map((name) => name.toUpperCase());

console.log(capitalNames1);
