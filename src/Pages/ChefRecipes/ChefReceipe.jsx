import { FaGlassCheers, FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Receipe from "./Receipe";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChefReceipe = () => {
  const specificShefData = useLoaderData();

  const {
    bio,
    chefImage,
    chefName,
    experience,
    numRecipes,
    totalLikes,
    recipes,
  } = specificShefData;
  return (
    // Chef receipe Banner
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <LazyLoadImage
            src={chefImage}
            alt="Chef Image is here"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{chefName}</h1>
            <p className="mt-2">{experience} experience</p>
            <p className="py-6">{bio}</p>
            <button className="btn btn-info text-white mr-2">
              <FaThumbsUp style={{ fontSize: "1.5rem" }} className="mr-2" />{" "}
              {totalLikes}
            </button>
            <button className="btn btn-info text-white ml-2">
              <FaGlassCheers style={{ fontSize: "1.5rem" }} className="mr-2" />{" "}
              {numRecipes}
            </button>
          </div>
        </div>
      </div>

      {/* recepies */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-20 mx-20 my-5">
        {recipes.map((receipe, idx) => (
          <Receipe key={idx} receipe={receipe}></Receipe>
        ))}
      </div>
    </div>
  );
};

export default ChefReceipe;
