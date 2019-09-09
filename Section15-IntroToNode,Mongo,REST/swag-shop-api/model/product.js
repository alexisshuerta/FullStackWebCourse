var mongoose = require("mongoose");
var Schema = mongoose.Schema; //blueprints

var product = new Schema({
  title: String,
  price: Number,
  likes: Number
});

//this is node, it allows you to export from a file for another file to imports
//exporting a keyword (model) where you pass in (<name of the model>, <the Schema>)
//schema adds rules to adding documents to the DB
module.exports = mongoose.model("Product", product);
