const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    
    console.log(req.url);

    let path = "./views/"
    let resCode = 200;

    switch(req.url){
        case '/':
            path +='index.html';
            break;
        case '/about.html':
            path += 'about.html'
            break;

        case '/contact.html':
            path += 'contact.html'; 
            break;
        default:
            path += '404.html';
            resCode = 404;
            break;
    }

    fs.readFile(path, 'utf-8', (err,data) => {

    if(err){
        console.log(err);
        res.end();
    }
    res.writeHead(resCode,{"Content-Type" : "text/html"});
    res.end(data);
    });
    
});

server.listen(3000);
