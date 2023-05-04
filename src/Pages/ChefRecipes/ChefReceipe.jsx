// import React from 'react';

import { FaGlassCheers, FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const ChefReceipe = () => {
  // const {id} = useParams()
  const specificShefData = useLoaderData();
  console.log(specificShefData);

  const { bio, chefImage, chefName, experience, numRecipes,totalLikes } = specificShefData;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chefImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{chefName}</h1>
          <p className="mt-2">{experience} experience</p>
          <p className="py-6">
            {bio}
          </p>
          <button className="btn btn-primary mr-2"><FaThumbsUp className="mr-2" /> {totalLikes}</button>
          <button className="btn btn-primary ml-2"><FaGlassCheers className="mr-2" /> {numRecipes}</button>
        </div>
      </div>
    </div>
  );
};

export default ChefReceipe;
