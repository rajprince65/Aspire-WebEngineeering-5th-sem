import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
import teacherRoutes from './routes/teacherroutes.js';
const app = express();
const PORT = 3000;  
// app.use(studentMiddleware)
app.use((req, res,next) => {
    console.log('for all routes middleware executed');
    next();
});
app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes);


app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});