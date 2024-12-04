// Utility function: Add event listeners to multiple elements

/**
 * Adds an event listener to multiple elements.
 * @param {NodeList} elements - List of elements to add the event listener to.
 * @param {string} eventType - The type of event to listen for (e.g., 'click').
 * @param {function} callback - The function to execute when the event occurs.
 */
export const addEventOnElements = function( elements, eventType, callback) {
    elements.forEach((element) => {
        element.addEventListener(eventType, callback); // Add event listener to the current element
    });
}

/**
 * Displays a spinner inside a specified parent element.
 * @param {HTMLElement} parentElement - The element to render the spinner in.
 *
 * This function clears the current content of the parent element and appends
 * a spinner (loading indicator) to visually indicate that a process is ongoing.
 */
export const renderSpinner = function(parentElement) {
    const html = `
    <div class="spinner">
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.97498 12H7.89998" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11.8 5V8" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M18.625 12H15.7" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11.8 19V16" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M6.97374 16.95L9.04203 14.8287" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M6.97374 7.05001L9.04203 9.17133" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M16.6262 7.05001L14.5579 9.17133" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M16.6262 16.95L14.5579 14.8287" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    </div>
    `;

    parentElement.innerHtml = ""; // Clear the current content
    parentElement.insertAdjacentHTML("afterbegin", html); // Insert the spinner HTML
}


/**
 * Creates a promise that rejects after a specified number of seconds.
 * @param {number} s - The number of seconds before the promise rejects.
 * @returns {Promise} A promise that rejects with an error message after the timeout.
 *
 * This function is used to limit how long a request can take before being automatically canceled.
 */
const timeout = function(s) {
    return new Promise(function(_, reject){
        setTimeout(() => {
            reject(new Error(`Request took too long! Timeout after ${s} second.`));
        }, s * 1000); // Convert seconds to milliseconds
    })
}


/**
 * Fetches JSON data from a specified URL and handles timeouts.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<object>} A promise that resolves with the fetched data.
 *
 * This function uses `Promise.race` to race between a fetch request and a timeout promise,
 * ensuring that the request doesn't hang indefinitely. If the request is successful,
 * it parses and returns the JSON data. If there's an error, it throws the error.
 */
export const getJSON = async function(url) {
    try {
        
        // Race between the fetch request and the timeout
        const response = await Promise.race([fetch(url),timeout(10)]) ;

        // Parse the JSON data
        const data = await response.json();

        // If the response status is not OK, throw an error
        if(!response.ok) throw new Error(`${data.message}${data.status}`);

        return data; // Return the parsed data

    } catch (error) {
        throw error; // Re-throw the error to be handled by the caller
    }
}