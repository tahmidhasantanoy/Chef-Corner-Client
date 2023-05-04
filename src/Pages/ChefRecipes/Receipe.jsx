// import React from 'react';

import { FaHeart, FaThumbsUp } from "react-icons/fa";

const Receipe = ({ receipe }) => {
  console.log(receipe);
  const { name, ingredients, method, rating } = receipe;
  return (
    <div className="card w-96 bg-info text-primary-content">
      <div className="card-body">
        <h2 className="card-title">Chef name : <span className="font-bold">{name}</span> </h2>
        <span className="text-2xl underline font-bold">Methods </span>
        <p>{method}</p>
        <div>
          <h3 className="text-2xl">Ingredients :</h3>
          <span>{ingredients[1]}</span> <hr className=" w-3/12" />
          <span>{ingredients[2]}</span><hr  className=" w-3/12"/>
          <span>{ingredients[3]}</span><hr  className=" w-3/12"/>
          <span>{ingredients[4]}</span><hr  className=" w-3/12"/>
          <span>{ingredients[5]}</span><hr  className=" w-3/12"/>
        </div>

        <div className="card-actions justify-end flex items-center">
            <span className="flex items-center mr-4"><FaThumbsUp className="mr-1"></FaThumbsUp> {rating}</span>
          <button className="btn"><FaHeart/></button>
        </div>
      </div>
    </div>
  );
};

export default Receipe;
