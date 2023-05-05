import { Link, useRouteError } from "react-router-dom";
import logo from "../../../../public/images/Logo.png";

const Error = () => {
  const { error, status } = useRouteError();

  return (
    <section className="flex items-center h-screen p-16 .text-gray-900 mt-5">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          className="w-1/2 md:w-1/4 lg:w-1/4
        "
          src={logo}
          alt=""
        />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-info text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
