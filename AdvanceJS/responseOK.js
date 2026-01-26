/**
 * Fetches an activity suggestion from the Bored API using an HTTP GET request and logs the parsed JSON.
 *
 * @async
 * @function getSuggestions
 * @returns {Promise<void>} Resolves after the fetch, JSON parsing, and console logging complete.
 * @remarks
 * - Sends a GET request to 'https://apis.scrimba.com/bored/api/activity'.
 * - On success, parses the response as JSON and logs the resulting object.
 * - Any network or parsing errors are caught and result in logging "An error occurred:".
 * - Always logs "Fetch attempt finished." in a finally block.
 */
async function getSuggestions() {
    try {
        const response = await fetch('https://apis.scrimba.com/bored/api/activity', {method: 'GET'}) 
        // console.log(response.ok)
        // if (!response.ok) {
        //     throw new Error('Network response was not ok')
        // }
        const data = await response.json()
        console.log(data)
    
    }
    catch (error) {
        console.log('An error occurred:', error)
    }
    finally {
        console.log('Fetch attempt finished.')
    }
}
getSuggestions()