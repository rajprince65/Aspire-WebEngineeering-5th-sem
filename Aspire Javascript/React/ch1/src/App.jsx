import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { LearnComponents } from './components/LearnComponents'
import { LearnJSX } from './components/LearnJSX'
import { LearnProps } from './components/LearnProps'
import { LearnEvent } from './components/LearnEvent'
// import { LearnLiftingStateUp} from './components/LearnLiftingStateUp'
import { Child } from './components/Child'
import { LearnState } from './components/LearnState'
import { LearnState1 } from './components/LearnState1'
import { LearnState2 } from './components/LearnState2'
import { LearnState3 } from './components/LearnState3'
import { LearnState4 } from './components/LearnState4'
import { LearnUseEffect } from './components/LearnUseEffect'
import { LearnUseMemo } from './components/LearnUseMemo'
import { LearnMemo } from './components/LearnMemo'
import { UseCallback } from './components/UseCallback'
import { LearnCustumeHook } from './components/LearnCustumeHook'
import { LearnConditionalRendering } from './components/LearnConditionalRendering'
import { LearnMap } from './components/LearnMap'
import { LearnInlineCss } from './components/LearnInlineCss'
import { LearnExternalCss1 } from './components/LearnExternalCss1'
import { LearnExternalCss2 } from './components/LearnExternalCss2'
import { LearnCssModule1 } from './components/LearnCssModule1'
import { LearnCssModule2 } from './components/LearnCssModule2'
import { LearnImage } from './components/LearnImage'
import { LearnForm } from './components/LearnForm'
import { PracticeProps } from './components/PracticeProps'
import { PracticeEvent } from './components/PracticeEvent'
import { LearnUseState } from './components/LearnUseState'
import { StudyLiftingStateUP } from './components/StudyLiftingStateUP'

function App() {
  const [name,setName]=useState("Aspire College")
  let roll=2
  let firstname ="pranjal"
  const parentFun=(data)=>{
    console.log(data)
  }

  return (
    <>
      {/* <LearnComponents/> */}
      {/* <LearnJSX/> */}
      {/* <LearnProps name="susmita" roll={roll} /> */}
      {/* <LearnEvent/> */}
      {/* <LearnLiftingStateUp onpress={parentFun} /> */}
      {/* second example of lifting state up */}
      {/* <Child updateValue={setName}/> */}
      {/* <div>{name}</div> */}

      {/* <LearnState/> */}
      {/* <LearnState1/> */}
      {/* <LearnState2/> */}
      {/* <LearnState3/> */}
      {/* <LearnState4/> */}
      {/* <LearnUseEffect/> */}
      {/* <LearnUseMemo/> */}
      {/* <LearnMemo/> */}
      {/* <UseCallback/> */}
      {/* <LearnCustumeHook/> */}
      {/* <LearnConditionalRendering/> */}
      {/* <LearnMap/> */}
      {/* <LearnInlineCss/> */}
      {/* <LearnExternalCss1/> */}
      {/* <LearnExternalCss2/> */}
      {/* <LearnCssModule1/> */}
      {/* <LearnCssModule2/> */}
      {/* <LearnImage/> */}
      {/* <LearnForm/> */}
      {/* <PracticeProps name={firstame} roll={roll}/> */}
      {/* <PracticeEvent/> */}
      {/* <LearnUseState/> */}
      <div>Name:{name}</div>
      <StudyLiftingStateUP onclick={setName}/>
      
      



    </>
    

  )
}

export default App
