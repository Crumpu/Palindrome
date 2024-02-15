'use strict';

const str = 'Аргентина манит негра';
const sep = '';

const palindrome = (str, sep) => {
  const exampleStr = str.toLowerCase().replaceAll(' ', sep);
  const reverseStr = str
    .toLowerCase()
    .split(sep)
    .reverse()
    .join(sep)
    .replaceAll(' ', sep);
  return exampleStr === reverseStr;
};
console.log(palindrome(str, sep));
