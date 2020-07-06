/* eslint-disable no-console */
'use strict';

const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

function decode(word) {
  const cipherKey = cipher[word[0]];
  if(cipherKey) {
    return word[cipherKey];
  } else {
    return ' ';
  }
}

function decodeWords(str) {
  const words = str.split(' ');

  let decryptedStr = '';
  words.forEach((word) => decryptedStr += decode(word));
  return decryptedStr;
}



const word1 = 'apple'; // p
const word2 = 'bobby'; // b
const word3 = 'fishy'; // ' '
const word4 = 'chant'; // n
const word5 = 'zebra'; // ' '
const word6 = 'dangj'; // j


const testString = `${word1} ${word2} ${word3} ${word4} ${word5} ${word6}`;

console.log(decodeWords(testString));