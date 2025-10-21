// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get('/contact', (req, res) => res.send ("<h1>Contact Us</h1><p>Email: sara.ss.shah@gmail.com<br>Phone: 07376211903</p>"));

router.get("/date", (req, res) => res.send(`<h1>Right now it is:</h1><p>${new Date()}</p>`));

// Export the router object so index.js can access it
module.exports = router;