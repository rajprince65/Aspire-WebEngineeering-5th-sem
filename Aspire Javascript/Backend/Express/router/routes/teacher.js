import express from 'express';  
const router = express.Router();

router.get('/get-teacher', (req, res) => {
    res.send('List of teachers');
});

router.post('/add-teacher', (req, res) => {
    res.send('Teacher added');
});

router.put('/update-teacher', (req, res) => {
    
    res.send(`Teacher with ID updated`);
});

router.delete('/delete-teacher', (req, res) => {
    res.send(`Teacher with ID deleted`);
});

export default router;