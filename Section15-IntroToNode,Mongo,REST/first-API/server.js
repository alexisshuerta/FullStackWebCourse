var express = require("express"); // Acquire a package that allows for incoming of requests and the sending pack of responses
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

app.get("/ingredients", function(req, res) {
  //when someone gets to base url, pass in a request and send back a response
  res.send(ingredients); // ALWAYS SEND SOMETHING BACK
});

app.post("/ingredients", function(req, res) {
  var ingredient = req.body;
  //if error
  if (!ingredient || ingredient.text === "") {
    res.status(500).send({ error: "Your ingredient must have text" });
  }
  //if successful
  else {
    ingredients.push(ingredient);
    res.status(200).send(ingredient);
  }
});

app.put("/ingredients/:ingredientId", function(req, res) {
  var newText = req.body.text;
  //if error
  if (!newText || newText === "") {
    res.status(500).send({ error: "You must provide ingredient text" });
  }
  //if no error
  else {
    //check all elements in the ingredients array to see if matches the one to update
    var objectFound = false;
    for (var x = 0; x < ingredients.length; x++) {
      var ing = ingredients[x];
      if (ing.id === req.params.ingredientId) {
        ingredients[x].text = newText;
        objectFound = true;
        break;
      }
    }
    if (!objectFound) {
      res.status(500).send({ error: "Ingredients id not found" });
    } else {
      res.send(ingredients);
    }
  }
});

app.delete("/ingredients/:ingredientId", function(req, res) {
  //look through the array to see if it is in there and delete/splice if so

  var objectFound = false;
  for (var x = 0; x < ingredients.length; x++) {
    var ing = ingredients[x];
    if (ing.id === req.params.ingredientId) {
      ingredients.splice(x, 1);
      objectFound = true;
    }
  }

  if (!objectFound) {
    res.status(500).send({ error: "Ingredients id not found" });
  } else {
    res.send(ingredients);
  }
});

app.listen(3000, function() {
  console.log("First API running on port 3000!");
});
