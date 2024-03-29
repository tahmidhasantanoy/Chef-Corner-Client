import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { useState } from "react";

const Receipe = ({ receipe }) => {
  const { name, ingredients, method, rating } = receipe;
  const [disable, setDisable] = useState(false);

  const notify = () => toast("Add to favourite");

  return (
    <div className="card w-96 bg-cyan-600 text-primary-content my-12">
      <div className="card-body">
        <h2 className="card-title">
          Chef name : <span className="font-bold">{name}</span>{" "}
        </h2>
        <span className="text-2xl underline font-bold">Methods </span>
        <p>{method}</p>
        <div>
          <h3 className="text-2xl">Ingredients :</h3>
          <span className="ml-3">{ingredients[1]}</span>{" "}
          <hr className=" w-3/12" />
          <span className="ml-3">{ingredients[2]}</span>
          <hr className=" w-3/12" />
          <span className="ml-3">{ingredients[3]}</span>
          <hr className=" w-3/12" />
          <span className="ml-3">{ingredients[4]}</span>
          <hr className=" w-3/12" />
          <span className="ml-3">{ingredients[5]}</span>
          <hr className=" w-3/12" />
        </div>

        <div className="card-actions justify-end flex items-center">
          <span className="flex items-center mr-4">
            <FaThumbsUp className="mr-1"></FaThumbsUp> {rating}
          </span>
          <button
            onClick={() => setDisable(true)}
            className="btn rounded-full"
            disabled={disable}
          >
            <FaHeart style={{ fontSize: "2rem" }} onClick={notify} />
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Receipe;
