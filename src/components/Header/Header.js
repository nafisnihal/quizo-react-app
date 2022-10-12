import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center bg-slate-900 text-white py-4">
      <h1 className="text-4xl text font-bold ml-3">Quizo</h1>
      <div className="mr-5 ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "ml-5 font-medium text-yellow-400"
              : "ml-5 font-medium hover:text-yellow-400"
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "ml-5 font-medium text-yellow-400"
              : "ml-5 font-medium hover:text-yellow-400"
          }
          to="/quizes"
        >
          Quizes
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "ml-5 font-medium text-yellow-400"
              : "ml-5 font-medium hover:text-yellow-400"
          }
          to="/stats"
        >
          Stats
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "ml-5 font-medium text-yellow-400"
              : "ml-5 font-medium hover:text-yellow-400"
          }
          to="/blog"
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
