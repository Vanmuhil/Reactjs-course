import React, { useState } from 'react'

export default function ConditionalRendering() {
    const[name,setName]=useState(true);
    // short circuit
    // return(
    //     <>
    //        { name && <h1>welcome</h1>}
    //     </>
    // )

    // conditional operator
    // return(<>
    // {name?(<h1>welcome</h1>):(<h1>hai</h1>)}
    // </>);

    // Element Variable
    // var html;
    // if (name) {
    //    { html=<h1>welcome</h1>}   
    // }
    // else{
    //     {html=<h1>hai</h1>}
    // }
    // return html;

    // IF else
    // if (name>2) {
    //     return (
    //         <div>
    //             <h1>welcome</h1>
    //         </div>)
    // }
    // else{
    //     return(
    //         <>
    //         <h2>hai</h2>
    //         </>
    //     )
    // }
  
  
}
