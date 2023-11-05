const express = require('express');

const app =express();
app.get('/currenttime',function hi(req,res){
    res.send('<h1>'+ new Date +'</h1>')
});
app.get('/',function hi1(req,res){
    res.send('<h1> Hello World</h1>')
});
app.listen(3000)
