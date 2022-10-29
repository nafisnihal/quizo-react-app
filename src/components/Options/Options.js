import React from "react";

const Options = ({ allOption, correct }) => {
  return (
    <div className="text-black">
        <button
          className="bg-white my-3 p-2 w-4/5 mx-auto rounded-md cursor-pointer hover:bg-yellow-400"
          onClick={() => correct(allOption)}
        >
          {allOption}
        </button>
    </div>
  );
};

export default Options;
