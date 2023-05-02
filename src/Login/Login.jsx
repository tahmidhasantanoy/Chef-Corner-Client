// import React from 'react';

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" bg-base-200">
      <div className="hero min-h-screen w-9/12 mx-auto .bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
            Wellcome to chef corner.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info">Login</button>
              </div>
              <div className="flex mt-5">
              <hr className="w-1/2 mt-3.5"/>
              <span className="mt-0">or</span>
              <hr className="w-1/2 mt-3.5"/>
              </div>
              <p>New to chef corner? <Link to="/register" className="text-info underline">Create an account</Link></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
