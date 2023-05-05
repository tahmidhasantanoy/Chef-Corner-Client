import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { loginUser, handleGoogleSignIn, handleGithubSignIn } =
    useContext(AuthContext);
  const [err, setErr] = useState("");

  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const navigate = useNavigate();

  const handleSubmitLogin = (event) => {
    setErr("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        console.log(res);
        navigate(from, { replace: true });
      })
      .catch((err) => setErr(err.message));
  };

  const handleSignInWithGoogle = () => {
    handleGoogleSignIn()
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };
  const handleSignInWithGithub = () => {
    handleGithubSignIn()
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className=" bg-base-200">
      <div className="hero min-h-screen w-9/12 mx-auto .bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Wellcome to chef corner.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmitLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="text-red-500">{err}</p>
              <div className="form-control mt-6">
                <button className="btn btn-info rounded-sm">Login</button>
              </div>
            </form>
            <div className="card-body">
              <p className="my-5 text-center">Or connect with social media</p>
              <div>
                <div className="form-control mt-6">
                  <button
                    onClick={handleSignInWithGoogle}
                    className="btn rounded-sm"
                  >
                    <FaGoogle style={{ fontSize: "1.5rem" }} className="mr-3" />
                    Sign in with Google
                  </button>
                </div>
                <div className="form-control mt-6">
                  <button
                    onClick={handleSignInWithGithub}
                    className="btn rounded-sm"
                  >
                    <FaGithub style={{ fontSize: "1.5rem" }} className="mr-3" />
                    Sign in with Gihub
                  </button>
                </div>
              </div>
              <div className="flex mt-5">
                <hr className="w-1/2 mt-3.5" />
                <span className="mt-0">or</span>
                <hr className="w-1/2 mt-3.5" />
              </div>
              <p>
                New to chef corner?{" "}
                <Link to="/register" className="text-info underline">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
