import http from 'http'
const PORT = 3000
const HOST = 'localhost'
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type','text/plain')
        res.end("Landing page of our college website")
    }
    else if(req.url === '/home'){  
        res.statusCode = 200
        res.setHeader('Content-Type','text/html')
        res.end("<h1>Home page</h1>")

    }
    else if(req.url === '/about'){  
        res.statusCode = 200
        res.setHeader('Content-Type','text/plain')
        res.end("About page")

    }

    else{
        res.statusCode = 404
        res.setHeader('Content-Type','text/plain')
        res.end("Not Found")
    }
})

server.listen(PORT,HOST, ()=>{
    console.log("Server is running on port 3000")
})
