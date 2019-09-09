var mongoose = require("mongoose");
var Schema = mongoose.Schema; //blueprints
var ObjectId = mongoose.Schema.Types.ObjectId;

var wishList = new Schema({
  title: { type: String, default: "Cool Wish List" }, //multiple options in {}
  products: [{ type: ObjectId, ref: "Product" }] //ref:<type of Schema> Schema must be spelled the SAME!
});

module.exports = mongoose.model("WishList", wishList);
