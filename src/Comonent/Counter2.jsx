import React from 'react'

import Update from './Hoc'

 function Counter2(props) {
  return (
    <div>
        {props.name}
        <h1 onMouseOver={props.handleclk}>{props.count}</h1>
    </div>
  )
}
export default Update(Counter2)
