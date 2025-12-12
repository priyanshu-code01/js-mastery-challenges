// Question 28: Running Promises in Parallel

function delayedPromise(delayInMs) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Delayed by ${delayInMs} ms`);
        }, delayInMs);
    });
}

async function runParallel(delays) {
    const promiseArray = delays.map(delay => delayedPromise(delay));

    return await Promise.all(promiseArray)
}

runParallel([3000, 1000, 2000])
    .then(results => console.log("Final Results:", results));