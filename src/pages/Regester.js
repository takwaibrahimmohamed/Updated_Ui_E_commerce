import React, { useState } from 'react'
import './Regester.css'
import { Link, json } from 'react-router-dom';
import { Alert } from '@mui/material';
import Login from './Login'
const Regester = () => {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [phone,setPhone]=useState("")
const [flag,setFlag]=useState(false)
const [LoginReg,setLoginReg]=useState(true)


const handleSubmit=(e)=>{
    e.preventDefault()
    if(!name || !email || !password || !phone){
        setFlag(true)
       
    }
    else{
        setFlag(false)
        localStorage.setItem("name",JSON.stringify(name))
        localStorage.setItem("email",JSON.stringify(email))
        localStorage.setItem("password",JSON.stringify(password))
       
        setLoginReg(!LoginReg)
    }
}
const handleClick=()=>{
    setLoginReg(!LoginReg)
}
  return (
    <>
    {
    LoginReg?(
        <div className='regester-form'>

        <form onSubmit={handleSubmit}>
            <h2>Regester</h2>
        <div className="form-group">
            <label >Name</label>
            <input type="text"
            className="form-control" 
            
            placeholder="Enter full name"
            onChange={(even)=>setName(even.target.value)}
            />
            
        </div>
        <div className="form-group">
            <label >Email address</label>
            <input type="email"
            className="form-control" 
           
            placeholder="Enter email"
            onChange={(even)=>setEmail(even.target.value)}
            />
           
        </div>
        <div className="form-group">
            <label >Password</label>
            <input type="password" 
            className="form-control" 
           
            placeholder="Password"
            onChange={(even)=>setPassword(even.target.value)}
            />
        </div>
        <div className="form-group">
            <label >Phone no .</label>
            <input type="phone" 
            className="form-control" 
          
            placeholder="Enter contact no"
            onChange={(even)=>setPhone(even.target.value)}
            />
        </div>
       
     <button 
     type="submit" 
     className="btn btn-primary">Regester</button>
     <p className="forgot-password text-right">
     Already registered{" "}
     <Link to="/login" onClick={handleClick} style={{textDecoration:"none",fontWeight:"bold",fontSize:"20px"}}>
            Login ?
     </Link>
   
     </p>
     {
        flag&&(
            <Alert style={{color:"red"}} variant="danger">
              I got it you are in hurry! But every Field is important!
            </Alert>
        )
     }
        </form>
    
           
</div>
    ):(<Login/>)
}
    </>

   
  )
}

export default Regester
