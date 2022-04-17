import React from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";

const Signup = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login-title">Sign Up First</div>
        <form className="login-form">
          <input type="text" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <input type="password" placeholder="Confirm Your Password" />
          <button>Sign Up</button>
        </form>
        <button>Sign Up with Google</button>
        <div>
          <p className="font-medium text-lg text-center text-white mt-4">
            Already have an account ?
          </p>
          <p className="font-bold text-xl text-center text-blue-900">
            <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
