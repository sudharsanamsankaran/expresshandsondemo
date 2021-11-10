var express =require('express');
var app = express();

app.get('/training/[$]home',function (req, res, next){
    res.send('Wlecome to ExpreeJS practice session')
    next()
},function (req, res) {
    res.send('Hello from B!')
    console.log("hello from b!")
  })

app.post('/training/[$]home',function (req,res){
  res.send('post path')
  console.log('from post path')
})

var server = app.listen(3000,function(){
  var host =server.address().host
  var port = server.address().port
  console.log('Example app listening at http://%s:%s/ ',host,port)
})
