/**
 * Callback example
 * Traditionally, the first argument of the callback is the error (err-first callback).
 */
 const makeCoffee = (callback) => {
    const isMachineReady = true;

    console.log("Cooking coffee...");

    setTimeout(() => {
        if (isMachineReady) {
            // Success: null for error, and the result as second argument
            callback(null, "☕ Your coffee is served!");
        } else {
            // Failure: provide an error message
            callback("❌ The machine is out of water.", null);
        }
    }, 3000);
};

/**
 * The execution
 * We pass an anonymous function (callback) that will be executed later.
 */
console.log("Step 1: Wake up");

makeCoffee((error, result) => {
    if (error) {
        console.error(`Step 2: Error -> ${error}`);
        return; // Stop execution
    }

    console.log(`Step 2: ${result}`);
});

console.log("Main thread finished,, cofee still breweing....");
