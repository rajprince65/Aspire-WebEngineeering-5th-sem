import express from 'express'
const PORT = 3000

const app = express()
 app.get('/',(req,res)=>{
     res.send('hello world!')
 })
 app.post('/about',(req,res)=>{
     res.send('about')  
 })

 app.listen(PORT,()=>{
     console.log(`listening at  http://localhost:${PORT}`)
 })