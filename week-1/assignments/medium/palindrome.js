/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function transform(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === "?" || str[i] === "!" || str[i] === ",") {
    } else {
      answer += str[i];
    }
  }
  return answer;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  str = transform(str);
  //   str = str.toLowerCase().replace(/[\W_]/g, ""); // removes non-alphanumeric chars
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

const ans = isPalindrome("race car");
console.log(ans);
