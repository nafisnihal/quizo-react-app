import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center bg-slate-900 text-white py-4">
      <Link to='/'>
        <h1 className="text-4xl text font-bold md:ml-14">Quizo</h1>
      </Link>
      <div className="md:mr-10 mt-5 md:mt-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "ml-5 font-medium text-yellow-500"
              : "ml-5 font-medium hover:text-yellow-500"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "ml-5 font-medium text-yellow-500"
              : "ml-5 font-medium hover:text-yellow-500"
          }
          to="/quizes"
        >
          Quizzes
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "ml-5 font-medium text-yellow-500"
              : "ml-5 font-medium hover:text-yellow-500"
          }
          to="/stats"
        >
          Stats
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
