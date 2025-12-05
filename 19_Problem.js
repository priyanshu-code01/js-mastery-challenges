// Question 19: Filter by Age (Chaining)

function getSeniorNames(users) {
    return users.filter(user => user.age >= 30).map((user) => user.name)
}

const team = [
    { name: "Priya", age: 25 },
    { name: "Suresh", age: 35 },
    { name: "Aman", age: 28 },
    { name: "Rina", age: 40 }
];

console.log(getSeniorNames(team));