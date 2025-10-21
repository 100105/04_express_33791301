// Set up express
// imports express
const express = require("express");
// creates express
const app = express();
// specifies which port used
const port = 8000; 
// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

// Start listening for HTTP requests
// confirmation logged in console when server starts
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 