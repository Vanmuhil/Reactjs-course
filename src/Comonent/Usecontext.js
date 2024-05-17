import React from 'react'
import Usecontext1 from './Usecontext1'
export const userName=React.createContext()
export const password=React.createContext()


export default function Usecontext() {
  return (
    <div>
        <userName.Provider value={"Vanmuhil"}>
            <password.Provider value={"Abc@123"}>
                     <Usecontext1/>
            </password.Provider>
            
        </userName.Provider>
       
    </div>
  )
}
