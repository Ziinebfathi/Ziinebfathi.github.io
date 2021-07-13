const express= require('express');
const app= express();
const path= require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use("/addToCart",express.urlencoded({extended:false}));
var productsArr=[{
    "name":"Iphone",
    "price":"340$",
    "quantity":4},
    {
    "name":"Samsung Galaxy 10",
    "price":"430$",
    "quantity":2},
    {
    "name":"Google Pixel 2",
    "price":"130$",
    "quantity":10}
    ];

app.get('/', (req, res) => {
    
    res.render("shoppingcart.ejs", {
        products: productsArr
     });
});


app.listen(3000);
