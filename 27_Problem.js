// Question 27: Error Handling with Async/Await

function failingPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("API failed due to network issue");
        }, 500);
    });
}

async function handleFailure() {
    console.log("Attempting to call failing promise...");

    try {
        await failingPromise();
        
    } catch (error) {
        console.log("Error Handled: " + error);
    }

    console.log("Execution finished.");
}

handleFailure();