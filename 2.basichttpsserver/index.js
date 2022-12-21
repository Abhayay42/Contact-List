const http = require('http')
const port =8000;
const fs =require('fs');

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});


    let filepath;
    switch(request.url){
    case '/':
        filepath = '/index.html'
        break;

    case '/profile':
        filepath = './profile.html'
        break;

    default:
        filepath = './404.html'    
    }

    fs.readFile(filepath,function(err,data){
        if(arr){
            console/log('error',err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data);

    })










    // fs.readFile('./index.html',function(err,data){
    //     if(err){
    //         console.log('error', err);
    //         return;
    //         return res.end('<h1>Error!</h1>');
    //     }
    //     return res.end(data);
    // })

    // res.end('<h1>Gotchaa !</h1>');
}

const server = http.createServer(requestHandler);
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("your server is up and running: " , port)
});