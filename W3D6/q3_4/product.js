const express = require('express');

const router = express.Router();

let product = {
    id: 1,
    name: "product",
    description: "description of the product",
    price: 200.00
};

router.get('/', (req, res, next) => {
    res.render('product', { product });
});

module.exports = router;
