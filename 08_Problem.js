// Question 8: Calculate Average

function calculateAverage(arr) {
  const totalSum = arr.reduce((a, b) => a + b, 0);
  return totalSum / arr.length;
}

console.log(calculateAverage([10, 20, 30])); // Expected output: 20
