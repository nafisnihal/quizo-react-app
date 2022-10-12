import React from 'react';
import Options from '../Options/Options';

const Question = ({ allQuestion }) => {
  console.log(allQuestion);
  const { question, options } = allQuestion;
  return (
    <div className='bg-slate-900 my-6 text-center p-4 rounded-lg w-2/3 mx-auto'>
        <p className='mt-3 mb-6 py-5 mx-2  bg-yellow-400 rounded-md '>{question}</p>
        {
            options.map(option => <Options
            key={option}
            allOption={option}
            ></Options>)
        }
    </div>
  );
};

export default Question;