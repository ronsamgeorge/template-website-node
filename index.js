const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    
    console.log(req.url);

    let path = "./views/"

    switch(req.url){
        case '/':
            path +='index.html';
            break;
        case '/about.html':
            path += 'about.html'
            break;
    }

    fs.readFile(path, 'utf-8', (err,data) => {

    if(err){
        console.log(err);
        res.end();
    }
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.end(data);
    });
    
});

server.listen(3000);
