import React from 'react'

export const LearnGridUsingTailwind = () => {
  return (
    <> <div className="container grid grid-cols-3 gap-x-4 gap-y-3 border-2 border-black p-4 w-96 h-[200px]">
            <div className="itemsg col-span-2">1</div>
            <div className="itemsg row-span-2">2</div>
            <div className="itemsg ">3</div>
            <div className="itemsg ">4</div>
            <div className="itemsg ">5</div>
            <div className="itemsg ">6</div>
        </div>

    </>
  )
}
