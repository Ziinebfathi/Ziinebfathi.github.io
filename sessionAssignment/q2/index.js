const express = require('express');
const parseurl = require('parseurl')
const session = require('express-session')
const path=require("path");
const app = express();

app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'salt for cookie signing',
}));

app.listen(3000, () => {
    console.log('Your server is running on 3000');
});
app.use(function (req, res, next) {
    if (!req.session.age) {
      req.session.age = {}; // put views object into session
    }  

    next();
  });
  app.use('/result', express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    const date=new Date();
    const hour=date.getHours();
    let csscode="";
    if(hour>=6 &&hour<=18)
    csscode= "<link href='/css/day.css' rel='stylesheet'>";
    else 
    csscode= "<link href='/css/night.css' rel='stylesheet'>";

    let response="<!DOCTYPE html>"+
    "<html>"+
        "<head>"+
            "<title>My App</title>"+
            csscode +
            "</head>"+
        "<body>"+
            "<form action='/result' method='POST'>"+
                "<label>Name <input type='text' name='name'></label>"+
                "<label>Age <input type='text' name='age'></label>"+
                "<input type='submit' value='submit query'></label>"+
            "</form>"+
        "</body>"+
    "</html>";
    res.send(response);
});
app.post('/result',(req,res)=>{
    req.session.name=req.body.name; // set  session variable name to form input  variable name.
    req.session.age=req.body.age;
    res.redirect(`/output`);
});
app.get('/output', (req, res) => {
    let name = req.session.name;
    let age = req.session.age;
    if (!name) {
        name = "person";
    }
    if(!age){
        age="unknown";
    }
    res.send(`Welcome ${name} your age is: ${age}`);
});
app.use('/css', express.static(path.join(__dirname, 'css')));
