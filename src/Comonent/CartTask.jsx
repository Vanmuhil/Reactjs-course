import React, { useReducer, useState } from 'react'
import CartTask1 from './CartTask1';
export const product=React.createContext()


export default function CartTask() {
const initialState=0;
const reduce =(state,actions)=>{
    switch(actions){
        case 'inc':return state+1;
        case 'dec':return state-1;
        case 'reset':return initialState;
        case 'default':return state;
    }
}
const[count1,display1]=useReducer(reduce,initialState);
const[count2,display2]=useReducer(reduce,initialState);
const [isopen,setIsopen]=useState(false)
const [isopen1,setIsopen1]=useState(false)


  return (
    <div>
            <h1>shopping cart</h1>
        { isopen?(<div><h4>product A--{count1}</h4><button onClick={()=>{display1('dec')}}>decrease</button><button onClick={()=>{setIsopen(false)}}>remove</button> </div>):(null)}
        { isopen1?(<div><h4>product B--{count2}</h4><button  onClick={()=>{display2('dec')}}>decrease</button><button onClick={()=>{setIsopen1(false)}}>remove</button> </div>):(null)}
           
      <product.Provider value={{count1:count1,display1:display1,count2:count2,display2:display2,isopen,setIsopen,isopen1,setIsopen1}}>
        <CartTask1/>
      </product.Provider>
    </div>
  )
}
