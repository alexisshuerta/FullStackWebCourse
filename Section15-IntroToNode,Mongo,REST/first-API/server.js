var express = require("express"); // Acquire a package that allows for incomming of requests and the sending pack of responses
var app = express(); //--> var app = require('express')();
//
app.get("/", function(request, response) {
  //when someone gets to base url, pass in a request and send back a response
  response.send("My First API!"); // ALWAYS SEND SOMETHING BACK
});

app.get("/funions", function(request, response) {
  //when someone gets to /funions url, pass in a request and send back a response
  response.send("YO give me some funions Foo!"); // ALWAYS SEND SOMETHING BACK
});

app.listen(3000, function() {
  console.log("First API running on port 3000!");
});
