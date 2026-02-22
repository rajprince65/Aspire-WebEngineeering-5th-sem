import React from 'react'
import { useState } from 'react'
export const LearnForm = () => {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [age,setAge]=useState("")
    
    function handleFirstName(e){
        setFirstName(e.target.value)
    }
    function handleLastName(e){
        setLastName(e.target.value)
    }
    function handleAge(e){
        setAge(e.target.value)
    }

    function handleForm(e){
        e.preventDefault();
        console.log(`firstName:${firstName} lastName:${lastName} age:${age}`);
    }
  return (
    <>
        <form action="" onSubmit={handleForm}>
            FirstName:<input type="text" name="firstName" value={firstName} onChange={handleFirstName} />
            <br/>
            LastName:<input type="text" name="lastName" value={lastName} onChange={handleLastName} />
            <br/>
            Age:<input type="text" name="age" value={age} onChange={handleAge} />
            <br/>
            <button type="submit">Submit</button>

        </form>
    </>
  )
}




// import React from 'react'
// import { useState } from 'react'
// export const LearnForm = () => {
//     const [studentInfo, setStudentInfo]=useState({firstName:"",lastName:"",age:""})
    
//         const handleChange=(e)=>(
//             setStudentInfo(
//                 (prev)=>({...prev,[e.target.name]: e.target.value})
                    
//             )
//         )
//         function handleData(e){
//             e.preventDefault();
//             console.log(`firstname:${studentInfo.firstName} lastName=${studentInfo.lastName} age=${studentInfo.age}`);  
 //         }

    
//     return (
//         <>
//             <div>LearnForm</div>
//             <form action="" onSubmit={handleData}>
//                 FirstName:<input type="text" name="firstName" value={studentInfo.firstName} onChange={handleChange}/>
//                 <br/>
//                 LastName:<input type="text" name="lastName" value={studentInfo.lastName} onChange={handleChange}/>
//                 <br/>
//                 Age:<input type="number" name="age" value={studentInfo.age} onChange={handleChange}/>
//                 <br/>
//                 <button type='submit'>Submit</button>
//             </form>
//             {console.log(studentInfo)}
        
//         </>
        
//     )

// }
