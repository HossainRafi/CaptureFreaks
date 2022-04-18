import React from 'react';

const Checkout = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="login-container">
        <div className="login-title">Check Out Form</div>
        <form className="login-form">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="text" placeholder="Enter Your Phone Number" />
          <input type="text" placeholder="Enter Your Address" />
        </form>
        <button>Hire Me</button>
      </div>
    </div>
    );
};

export default Checkout;