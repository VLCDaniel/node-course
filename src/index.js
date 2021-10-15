const express = require('express');
const { handleGreeting, otherValue } = require('./greeting');
const handleElephantAPIRequest = require('./elephantAPI');

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("Hello World!");
});

app.get("/hello/:name?", (request, response) => {
    handleGreeting(request, response);
    console.log(otherValue);
});

app.get("/elephant", handleElephantAPIRequest);

app.listen(port, () => {
    console.log("Server started on", port);
});