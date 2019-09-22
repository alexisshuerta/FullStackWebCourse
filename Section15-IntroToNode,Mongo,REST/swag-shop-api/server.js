var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/swag-shop");

var Product = require("./model/product");
var WishList = require("./model/wishlist");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//post request which allows client side to put in new items in DB
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

//get request which displays all elements in DB
app.get("/product", function(req, res) {
  //.find() sends back an array, if you want a specific product, you need to access the certain element in the array
  Product.find({}, function(err, products) {
    if (err) {
      res.status(500).send({ error: "Could not fetch products" });
    } else {
      res.send(products);
    }
  });
});

app.listen(3000, function() {
  console.log("Swag Shop API running on port 3000...");
});
