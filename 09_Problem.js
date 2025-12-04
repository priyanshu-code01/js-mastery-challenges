// Question 9: Extract Property Values

function getNames(users) {
  return users.map((userName) => userName.name);
}

const userList = [
  { name: "Akshay", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Rohit", age: 22 },
];

console.log(getNames(userList));
