import React from 'react'
import "./login.scss"
const Login = ({setlogin,setusername}) => {
  return (
    <div className='login'>
        <div className='loginbox'>
          <p>Please Login</p>
            <h2 className='loginboxelements'>User Id</h2>
            <input className='loginboxelements' onChange={(e)=>setusername(e.target.value)} type='text' />
            <h2 className='loginboxelements'>Password</h2>
            <input className='loginboxelements' type='text' />
            <button className='loginboxelements' onClick={()=>setlogin(true)}>Login</button>
        </div>
    </div>
  )
}

export default Login