import express from 'express';
const app=express();

app.route('/')
.all((req,res,next)=>{
    console.log("run for all methods");
    next();
})
.get((req,res,next)=>{
    console.log("get request for home page initial");
    next();

},(req,res)=>{
    console.log("get request for home page second");
    res.send("Welcome to home page");
}

)

.post((req,res)=>{
    console.log("post request for home page");
    res.send("Welcome to home page post");

})

.put((req,res)=>{
    console.log("put request for home page");
    res.send("Welcome to home page put");    
})

.delete((req,res)=>{
    console.log("delete request for home page");
    res.send("Welcome to home page delete");    
})  



app.get("/about",(req,res)=>{
    console.log("Get request for about page");
    res.send("Welcome to about page");
})

app.get("/contact",(req,res)=>{
    console.log("Get request for contact page");
    res.send("Welcome to contact page");
})

app.use((req,res)=>{
    console.log("page not found");
    res.status(404).send("Page not found");
    
})



app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
})