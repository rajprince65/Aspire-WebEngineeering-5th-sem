import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LearnButton } from './components/pages/LearnButton'
import { LearnCard } from './components/pages/LearnCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <LearnButton/>
        <LearnCard/>
    </>
  
  )
}

export default App
