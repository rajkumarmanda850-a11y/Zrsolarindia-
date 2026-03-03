// script.js

// Javascript functionality for the Solar Smart Delivery app

// Function to get current date and time in UTC
function getCurrentDateTime() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
}

// Function to simulate delivery process
function deliverOrder(orderId) {
    console.log(`Order ${orderId} is being processed...`);
    console.log(`Current UTC Date and Time: ${getCurrentDateTime()}`);
    // Add further functionality as needed
}

// Example function usage
window.onload = function() {
    deliverOrder(1);
};