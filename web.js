const express = require("express"); 
let server = express();           

server.get("/", (req, res) => {
    res.json("Hello World");
});

server.get("/health", (req, res) => {
    res.json("OK, server is up and running");
});

server.get("/welcom", (request, response) => {
    response.sendFile("./welcom.html", { root: __dirname });
});

server.get("/home", (request, response) => {
    response.sendFile("./home.html", { root: __dirname });
});

server.get("/p", (request, response) => {
    response.sendFile("./p.html", { root: __dirname });
});


server.listen(4091);
