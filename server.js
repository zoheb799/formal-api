var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');

var product = require('./model/product');
var WishList = require('./model/wishlist');
const Product = require('./model/product');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('./product', function(request, response) {
    var product = new product();
    product.title = request.body.title;
    product.price = request.body.price;
    product.save(function(err, savedproduct) {
        if(err) {
            response.status(500).send({error:"could not save the product"});
        } else {
            response.send(savedproduct);
        }
    });
   
});


app.listen(3000, function() {
    console.log("swag-shop API is running on port 3000!");

}); 