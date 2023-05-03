// import React from 'react';
import { Link } from "react-router-dom";
import banner from "../../../../public/images/banner.jpg"

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-[image:var(--image-url)]"
        // style={{
        //   backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
        // }}
        style={{'--image-url': `url(${banner})`}} 
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=".max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-start">Heath tips || healt related tips comimg in btn</h1>
            <p className="mb-5 w-1/2 text-start">
            “The doctor of the future will no longer treat the human frame with drugs, but rather will cure and prevent disease with nutrition.” – Thomas Edison
            </p>
            <p className=" bg-info text-white rounded-sm p-0.5 w-1/12 .btn .btn-info text-start hover:bg-cyan-600"><Link className="">Get Started</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
