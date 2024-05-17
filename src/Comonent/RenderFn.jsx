import React, { useState } from 'react'

export default function RenderFn(props) {

    const[count,setCount]=useState(0)
    const handleinc=()=>{
        setCount(count+1)
    }
  return (
    <div>
        {props.render(count,handleinc)}
    </div>
  )
}
