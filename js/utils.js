// Utility function: Add event listeners to multiple elements

/**
 * Adds an event listener to multiple elements.
 * @param {NodeList} elements - List of elements to add the event listener to.
 * @param {string} eventType - The type of event to listen for (e.g., 'click').
 * @param {function} callback - The function to execute when the event occurs.
 */
export const addEventOnElements = function( elements, eventType, callback) {
    elements.forEach((element) => {
        element.addEventListener(eventType, callback);
    });
}