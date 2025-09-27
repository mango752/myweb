const express = require("express"); 
let server = express();           

server.get("/", (req, res) => {
    res.json("Hello World");
});

server.get("/health", (req, res) => {
    res.json("OK, server is up and running");
});


server.get("/page", (request, response) => {
    response.sendFile("./index.html", { root: __dirname });
});

server.get("/welcome", (request, response) => {
    response.sendFile("./welcome.html", { root: __dirname });
});
server.listen(4091);
