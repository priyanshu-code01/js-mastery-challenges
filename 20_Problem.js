// Question 20: Simple Promise (Asynchronous JS)

function simplePromise() {
    return new Promise((resolve, reject) => {
        resolve("Promise Resolved!")
    });
}

simplePromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));