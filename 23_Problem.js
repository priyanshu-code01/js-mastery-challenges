// Question 23: Merging Objects (Spread Operator)

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2}
}

const defaults = { host: 'localhost', port: 8080, timeout: 5000 };
const userConfig = { port: 3000, timeout: 1000, log: true };

console.log(mergeObjects(defaults, userConfig));