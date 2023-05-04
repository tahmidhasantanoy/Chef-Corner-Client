// import React from 'react';
import { Link } from "react-router-dom";
import per from "../../../../public/images/p1.jpg";
import { FaGlassCheers, FaThumbsUp } from "react-icons/fa";

const Card = ({ info }) => {
  console.log(info);

  const { chefName, chefImage, experience, numRecipes, totalLikes } = info;
  return (
    <div>
      <div className="w-11/12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:shadow-xl">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={per}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {chefName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {experience} experience
          </span>
          <div className="flex items-center mt-3">
            <FaGlassCheers className="text-info mr-2" />
            <span className="font-bold">Number of receipes : {numRecipes}</span>
          </div>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <p
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-cyan-500 bg-white border  rounded-lg "
            >
              <FaThumbsUp className="mr-2" /> {totalLikes}
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-info rounded-lg hover:bg-blue-00 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-00 dark:hover:bg-cyan-700"
            >
              view recepies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
