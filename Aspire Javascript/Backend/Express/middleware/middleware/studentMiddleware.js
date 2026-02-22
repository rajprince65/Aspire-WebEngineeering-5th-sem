const studentMiddleware = (req, res, next) => {
    console.log('Student middleware executed');
    
    next();
}

export default studentMiddleware