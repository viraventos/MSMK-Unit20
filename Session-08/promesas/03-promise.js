// 1. Create the Promise
// We specify that it will eventually return a string: Promise
const orderCoffee = new Promise((resolve, reject) => {
    const isCoffeeMachineWorking = true;

    console.log("Ordering coffee... please wait.");

    // Simulate a 2-second delay
    setTimeout(() => {
        if (isCoffeeMachineWorking) {
            resolve("☕ Your coffee is ready!"); // Success
        } else {
            reject("❌ The machine is broken."); // Failure
        }
    }, 3000);
});

// 2. Consume the Promise using async/await
async function processOrder() {
    orderCoffee
        .then((result) => { console.log(result); })  // If the promise resolves
        .catch((error) => { console.log(error); });  // If the promise was rejected
}

processOrder();
