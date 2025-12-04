// Question 6: Array Filtering

function getPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}

console.log(getPositiveNumbers([10, -5, 2, -1, 0, 8]));