const express = require("express");
const Pool = require('pg').Pool
const bodyParser = require("body-parser");

const app = express();

app.use(express.static('public'))
app.use(bodyParser.json());

// Complete the code to add the database connection

app.get("/api/testimonials", (req, res) => {

    // Complete the code to retrieve the data and send to front end
});

app.post("/api/testimonials/save", (req, res) => {

    const testimonial = req.body;

    // Complete the code to save the data into the database
})

app.listen(80, () => {
    console.log("Listening on port 80");
});
