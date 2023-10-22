import React , { useState } from "react";
import Login from './Login'
import SignUp from "./SignUp";
const Task02 = () => {
    const [isSignup, setIsSignup] = useState(false);
  
    const handleSignup = (flag) => {
      setIsSignup(flag);
    };
  
    return (
      <div>
        {isSignup ? <Login /> : <SignUp handleSignup={handleSignup} />}
        <button onClick={() => handleSignup(false)}>Login</button>
        <button onClick={() => handleSignup(true)}>Sign up</button>
      </div>
    );
  };
  
  export default Task02;