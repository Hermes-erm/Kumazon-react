import React from 'react'
import './Login.css'
import facebook from '../public/facebook.png'
import google from '../public/google.png'
import linkedin from '../public/linkedin.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div className="body">
        <div className="container1">
          <div className='left' style={{borderRadius:'15px 0 0 15px',backgroundColor:'rgb(248,248,248)'}}>
            <div className="left_cont">
              <p>Sign in</p>

              <div className='icons'>
              <Link><img src= {facebook} alt="f" /></Link>
              <Link><img src= {google} alt="g" /></Link>
              <Link><img src= {linkedin} alt="l" /></Link>
              </div>

              <div className='inputs'>
                <input type="text" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <Link className='buts'>Forget your password?</Link>
              </div>

              <button className='sign-in' onClick={()=>{history.back()}}>SIGN IN</button>
            </div>
          </div>
          <div className='right2' style={{borderRadius:'0 15px 15px 0'}}>
            <div className="box">
              <p className='text'>Welcome <br />Bro!</p>
                <Link to="/" style={{textDecoration:'none',color:'black',fontFamily:'arial'}}><p className='back2'>Back to Home</p></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
