// Question 14: Checking for Palindromes

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/\s/g, "");
  console.log(cleanedStr);

  const reversedStr = cleanedStr.split("").reverse().join("");
  console.log(reversedStr);

  return cleanedStr === reversedStr;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("Not a palindrome"));
