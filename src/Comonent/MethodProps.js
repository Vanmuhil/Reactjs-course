import React from 'react'
import MethodPropschild from './MethodPropschild'

export default function MethodProps() {

function abc(a){
console.log(a);
}
  
  return (
    <div>
        <MethodPropschild nameFn={abc}/>
    </div>
  )
}
