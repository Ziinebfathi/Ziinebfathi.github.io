const express = require('express');
const path = require('path')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"view"));


app.use("/result",express.urlencoded({extended:false}));
app.get('/', (req, res) => {
    res.render("index");
    
    // let response="<!DOCTYPE html>"+
    // "<html>"+
    //     "<head>"+
    //         "<title>My App</title>"+
    //     "</head>"+
    //     "<body>"+
    //         "<form action='/result' method='POST'>"+
    //             "<label>Name <input type='text' name='name'></label>"+
    //             "<label>Age <input type='text' name='age'></label>"+
    //             "<input type='submit' value='submit query'></label>"+
    //         "</form>"+
    //     "</body>"+
    // "</html>";
    //res.send(response);
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }
    if(!age){
        age="unknown";
    }
    res.send("result",{name:name,  age:age});
})
app.use('/css', express.static(path.join(__dirname, 'css')));

app.listen(3000);
