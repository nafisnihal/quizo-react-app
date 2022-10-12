import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../pictures/bg-picture.png'

const Home = () => {
    return (
      <div className="bg-gray-300 flex flex-col-reverse md:flex-row justify-center items-center pb-16">
        <div
          className="w-1/2 flex
          flex-col justify-center items-center"
        >
          <h1 className="text-5xl font-bold ">Let's Check Your Skills</h1>
          <button className="mt-5 border rounded-lg px-5 py-3 bg-yellow-500 font-bold hover:bg-yellow-400">
            <Link to="/quizes">Take Quizes</Link>
          </button>
        </div>
        <div className="w-1/2">
          <img src={background} alt="" />
        </div>
      </div>
    );
};

export default Home;