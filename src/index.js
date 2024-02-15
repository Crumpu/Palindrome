'use strict';

const str = 'аргентина манит негра';
const sep = '';

const palindrome = (str, sep) => {
  const exampleStr = str.toLowerCase().replaceAll(' ', sep);
  const reverseStr = str
    .toLowerCase()
    .split(sep)
    .reverse()
    .join(sep)
    .replaceAll(' ', sep);
    if (exampleStr === reverseStr) {
        return true;
    }
    return false;
};
console.log(palindrome(str, sep));