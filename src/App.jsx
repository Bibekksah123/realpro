import React, { useEffect, useState } from 'react'
import './App.css'
import { useContext } from "react";
import { Contextpro } from './context/Authprovider';
import Login from './comopnents/Auth/Login'
import EmpDash from './comopnents/dashboard/EmpDash'
import Admin from'./comopnents/dashboard/Admin'
import { getlocalstorage, setlocalstorage } from './utils/LocalStorage'
function App() {
  const [user, setUser] = useState('')
  const [logindata, setlogindata] = useState('')
  const userdata=useContext(Contextpro)

  
  useEffect(()=>{
   const logindata=JSON.parse(localStorage.getItem('admin'))
   if(logindata){
setUser(logindata.role)
    console.log(logindata.role)
   }
  
  },[logindata])

  const handlelogin=(email,password)=>{
if(email==="admin@me.com" && password=='123'){
   setUser('admin')
  localStorage.setItem('admin',JSON.stringify({role:'admin'}))
}else if(userdata){
  const employee=userdata.employee.find((e)=>email==e.email && password==e.password)
  if(employee){
    setlogindata(employee)
  setUser('user')
  localStorage.setItem('admin',JSON.stringify({role:'user',data:'user'}))
  }

}else{
  console.log('invalid')
  setUser('')
}
  }

  return (
    <>
   {!user?<Login handlelogin={handlelogin}/>:''}
    {user=='admin'&&
     <Admin setUser={setUser}/>}{user=='user' && <EmpDash setUser={setUser} userdata={logindata}></EmpDash>}
    </>
  )
}

export default App