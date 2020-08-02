var express = require('express');
var router = express.Router();
const request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/validate', function(req, res, next) {  

  request.get('https://xebiascart.herokuapp.com/users?username=amigo', function (error, response, body) {
    if(response && response.statusCode==200) {
      res.send(body)
    }
    else {
      res.send("Error")
    }     
  });
  
});


module.exports = router;
