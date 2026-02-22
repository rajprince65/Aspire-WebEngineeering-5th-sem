import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { LearningInlineStyle } from './components/LearningInlineStyle'
import { LearnExternalcss1 } from './components/LearnExternalcss1'
import { LearnExternalcss2 } from './components/LearnExternalcss2'
import { LearnCssModue1 } from './components/LearnCssModue1'
import { LearnCssModule2 } from './components/LearnCssModule2'
import { LearnFlex } from './components/LearnFlex'
import { LearnGrid } from './components/LearnGrid'
import { LearnGridTemplateArea } from './components/LearnGridTemplateArea'
import { LearnFlexUsingTailwind } from './components/LearnFlexUsingTailwind'
import { LearnGridUsingTailwind } from './components/LearnGridUsingTailwind'


function App() {
  

  return (
    <>
      {/* <div style={{backgroundColor:"green",fontSize:"30px"}}>Hello world</div> */}
      {/* <LearningInlineStyle /> */}
      {/* <LearnExternalcss1/> */}
      {/* <LearnExternalcss2/> */}
      {/* <LearnCssModue1/> */}
      {/* <LearnCssModule2/> */}
      {/* <LearnFlex/> */}
      {/* <LearnGrid/> */}
      <LearnGridTemplateArea/>
      {/* <LearnFlexUsingTailwind/> */}
      {/* <LearnGridUsingTailwind/> */}
    </>
  )
}

export default App
