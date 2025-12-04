// Question 4: Find the Largest Number

function findMax(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

console.log(findMax([4, 6, 2, 7, 33, 6, 9, 2])) // 33