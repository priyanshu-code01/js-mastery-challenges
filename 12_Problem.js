// Question 12: Fixing the this Context

const user = {
  name: "Vikram",

  greet() {
    return `Hello, ${this.name}! Welcome.`;
  },
};

console.log(user.greet());
