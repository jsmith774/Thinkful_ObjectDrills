/* eslint-disable no-console */

'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  const keys = Object.keys(query);

  return arr.find((hero) => {
    ///*
    for(let i=0; i < keys.length; i++) {
      if(hero[keys[i]] !== query[keys[i]]) {
        return false;
      }  
    }
    return true;
    //*/

    /*
    //keys.forEach()
    */
  });
}
console.log(JSON.stringify(findOne(HEROES, {squad: 'Justice League'})));
console.log(JSON.stringify(findOne(HEROES, {squad: 'Justice League', id: 5})));
console.log(JSON.stringify(findOne(HEROES, {squad: 'Justice League', id: 5, name: 'Aquaman'})));
console.log(JSON.stringify(findOne(HEROES, {squad: 'Justice League', id: 6, name: 'Aquaman'})));
console.log(JSON.stringify(findOne(HEROES, {id: 8})));
console.log(JSON.stringify(findOne(HEROES, {id: 2, name: 'Iron Man'})));