const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    
    console.log(req.url);

    let path = "./views/"
    res.setHeader('Content-Type', 'text/html');

    switch(req.url){
        case '/':
            path +='index.html';
            res.statusCode = 200;
            break;
        case '/about.html':
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/about-me.html':
            res.statusCode = 301;
            res.setHeader('location', '/about.html');
            break;

        case '/contact.html':
            path += 'contact.html'; 
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, 'utf-8', (err,data) => {
    if(err){
        console.log(err);
        res.end();
    }
    res.end(data);
    });
    
});

server.listen(3000);
