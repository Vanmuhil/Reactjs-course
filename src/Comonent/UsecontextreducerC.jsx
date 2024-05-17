import React, { useContext } from 'react'
import { counter } from './Usecontextreducer'


 function UsecontextreducerC() {
    const a=useContext(counter)
    console.log("c");
  return (
    <div>c
         <button onClick={()=>{a.display('inc')}}>+</button>
     <button onClick={()=>{a.display('dec')}}>-</button>
     <button onClick={()=>{a.display('reset')}}>c</button>
    </div>
  )
}
export default React.memo( UsecontextreducerC)