import React from 'react'

function UsecallbackB(props) {
    console.log(`${props.name}`);
  return (
    <div>
        <button onClick={props.handleClick}>click here</button>
    </div>
  )
}
export default React.memo(UsecallbackB)