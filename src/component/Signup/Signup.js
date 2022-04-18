import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Login/login.css";
import auth from "./../../Firebase/firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    others: "",
  });

  const [showPass, setShowPass] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  
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

  const handleConfirmPasswordChange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
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
  }, [hookError]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div className="login-container">
      <div className="login-title">Sign Up First</div>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Your Email"
          onChange={handleEmailChange}
        />
        {errors?.email && <p className="error-message">{errors.email}</p>}
        <input
          type={showPass ? "text" : "password"}
          placeholder="password"
          onChange={handlePasswordChange}
        />
        {errors?.password && <p className="error-message">{errors.password}</p>}

        <input
          type="password"
          placeholder="confirm password"
          onChange={handleConfirmPasswordChange}
        />

        <button>Sign Up</button>
      </form>
      <button onClick={handleGoogleLogin}>Sign Up with Google</button>
      <div>
        <p className="font-medium text-lg text-center text-white mt-4">
          Don't have an account ?
        </p>
        <p className="font-bold text-xl text-center text-blue-900">
          <Link to="/login">Log In</Link>
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
  );
};

export default Signup;
