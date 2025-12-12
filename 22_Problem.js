// Question 22: Async/Await for Sequential tasks

function asyncCall(delayInMs, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delayInMs);
  });
}

async function demoAsync() {
  console.log("Starting tasks...");

  const result1 = await asyncCall(1000, "result1");
  console.log(result1);
  const result2 = await asyncCall(500, "result2");
  console.log(result2);
  console.log("All operations done!");
}

demoAsync();
