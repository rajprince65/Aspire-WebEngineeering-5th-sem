import React from 'react'

export const LearnInlineCss = () => {
    const tstyle={
        fontSize:30,
        color:"#551bf3ff",
        backgroundColor:"#a6ff00ff",
        
    }
  return (
    <>
        <div style={{fontSize:40,color:"red"}}>LearnInlineCss</div>
      
        <div style={tstyle}>This is div with inline css using object</div>
        <div style={{...tstyle,textAlign:"center"}}>Our Aspire college</div>

      
      
    </> 
  )
}
