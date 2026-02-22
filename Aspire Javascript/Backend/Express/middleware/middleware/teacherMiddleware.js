const teacherMiddleware = (req, res, next) => {
    console.log('teacher middleware executed');
    
    next();
}

export default teacherMiddleware