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

    parentElement.innerHtml = "";
    parentElement.insertAdjacentHTML("afterbegin", html)
}


const timeout = function(s) {
    return new Promise(function(_, reject){
        setTimeout(() => {
            reject(new Error(`Request took too long! Timeout after ${s} second.`));
        }, s * 1000);
    })
}



export const getJSON = async function(url) {
    try {
        
        const response = await Promise.race([fetch(url),timeout(10)]) ;
        const data = await response.json();
        if(!response.ok) throw new Error(`${data.message}${data.status}`);

        return data;

    } catch (error) {
        throw error;
    }
}