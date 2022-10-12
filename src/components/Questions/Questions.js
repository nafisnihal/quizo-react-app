import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const allQuestions = useLoaderData();
    const { data } = allQuestions;
    // console.log(data);
    const {name, questions} = data;
    return (
        <div>
            <h1 className='bg-slate-900 mt-5 w-4/5 mx-auto text-yellow-300 py-5 text-center font-bold rounded-xl text-lg'>Questions Of {name}</h1>
            {
                questions.map(question => <Question
                key={question.id}
                allQuestion={question}
                ></Question>)
            }
        </div>
    );
};

export default Questions;