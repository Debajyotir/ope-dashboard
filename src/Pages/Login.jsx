import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import "../Styles/login.scss"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleclick = () =>{
        navigate('/dashboard')
    }

  return (
    <div className='login-main'>
        <div className='login-box login-left'>
            <div className='logo'>
                <h3>Logo</h3>
            </div>
            <div className='board'>
                <h1>Board.</h1>
            </div>
            <div className='container'>
                <div><FaGithub/></div>
                <div><FaTwitter/></div>
                <div><FaLinkedin/></div>
                <div><IoLogoDiscord/></div>    
            </div>
        </div>
        <div className='login-box login-divide'></div>
        <div className='login-box login-right'>
            <div>
                <h2>Sign in</h2>
                <p>Sign in to your account</p>
                <div className='sign-button'>
                    <button onClick={()=>handleclick()}>
                        <span><FcGoogle /></span> sign in with Google
                    </button>
                    <button onClick={()=>handleclick()}>
                        <span><FaApple /></span> sign in with Google
                    </button>
                </div>
                <div className='form-div'>
                    <form>
                    <label htmlFor='email'>Email adress</label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a href='#'>Forgot password?</a>
                        <button type='button' onClick={()=>handleclick()}>
                            Sign In
                        </button>
                    </form>
                </div>
                <div className='reg'>
                    Don't have an account?  <a href='#'>Register here</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login