import React from 'react'
// import Update from './Hoc'

export default function Counter1(props) {
  return (
    <div>
      
        <button onClick={props.handleInc}>{props.count}</button>
    </div>
  )
}
// export default Update(Counter1)