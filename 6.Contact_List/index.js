const express = require('express')
const port = 13000
const path = require('path')
const app = express()

app.set('view engine' , 'ejs');
app.set('views',path.join(__dirname,'views'))


var contactList =[
    {
        name:"Abhay",
        phone:"1234321"
    },
    {
        name:"tony",
        phone:"17583"
    },
    {
        name:"rishav",
        phone:"999009"
    }
] 

app.get("/",function(req,res){
    return res.render('home',{
        title:"Contact List",
        contact_list: contactList
    });
});

app.get('/practice', function(req,res){
    return res.render('practice',{
        title:"Let us play with ejs"
    });
});

app.listen(port,function(err){
    if(err){
        console.log('server is not running ',err);
    }
    console.log('server is running on port', port);
})