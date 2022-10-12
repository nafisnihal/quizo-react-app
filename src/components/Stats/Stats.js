import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Stats = () => {
  const quiz = useLoaderData();
  const { data } = quiz;
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bg-slate-900 mt-5 w-4/5 mx-auto text-yellow-300 py-5 text-center font-bold rounded-xl text-lg mb-10">
        Total Questions On Topics
      </h1>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Stats;
