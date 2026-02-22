const listStudents=(req,res)=>{
     res.send('List of students');
}

const addStudents = (req,res)=>{
    res.send('Add a student');
}
 const updateStudents = (req,res)=>{
    res.send('Update a student');
}

const deleteStudents = (req,res)=>{
    res.send('Delete a student');
}
export {listStudents,addStudents,updateStudents,deleteStudents};