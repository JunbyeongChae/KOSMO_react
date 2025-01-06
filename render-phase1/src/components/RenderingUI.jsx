import React from 'react'

const RenderingUI = ({handleClick}) => {
  return (
    <>
      {Array.from({length: 100}, (_, i) => {
        if(i===99){
          console.log("rendering last item",i)
        }
        return(
          <div onClick={handleClick} key={i}>ButtonClick</div>
        )
      })}
    </>
  )
}

export default React.memo(RenderingUI)