import express from 'express';
import studentRoutes from './routes/studentroutes.js';

const PORT = 3000;
const app = express();  

app.get('/',(req,res)=>{
    res.send('Welcome to the Student Management System');
})

app.use('/students',studentRoutes);

app.listen(PORT,()=>{
    console.log('Server is running at http://localhost:3000');
})  
