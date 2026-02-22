import http from 'http';

const PORT=3000
const HOST='localhost'

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
        
    }
    else if(req.url === '/about'){
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('About');

    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }   
    
});


server.listen(PORT,HOST, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


