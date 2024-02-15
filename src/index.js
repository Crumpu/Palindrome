'use strict';

const str = 'аргентина манит негра';
const sep = '';

const exampleStr = (str, sep) => str.toLowerCase().replaceAll(' ', sep);

const reverseStr = (str, sep) =>
  str.toLowerCase().split(sep).reverse().join(sep).replaceAll(' ', sep);


function palindrome(exampleStr, reverseStr) {
    if (exampleStr === reverseStr) {
        return true;
    }
    return false;

}

console.log(exampleStr())
console.log(reverseStr())
// console.log(palindrome(exampleStr, reverseStr));
