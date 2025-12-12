// Question 25: Implement Debounce Function

function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function logMessage(msg) {
    console.log("Logged:", msg);
}

const debouncedLog = debounce(logMessage, 2000);

debouncedLog("Hello");
debouncedLog("Hello again");
debouncedLog("Final call");