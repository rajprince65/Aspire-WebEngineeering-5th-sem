import React from 'react'

export const LearnFlexUsingTailwind = () => {
  return (
    <>
        <div className="container flex  flex-wrap gap-4 width-96 h-[200px] border-2 border-black  justify-center items-center">
            <div className="items self-start">1</div>
            <div className="items self-end">2</div>
            <div className="items self-center">3</div>
            <div className="items grow">4</div>
            <div className="items grow">5</div>
            <div className="items shrink">6</div>
        </div>
    </>
  )
}
