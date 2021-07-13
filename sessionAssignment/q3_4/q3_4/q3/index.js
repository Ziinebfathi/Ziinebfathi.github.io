const express= require('express');
const app= express();
const path= require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use("/addToCart",express.urlencoded({extended:false}));

var Name1= "banana1";
var Price1=200;
app.get('/product/banana1', (req, res) => {    
    res.render("product.ejs", {
        Name: Name1,
        Price: Price1
        
     });
});

app.post('/addToCart', (req, res) => {
    let name1 = req.body.proName;
    let price1 = req.body.proPrice;
    res.render("product.ejs", {
        Name: name1,
        Price: price1,
        });
});


var Name1= "banana2";
var Price1=250;
app.get('/product/banana2', (req, res) => {    
    res.render("product.ejs", {
        Name: Name2,
        Price: Price2        
     });
});
app.post('/addToCart', (req, res) => {
    let name2 = req.body.proName;
    let price2 = req.body.proPrice;
    res.render("product.ejs", {
        Name: name2,
        Price: price2,
        });
});

var Name3= "banana3";
var Price3=210;
app.get('/product/banana1', (req, res) => {    
    res.render("product.ejs", {
        Name: Name3,
        Price: Price3
     });
});
app.post('/addToCart', (req, res) => {
    let name3 = req.body.proName;
    let price3 = req.body.proPrice;
    res.render("product.ejs", {
        Name: name3,
        Price: price3,
        });
});

app.use(function(req,res,next){
    if(!req.session.cart){
        req.session.cart=[{"name": "banana1",'0':0,"Price":200},
        {"name": "banana2",'1':1,"Price":250},
        {"name": "banana3",'2':0,"Price":210}]
    }
    next();
});
app.post('/addToCart', (req, res) => {
        if(req.body.Name="banana1")
        red.session.cart[0]["0"]++;
        else  if(req.body.Name="banana2")
        red.session.cart[1]["1"]++;
        else red.session.cart[2]["2"]++;
});
res.render("cart.ejs",  {
    cart: req.sesion.cart
});

app.listen(3000);
