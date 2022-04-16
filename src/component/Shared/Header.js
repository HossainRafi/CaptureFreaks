import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-slate-300 h-[4rem] sticky top-0 z-50 px-10">
      <div>
        <h2 className="font-serif text-4xl font-bold italic text-blue-500">
          <i className="las la-camera-retro text-5xl font-extrabold"></i>
          <span>Capture Freaks</span>
        </h2>
      </div>
      <div className="text-xl font-bold font-mono flex gap-7">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/dashBoard"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
          }
        >
          LogIn
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
