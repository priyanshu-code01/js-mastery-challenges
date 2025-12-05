// Question 13: Creating a Counter (Closures)

function createCounter() {
    let count = 0;
    return function() {
        count ++;
        return count;
    }
}

let counter = createCounter()

console.log(counter())  // 1
console.log(counter())  // 2
console.log(counter())  // 3
console.log(counter())  // 4