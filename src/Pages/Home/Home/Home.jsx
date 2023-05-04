import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import img1 from "../../../../public/images/Classic French Croissant.jpg";
import img2 from "../../../../public/images/Roasted Cauliflower Salad.jpg";
import img3 from "../../../../public/images/Spicy Pumpkin Soup.jpg";
// import { Link } from "react-router-dom";
// import { FaUtensils } from "react-icons/fa";
import chef from "../../../../public/images/chef.jpg";
import ingredien from "../../../../public/images/INGREDIENTS.jpg";
import flavors from "../../../../public/images/FLAVORS.jpg";
import professional from "../../../../public/images/professional.jpg";

const Home = () => {
  // const chefData = useLoaderData()

  return (
    <div>
      <Banner />
      
      {/* section - 3 start*/}

      <div>
        <h3 className="text-center text-6xl text-info font-semibold mb-3">Main serveice we provide</h3>
        <p className="text-center">
          Our services are the best in town, we provide great quality baked
          products
        </p>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-20 mx-20 my-5 ">
          {/* hero */}
          <div className="hero .min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className="">
                <img src={chef} className="max-w-sm rounded-lg shadow-2xl" />
              </div>
              <div>
                <h1 className="text-5xl font-bold">TOP CHEFS!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>

              </div>
            </div>
          </div>
          <div className="hero .min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img src={ingredien} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">FRESH INGREDIENTS!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
          <div className="hero .min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img src={flavors} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">ATTRACTIVE FLAVORS!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
          <div className="hero .min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={professional}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">ATTRACTIVE FLAVORS!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section - 3 end*/}

      <Cards />

      {/* section - 4 start*/}
      <div className="my-32 bg-base-300 p-12">
        <h3 className="text-4xl text-center">Most popular receipes</h3>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-20 mx-20 my-5 ">
          {/* card -1 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={img1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Classic French Croissant</h2>
              <p className="text-cyan-300 text-sm">APPETIZER / BREAD / SWEET</p>
            </div>
          </div>
          {/* card -2  */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={img2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Roasted Cauliflower Salad</h2>
              <p className="text-cyan-300 text-sm">SALAD / VEGAN</p>
            </div>
          </div>
          {/* card -3  */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={img3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Spicy Pumpkin Soup</h2>
              <p className="text-cyan-300 text-sm">BEVERAGES / SOUP</p>
            </div>
          </div>
        </div>
      </div>
      {/* section - 3 end*/}

 
    </div>
  );
};

export default Home;
