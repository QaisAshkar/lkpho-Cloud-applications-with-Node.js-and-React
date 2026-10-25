// Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    const dateVal = today.getDate(); // Date object from the 'today' module
    const hour = dateVal.getHours();

    // Pick a greeting based on the time of day
    let greeting = "It is still not morning";
    if (hour >= 5 && hour < 12) {
        greeting = "Good morning!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon!";
    } else if (hour >= 18 && hour < 22) {
        greeting = "Good evening!";
    } else if (hour >= 22 || hour < 5) {
        greeting = "Good night!";
    }

    res.writeHead(200); // Set the status code to 200 (OK)
    res.end(`Hello, ${greeting} The date today is ${dateVal.toString()}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
