// Question 10: Dynamic Property Access

function getDynamicValue(obj, keyName) {
    return obj[keyName]
}

const person = {
    name: "Sakshi",
    city: "Mumbai",
    job: "Developer"
};

console.log(getDynamicValue(person, "job"));   // Expected: "Developer"
console.log(getDynamicValue(person, "city"));  // Expected: "Mumbai"