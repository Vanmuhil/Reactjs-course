import React, { useContext } from 'react'
import { counter } from './Usecontextreducer';

 function UsecontextreducerA() {
    const a =useContext(counter);
  return (
    <div>A
        <button onClick={()=>{a.display('inc')}}>+</button>
     <button onClick={()=>{a.display('dec')}}>-</button>
     <button onClick={()=>{a.display('reset')}}>c</button>
    </div>
  )
}
export default React.memo( UsecontextreducerA)