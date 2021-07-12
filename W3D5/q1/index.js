const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
        name = "person";
    }
    if(!age){
        age="unknown";
    }
    res.send(`Welcome  Mr/Ms ${name} your  age is ${age}`);
});
app.listen(3000);
