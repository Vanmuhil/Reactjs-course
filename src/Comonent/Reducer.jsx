import React, { useReducer } from 'react'

export default function Reducer() {
  //EXAMPLE==>1
  // const initialState=0;
  // const reduce=(state,actions)=>{
  //   switch(actions)
  // {
  //     case 'inc':return state+1;
  //     case 'dec':return state-1;
  //     case 'reset':return initialState;
  //     case 'default':return state;
  //   }
  // }

  // EXAMPLE===>2
  // const initialState={
  //   firstCounter:0,
  //   secoandCounter:0
  // }
  // const reduce=(state,actions)=>{
  //   switch(actions){
  //     case 'inc':return {...state,firstCounter:state.firstCounter+1};
  //     case 'dec':return {...state,firstCounter:state.firstCounter-1};
  //     case 'dec5':return{...state,secoandCounter:state.secoandCounter-5};
  //     case 'inc5':return{...state,secoandCounter:state.secoandCounter+5};
  //     case 'reset':return initialState;
  //     case 'default': return state;
  //   }
  // }

//example====>3
const initialState=0;
  const reduce=(state,actions)=>{
    switch(actions.type)
  {
      case 'inc':return state+actions.value;
      case 'dec':return  state-actions.value;
      case 'reset':return initialState;
      case 'default':return state;
    }
  }



  const[count,display]=useReducer(reduce,initialState);
    
  return (
    <div>
     {count}
     <button onClick={()=>{display({type:'inc',value:1})}}>+</button>
     <button onClick={()=>{display({type:'dec',value:1})}}>-</button>
     <button onClick={()=>{display({type:'reset', value:0})}}>c</button>
      {/* <button onClick={()=>{display('inc')}}>+</button>
      <button onClick={()=>{display('dec')}}>-</button>
      {count.secoandCounter}
      <button onClick={()=>{display('inc5')}}>+5</button>
      <button onClick={()=>{display('dec5')}}>-5</button>
      <button onClick={()=>{display('reset')}}>c</button> */}
    </div>
  )
}
