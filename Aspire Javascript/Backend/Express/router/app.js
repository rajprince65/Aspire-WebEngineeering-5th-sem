import express from 'express';
import studentRoutes from './routes/student.js';
import teacherRoutes from './routes/teacher.js';
const app = express();  
const port = 3000;

//load router modules
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});