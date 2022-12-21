const express = require('express')
const port = 11000
const path = require('path')
const app = express()

app.set('view engine' , 'ejs');
app.set('views',path.join(__dirname,'views'))

app.get("/ejs",function(req,res){
    return res.render('ejs')
})

app.get('/', function(req,res){
    res.send('hi there good to see u here!!!')
})

app.listen(port,function(err){
    if(err){
        console.log('server is not running ',err);
    }
    console.log('server is running on port', port);
})