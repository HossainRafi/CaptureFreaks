import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
    return (
      <div className="login-container">
        <div className="login-title">Check Out Me</div>
        <form className="login-form">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="text" placeholder="Enter Your Phone Number" />
          <input type="text" placeholder="Enter Your Address" />
        </form>
        <button onClick={toast}>Hire Me</button>
        <ToastContainer />
      </div>
    );
};

export default Checkout;