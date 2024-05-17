import { useState } from "react";


export default function UseInput(initial) {
    const[value,setValue]=useState(initial)
    const bind={
        value:value,
        onChange:(e)=>{setValue(e.target.value)}
    }
    return[value,bind]

}
