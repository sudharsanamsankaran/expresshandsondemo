var express = require('express')
var app = express();

var arr1 =function(req, res, next){
    console.log('First Function');
    //res.send('First Fuction');
    next();
  }
  
  var arr2 =function(req, res, next){
    console.log('second Function');
    next();
  }
  
  var arr3 =function(req, res){
    res.send('Third Function without next');

  }

  app.get('/[$]arraytype', [arr1,arr2,arr3])
  
  app.listen(8000);