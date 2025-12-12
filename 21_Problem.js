// Question 21: Delayed Promise

function delayedPromise(delayInMs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Delayed by ${delayInMs}`)
        }, delayInMs);
    });
}

delayedPromise(6000)
    .then(result => console.log(result));