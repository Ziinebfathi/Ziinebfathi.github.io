const express = require('express');

const router = express.Router();

let products = [{
    id: 1,
    name: "product 1",
    description: "description of the product  1",
    price: 200.00
}, {
    id: 2,
    name: "product 2",
    description: "description of the prpduct  2",
    price: 220.00
}];

router.get('/shoppingcart', (req, res, next) => {

    res.render('shoppingcart', { products });

});

router.post('/addToCart', (req, res, next) => {
    res.redirect('/shoppingcart');
});


module.exports = router;
