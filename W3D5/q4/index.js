const express = require('express');
const url     = require('url');
const path    = require('path');
const app     = express();

app.use(express.urlencoded({extended:false}));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.post('/result', (req, res) => {
    res.redirect(url.format({
        pathname:"/output",
        query:req.body
    }));
});

app.get('/output', function(req,res) {
    res.send("");
});

app.listen(3000);