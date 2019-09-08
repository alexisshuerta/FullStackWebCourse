var express = require("express"); // Acquire a package that allows for incomming of requests and the sending pack of responses
var app = express(); //All in one --> var app = require('express')();
var bodyParser = require("body-parser");

//should be here for (good for get and post requests)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//a list of ingredients as an array of objects [{_,_},{_,_},{_,_}]
var ingredients = [
  {
    id: "232kak",
    text: "Eggs"
  },
  {
    id: "dkP345",
    text: "Milk"
  },
  {
    id: "dkcuu7",
    text: "Bacon"
  },
  {
    id: "73hdy",
    text: "Frogs Legs"
  }
];

app.get("/", function(request, response) {
  //when someone gets to base url, pass in a request and send back a response
  response.send(ingredients); // ALWAYS SEND SOMETHING BACK
});

app.post("/", function(request, response) {
  var ingredient = request.body;
  //if error
  if (!ingredient || ingredient.text === "") {
    response.status(500).send({ error: "Your ingredient must have text" });
    //if successful
  }
  //if successful
  else {
    ingredients.push(ingredient);
    response.status(200).send(ingredient);
  }
});

app.listen(3000, function() {
  console.log("First API running on port 3000!");
});
