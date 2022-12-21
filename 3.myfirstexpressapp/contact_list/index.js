const express = require('express');
const path = require('path');
const port =8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


app.get('/',function(req,res){
    // console.log(__dirname)
    // res.send('<h1>Cool, its running ! or is ittttt?</h1>')
    return res.render('home', {
        title:"Contacts List!"
    })
})
app.get('/practice',function(req,res){
    return res.render('practice',{
        title:"Let us play with ejs !!!"
    })
})
// app.get('/profile',function(req,res){
//     res.send('<h2>HelloHELLOHelloohelooooooopooooopopoopopobb</h2>')
// })




app.listen(port,function(err){
    if(err){
        console.log('error in running the server ' , err)
    }
    console.log('my express server is running on port ' , port);
});