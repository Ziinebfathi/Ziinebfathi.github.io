const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));

app.use('/', (req, res) => {
 res.send("<form action=result method=post><label>Name: <input name=name type=text></label><label>Age<input name=age type=number></label><button type=submit>Submit Qurey</button></form>");
});


app.use('/result', (req, res) => {
    let { name, age } = req.body;

    res.send(`Welcome ${name} age: ${age}`)
});

app.listen(3000);