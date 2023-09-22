'use strict';

const times = [56, 9, 45, 28, 35];

const result = times.reduce((acc, number) => acc + number);
const media = result / times.length;
console.log(media);

const times1 = [56, 9, 45, 28, 35];

const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

const winnner = runners.reduce((min, curr) =>
  min.time < curr.time ? min : curr
);
console.log(winnner);
