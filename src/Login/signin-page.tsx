import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style/signin-style.css'

function SigninPage(){
    const navigate = useNavigate();

    function handleClick(){
        navigate('/homePage.html')
    }

    return(
        <>
        <div id="sign-in">
            <div className="left-side">
                <h1 className="logo"><a href="/" className="red-home">Follio</a></h1>
                <h4 className="subtext">
                    Developer's and Designer's finest creation are here
                </h4>
            </div>

            <div className="right-side">
                <h2 className="signin-text">Sign In to Follio</h2>
                <div className="input-box">
                    <label className="login-label" htmlFor="login">Email or Username</label>
                    <input className="login" type="email"/>
                    <div className="forgot-pass">
                        <label className="pass-label" htmlFor="pass">Password</label>
                        <a className="forget" href="#">Forgot Password?</a>
                    </div>
                    <input className="pass" type="password"/>
                    <div className="social-media">
                        <button className="btn btn-outline-primary"><i className="fa-brands fa-google"></i>Sign In With Google</button>
                    </div>
                    <div className="bottom-part">
                        <button className="btn signin-btn btn-primary" onClick={handleClick}>Sign In</button>
                        <p className="redirect">
                            Are you not a member? 
                            <a href="sign-up.html" className='now'>Sign Up Now</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default SigninPage