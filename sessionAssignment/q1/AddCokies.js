var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');


// parses request cookies, populating
// req.cookies and req.signedCookies
// when the secret is passed, used
// for signing the cookies.
app.use(cookieParser('my secret here'));

// parses x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

app.get('/', function(req, res){
  if (req.cookies.keyCookie) {
    res.send('key :' +req.cookies.keyCookie +'value :' +req.cookies.valueCookie);

} else {
    res.send('<form method ="post"><label>'
      +'<input type="text" name="key"/> key</label> '
      + '<input type="text" name="value"/> value </label> '
      + '<input type="submit" value="Submit"/></p></form>');
  }
});

// app.get('/forget', function(req, res){
//   res.clearCookie('remember');
//   res.redirect('back');
// });

app.post('/', function(req, res){
  var minute = 60000;
 res.cookie('keyCookie', req.body.key, { maxAge: minute });
 res.cookie('valueCookie', req.body.value, { maxAge: minute });
res.redirect('back')
});

/* istanbul ignore next */
 
  app.listen(3000);
  console.log('Express started on port 3000');
