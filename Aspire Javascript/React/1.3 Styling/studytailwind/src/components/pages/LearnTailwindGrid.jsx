import React from 'react'

export const LearnTailwindGrid = () => {
  return (
    <>
    <div className="grid grid-cols-4 grid-rows-2 gap-4 bg-slate-400 p-4 align-middle justify-center  ">
        <div className="h-40 w-40 bg-red-400">1</div>
        <div className="h-40 w-40 bg-blue-400">2</div>
        <div className="h-20 w-20 bg-green-400 justify-self-end self-center">3</div>
        <div className="h-20 w-20 bg-yellow-400 justify-self-center self-center">4</div>
        <div className="h-40 w-40 bg-purple-400">5</div>
        <div className="h-40 w-40 bg-pink-400 ">6</div>
        <div className="h-40 w-40 bg-indigo-400 rounded-full">7</div>
        <div className="h-40 w-40 bg-orange-400 rounded-full">8</div>
        <div className="h-40 w-40 bg-cyan-400 rounded-full">9</div>
    </div>
    </>

  )
}
