import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    const {data} = quizes;
    // console.log(data);
    return (
        <div>
            {
                data.map(quiz => <Quiz
                key={data.id}
                quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Quizes;