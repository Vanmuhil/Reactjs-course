import React from 'react'
import RenderFn from './RenderFn'
import Counter1 from './Counter1'

export default function RenderProps() {

  return (
    <div>
        <RenderFn render={(count,handleInc)=>(<Counter1 count={count} handleInc={handleInc}/>)}/>
    </div>
  )
}
