import React, { useReducer } from 'react'
import UsecontextreducerA from './UsecontextreducerA';
import UsecontextreducerB from './UsecontextreducerB';
export const counter=React.createContext()


export default function Usecontextreducer() {
  const initialState=0;
  const reduc =(state,actions)=>{
    switch(actions){
      case'inc':return state+1;
      case 'dec' :return state-1;
      case 'reset':return initialState;
      case 'default':return state;
    }
  }
  const[count,display]=useReducer(reduc,initialState)

  return (
    <div>
      {count}
      <counter.Provider value={{count:count,display:display}}>
        <UsecontextreducerA/>
        <UsecontextreducerB/>

      </counter.Provider>
  

    </div>
  )
}
