import React from 'react'

function UsecallbackA(props) {
    console.log(`${props.name}`);
  return (
    <div>
        {props.name}---------{props.display}

    </div>
  )
}
export default React.memo(UsecallbackA)