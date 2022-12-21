const express = require('express');
const path = require('path')
const port = 12000;
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.get('/', function(req,res){
    return res.render('profile',{ 
        title:"my profile!"
    })
})

app.get('/',function(req,res){
    res.send('<h1> Hello this is my first server!!</h1>')
   
})

app.listen(port,function(err){
    if(err){
        console.log('error in running the server',err)
    }
    console.log('server is running on port -- ', port)
})