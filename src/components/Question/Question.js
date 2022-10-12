import React from 'react';
import Options from '../Options/Options';
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const Question = ({ allQuestion }) => {
  console.log(allQuestion);
  const { correctAnswer, question, options } = allQuestion;

  const correct = (option) =>{
    if(option === correctAnswer){
        toast.success("Correct Answer");
    }else{
       toast.error('Wrong Answer');
    }
  }

  return (
    <div className="bg-slate-900 my-6 text-center p-4 rounded-lg w-2/3 mx-auto">
      <p className="mt-3 mb-6 py-5 mx-2  bg-yellow-400 rounded-md ">
        {question}
      </p>
      {options.map((option) => (
        <Options key={option} allOption={option} correct={correct}></Options>
      ))}
      <ToastContainer position="top-center" autoClose={500} />
    </div>
  );
};

export default Question;