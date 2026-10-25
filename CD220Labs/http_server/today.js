// Export a function named 'getDate' that returns a Date object in Brisbane time
module.exports.getDate = function getDate() {
    // Convert the current time to a Brisbane time string, then back into a Date object
    let aestTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Australia/Brisbane" }));
    return aestTime; // Return a Date object so methods like getHours() work
};
