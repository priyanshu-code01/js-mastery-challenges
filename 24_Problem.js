// Question 24: Function Currying

function curriedSum(a) {
  return function (b) {
    return a + b;
  };
}

// const curriedSum = (a) => (b) => a + b;

console.log(curriedSum(7)(3));
