const express = require("express");
const escapeHtml = require("escape-html"); // Import escape-html library
const app = express();

app.use(express.urlencoded({ extended: true })); // Parses form data
app.use(express.json()); // Parses JSON data

app.get("/", (req, res) => {
    res.send(`
        <form action="/search" method="GET">
            <input type="text" name="query" placeholder="Enter your search">
            <button type="submit">Search</button>
        </form>
    `);
});

app.get("/search", (req, res) => {
    const query = req.query.query;
    const safeQuery = escapeHtml(query); // Sanitize user input
    res.send(`<h1>Results for: ${safeQuery}</h1>`);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
