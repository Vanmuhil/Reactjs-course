import React from 'react';
import { useState } from 'react';

export default function State() {
    const[name,setName]=useState("van");
    function Changename(){
      if(name=="van")
      {
        setName('jhon');
      }
      else{
        setName('van');
      }
    }

  return (
    <div>
        <h1>{name}</h1>
        <button onClick={Changename}>change</button>
    </div> );
}
