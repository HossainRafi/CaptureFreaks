import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login-title">Log In First</div>
        <form className="login-form">
          <input type="text" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <button>Log In</button>
        </form>
        <button>Log In with Google</button>
        <div>
          <p className="font-medium text-lg text-center text-white mt-4">
            Forget your password ?
          </p>
          <p className="font-bold text-xl text-center text-blue-900 cursor-pointer">
            <p>Reset Password</p>
          </p>
        </div>

        <div>
          <p className="font-medium text-lg text-center text-white mt-4">
            Don't have an account ?
          </p>
          <p className="font-bold text-xl text-center text-blue-900">
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
