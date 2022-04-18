import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="md:flex flex-row justify-between items-center bg-slate-300 md:h-[3.8rem] sticky top-0 z-50 px-10">
      <div className="flex flex-row justify-center items-center text-blue-500">
        <i className="las la-camera-retro text-5xl font-extrabold"></i>
        <h2 className="font-serif  text-3xl font-bold italic">
          Capture Freaks
        </h2>
      </div>
      <div className="text-xl font-bold font-mono flex justify-center items-center gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
          }
        >
          Blogs
        </NavLink>

        {user?.uid ? (
          <button
            className="text-slate-600 hover:text-blue-600 text-xl font-bold"
            onClick={() => signOut(auth)}
          >
            LogOut
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
            }
          >
            LogIn
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
