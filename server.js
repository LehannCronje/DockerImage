var express = require('express');

const PORT = 3000;

var app = express();
 app.get('/' , (req,res) => {
     res.send('hello World');
 });

 app.listen(PORT);
 console.log('App is running on localhost:3000')