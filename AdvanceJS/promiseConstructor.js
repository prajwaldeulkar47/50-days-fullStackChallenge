/**
 * Demonstrates Promise handling with async/await pattern and error handling.
 * 
 * Creates a Promise that randomly resolves or rejects based on a 50/50 probability.
 * 
 * @description
 * - Generates a random number between 0 and 1
 * - If the number is <= 0.5, the Promise resolves with a success message
 * - If the number is > 0.5, the Promise rejects with an error message
 * - Uses try/catch block to handle both successful resolution and rejection
 * - On success: logs the resolved value to the console
 * - On failure: logs the rejection reason to the console error output
 * 
 * @example
 * // Output (50% chance):
 * // "Operation was successful!" or error "Operation failed."
 * 
 * @returns {Promise<string>} A Promise that resolves to a success message or rejects with an error message
 */

const response = new Promise(( resolve , reject ) => {
    const success = Math.random() <= 0.5
     if ( success ) {
        resolve('Operation was successful!')
     } else {
        reject('Operation failed.')
     }
})

// Function to execute the promise and handle the result
async function executePromise() {
    try {
        const result = await response; // Await the promise resolution
        console.log(result); // Log the successful result
    } catch (err) {
        console.error('Custom error: ', err); // Log the error if the promise is rejected
    }
}

// Call the function to execute the promise
executePromise();