import React from 'react'

export default function MethodPropschild(props) {

  return (
    <div>
      <button onClick={()=>props.nameFn("adam")}>Click</button>
    </div>
  )
}
