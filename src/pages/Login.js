import React, { useState } from 'react'
import './Regester.css'
import HomePage from './HomePage'
import { Alert } from '@mui/material'
import { Link } from 'react-router-dom'
const Login = () => {
  const [flag,setFlag]=useState(false)
  const [Home,setHome]=useState(true)
  const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
  
    const EmailLogin=localStorage.getItem("email").replace(/"/g,"")
    const passLogin=localStorage.getItem("password").replace(/"/g,"")
 if(!email || !password){
  setFlag(true)
 }
 else if(email !==EmailLogin || password !==passLogin){
  
    setFlag(true)
 
 }
 else{
  localStorage.setItem("login",true)
  setFlag(false)
  setHome(!Home)
 }
    
}
  return (
    <>
     { Home?(

        <div className='login'>
        <h2>Login</h2>
        {
        
            <form  onSubmit={handleSubmit}>
            
            <div className="form-group">
                <label >Email address</label>
                <input type="email"
                onChange={(even)=>setEmail(even.target.value)}
                className="form-control"  placeholder="Enter email"/>
               
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" 
                onChange={(even)=>setPassword(even.target.value)}
                className="form-control"  placeholder="Password"/>
            </div>
            
        
         <button type="submit" className="btn btn-primary">login</button>
         
         {flag&&(
                <Alert style={{color:"red"}} variant="danger">
                  password or email is wrong
                </Alert>
            )}
        </form>
          
        }
               
    </div>
      ):(
            <HomePage/>
          )
      }
    </>
   
  )
}

export default Login
