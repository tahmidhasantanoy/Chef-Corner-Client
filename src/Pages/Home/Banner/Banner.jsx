import { Link } from "react-router-dom";
import banner from "../../../../public/images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-[image:var(--image-url)] mb-28"
        style={{ "--image-url": `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=".max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-start">Heath tips</h1>
            <p className="mb-5 w-1/2 text-start">
              “The doctor of the future will no longer treat the human frame
              with drugs, but rather will cure and prevent disease with
              nutrition.” – Thomas Edison
            </p>
            <p className="  rounded-sm p-0.5 w-3/12 text-start ">
              <Link
                to="/healthTips"
                className="btn btn-info text-white break-keep"
              >
                Let's check
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
