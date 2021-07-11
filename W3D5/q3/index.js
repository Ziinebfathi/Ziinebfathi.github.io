const express = require('express');
const path=require("path");
const app = express();

app.get('/', (req, res) => {
    const date=new Date();
    const hour=date.getHours();
    const C = '';
    if(hour>=6 && hour<=18)
        C = "<link href='/css/day.css' rel='stylesheet'>";
 else
 C = "<link href='/css/night.css' rel='stylesheet'>";


    let response="<!DOCTYPE html>"+
    "<html>"+
        "<head>"+
            "<title>My App</title>"+
            C+
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
app.use('/css', express.static(path.join(__dirname, 'css')));
app.listen(3000);