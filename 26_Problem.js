// Question 26: Implement Throttle Function

function throttle(func, limit) {
    let inThrottle;

    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            
            inThrottle = true;
            
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    }
}

const logMessage = () => {
    console.log('Throttled Function Executed at', new Date().toISOString());
};
const throttledLogMessage = throttle(logMessage, 2000);

// Simulate rapid calls
setInterval(throttledLogMessage, 500);