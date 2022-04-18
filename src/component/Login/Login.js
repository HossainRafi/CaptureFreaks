import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import auth from "./../../Firebase/firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [errors, setErrors] = useState({ email: "", password: "", others: "" });

  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const passwordRegex = /.{5,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Invalid Password" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmail(userInfo.email, userInfo.password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("OOPS..!! Something Went Wrong. Try Again Later");
          break;

        case "auth/invalid-password":
          toast("OOPS..!! Something Went Wrong. Try Again Later");
          break;
        default:
          toast("OOPS..!! Something Went Wrong. Try Again Later");
      }
    }
  }, [hookError, googleError]);
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  return (
    <div className="bg-gray-200 py-10">
      <div className="login-container">
        <div className="login-title">Log In First</div>
        <form onSubmit={handleLogin} className="login-form">
          <input
            onChange={handleEmailChange}
            type="text"
            placeholder="Enter Your Email"
          />
          {errors?.email && <p className="error-message">{errors.email}</p>}
          <input
            onChange={handlePasswordChange}
            type="password"
            placeholder="Enter Your Password"
          />
          {errors?.password && (
            <p className="error-message">{errors.password}</p>
          )}

          <button>Log In</button>
        </form>
        <button onClick={handleGoogleLogin}>Log In with Google</button>

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

        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default Login;
