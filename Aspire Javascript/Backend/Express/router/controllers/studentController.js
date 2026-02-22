const studentList = (req, res) => {
    res.send('List of students');
}

const addStudent = (req, res) => {
    res.send('Student added');
}


const updateStudent = (req, res) => {
    
    res.send(`Student with ID updated`);
};

const deleteStudent = (req, res) => {
    res.send(`Student with ID deleted`);
};

export {studentList, addStudent, updateStudent, deleteStudent};