var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/swag-shop");

var Product = require("./model/product");
var WishList = require("./model/wishlist");

//Allow all requests from all domains & localhost
app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//post request to put in new items in DB
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

//get request for products which displays all elements in DB
app.get("/product", function(req, res) {
  //.find() sends back an array, if you want a specific product, you need to access the certain element in the array
  // {} means you want to find all; no specific attributes were included in the search
  Product.find({}, function(err, products) {
    if (err) {
      res.status(500).send({ error: "Could not fetch products" });
    } else {
      res.send(products);
    }
  });
});

//get request to get the list of wishlists, now inclueds product data (using populate*)
app.get("/wishlist", function(req, res) {
  WishList.find({})
    .populate({ path: "products", model: "Product" })
    .exec(function(err, wishLists) {
      if (err) {
        res.status(500).send({ error: "Could not fetch wishlists" });
      } else {
        res.send(wishLists);
      }
    });
});

// //get request to get the list of wishlists
// app.get("/wishlist", function(req, res) {
//   WishList.find({}, function(err, wishLists) {
//     if (err) {
//       res.status(500).send({ error: "Could not fetch wishlists" });
//     } else {
//       res.send(wishLists);
//     }
//   });
// });

//post request to put in new wishlist in DB
app.post("/wishlist", function(req, res) {
  var wishList = new WishList();
  wishList.title = req.body.title;
  wishList.save(function(err, newWishList) {
    if (err) {
      res.send({ error: "Could not create wishlist" });
    } else {
      res.send(newWishList);
    }
  });
});

//put request to add an item to the wishlist (put == update) updating wishlist
app.put("/wishlist/product/add", function(req, res) {
  //find one *** product in DB
  Product.findOne({ _id: req.body.productId }, function(err, product) {
    if (err) {
      res.status(500).send({ error: "Could not add item to wishlist" });
    }
    //update(find product, set/add, usual callback)
    else {
      WishList.update(
        { _id: req.body.wishListId },
        { $addToSet: { products: product._id } },
        function(err, wishList) {
          if (err) {
            res.status(500).send({ error: "Could not add item to wishlist" });
          } else {
            res.send("Successfully added to wishlist");
          }
        }
      );
    }
  });
});

app.listen(3004, function() {
  console.log("Swag Shop API running on port 3004...");
});
