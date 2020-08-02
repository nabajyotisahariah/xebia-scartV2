var express = require('express');
var router = express.Router();
//import request from 'request';
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fetchProduct', function(req, res, next) {  
  request.get('https://xebiascart.herokuapp.com/products', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:',  response.statusCode); // Print the response status code if a response was received    
    if(response && response.statusCode==200) {
      res.send(body)
    }
    else {
      res.send("Error")
    }     
  });
  
});



module.exports = router;
