import React, { useEffect, useRef } from 'react'

export default function Useref() {
    const input=useRef()
    useEffect(()=>{input.current.focus()},[])
  return (
    <div>
        <input ref={input} />

    </div>
  )
}
