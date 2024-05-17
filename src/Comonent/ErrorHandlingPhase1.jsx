import React from 'react'

export default function ErrorHandlingPhase1(props) {
    if(props.name==='samsung'){
        throw new error('cant show the product');
    }
  return (
    <div>
        {props.name}
        
    </div>
  )
}

