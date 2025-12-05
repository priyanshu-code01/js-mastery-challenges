// Question 17: Finding Unique Elements

function getUnique(arr) {
  const uniqueSet = new Set(arr);
  return [...uniqueSet];
}

console.log(getUnique([1, 2, 2, 3, 3, 4, "a", "b", "a"]));
