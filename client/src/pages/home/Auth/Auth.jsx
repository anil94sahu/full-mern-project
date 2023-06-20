import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../../img/logo.png";
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas through the world</h6>
        </div>
      </div>
      <div className="a-right">
        <form action="" className="infoform authForm">
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                className="infoInput"
                name="firstname"
                placeholder="First Name"
              />
              <input
                type="text"
                className="infoInput"
                name="lastname"
                placeholder="Last Name"
              />
            </div>
          )}
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="infoInput"
            />
            {isSignUp && (
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                className="infoInput"
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm Password is not same
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account! Sign up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Signup" : "Login"}
          </button>
        </form>
      </div>
      {/* <LogIn/> */}
    </div>
  );
};
function LogIn() {
  return (
    <div className="a-right">
      <form action="" className="infoform authForm">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="infoInput"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>Don't have an accountSign up</span>
        </div>
        <button className="button info-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="infoform authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="infoInput"
          />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            className="infoInput"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
