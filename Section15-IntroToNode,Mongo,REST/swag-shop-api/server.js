var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/swag-shop");

var Product = require("./model/product");
var WishList = require("./model/wishlist");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/product", function(req, res) {
  var product = new Product(); //mongoose model has constructor syntax
  product.title = req.body.title;
  product.price = req.body.price;
  //saves to database
  product.save(function(err, savedProduct) {
    if (err) {
      res.status(500).send({ error: "Could not save product" });
    } else {
      res.status(200).send(savedProduct); //common in rest api, to send the saved product
    }
  });
});

app.listen(3000, function() {
  console.log("Swag Shop API running on port 3000...");
});
