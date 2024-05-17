import React, { useMemo, useState } from 'react'


export default function Usememo() {
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
    const isEven=useMemo (()=>{
        let i=0;
        while(i<200000000){i++}
        return count1%2===0
    },[count1])
  return (
    <div> 
        {isEven?"even":"odd"}
        <button onClick={()=>{setCount1(count1+1)}}>count{count1}</button>
        <button onClick={()=>{setCount2(count2+1)}}>count {count2}</button>

    </div>
  )
}
