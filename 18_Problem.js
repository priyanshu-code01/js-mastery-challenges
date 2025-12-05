// Question 18: Flattening Nested Arrays

function flattenArray(arr) {
    return arr.flat(Infinity)
}

console.log(flattenArray([1, [2, 3], [4, [5, 6, [7, 8]]]]));