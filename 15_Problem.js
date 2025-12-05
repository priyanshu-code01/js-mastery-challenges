// Question 15: Counting Character Occurrences

function charCount(str) {
  const result = {};

  const cleanedStr = str.toLowerCase().replace(/\s/g, "");

  for (let char of cleanedStr) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

console.log(charCount("Hello World"));
