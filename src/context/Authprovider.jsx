import React, { createContext, useEffect, useState } from 'react'
import { getlocalstorage, setlocalstorage } from '../utils/LocalStorage'
export const Contextpro=createContext()
function Authprovider({children}) {
  const [userdata, setuserata] = useState(null)

 useEffect(()=>{
  setlocalstorage()
  const {employee,admin}= getlocalstorage()
  setuserata({employee,admin})
  
 },[])
  return (
    <div>
      <Contextpro.Provider value={userdata}>
        {children}
      </Contextpro.Provider>
    </div>
  )
}

export default Authprovider