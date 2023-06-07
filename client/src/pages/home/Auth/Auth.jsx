import React from 'react'
import './Auth.css';
import Logo from '../../../img/logo.png';
const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>ZKC Media</h1>
                <h6>Explore the ideas through the world</h6>
            </div>
        </div>
        <SignUp />
        {/* <LogIn/> */}
    </div>
  )
}
function LogIn(){
    return (
        <div className="a-right">
            <form action="" className="infoform authForm">
                <h3>Log In</h3>
                <div>
                    <input type="text" className="infoInput" name="username" placeholder="Username"  />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" className="infoInput"/>
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Don't have an accountSign up</span>
                </div>
                <button className='button info-button' type='submit'>Login</button>
            </form>
        </div>
    )
}

function SignUp(){
    return (
        <div className="a-right">
            <form action="" className="infoform authForm">
                <h3>Sign up</h3>
                <div>
                    <input type="text" className="infoInput" name="firstname" placeholder="First Name" />
                    <input type="text" className="infoInput" name="lastname" placeholder="Last Name" />
                </div>
                <div>
                    <input type="text" className="infoInput" name="username" placeholder="Username"  />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" className="infoInput"/>
                    <input type="password" name="confirmpassword" placeholder="Confirm Password" className="infoInput"/>
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Already have an account. Login!</span>
                </div>
                <button className='button infoButton' type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Auth