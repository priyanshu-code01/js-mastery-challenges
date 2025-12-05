// Question 11: Destructuring with Default Values

function getUserInfo({ name, age = 25 }) {
  return `Name is ${name} and age is ${age}.`;
}

console.log(getUserInfo({ name: "Riya", age: 30 }));
console.log(getUserInfo({ name: "Kiran" }));
