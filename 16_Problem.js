// Question 16: Combine First and Last Name

function getFullName(users) {
  return users.map((fullName) => `${fullName.firstName} ${fullName.lastName}`);
}

const cricketers = [
  { firstName: "Sachin", lastName: "Tendulkar" },
  { firstName: "Virat", lastName: "Kohli" },
  { firstName: "Rohit", lastName: "Sharma" },
];

console.log(getFullName(cricketers));
