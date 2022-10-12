import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  console.log(quiz);
  const { id, name, logo, total } = quiz;
  return (
    <div className="w-3/5 xs:w-1/3 mx-auto my-5 p-5 rounded-xl flex flex-col md:flex-row justify-between items-center bg-yellow-500 ">
      <img className="w-20 bg-black rounded-md" src={logo} alt="" />
      <div className="ml-2 grow">
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-xs">Total Questions: {total}</p>
      </div>
      <button className="text-white bg-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black">
        {" "}
        <Link to={`/quiz/${id}`}>Take Quiz</Link>
      </button>
    </div>
  );
};

export default Quiz;
