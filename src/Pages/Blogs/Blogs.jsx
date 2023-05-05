import html2pdf from "html2pdf.js/dist/html2pdf.min";
import ReactDOMServer from "react-dom/server";

const Blogs = () => {
  const pdfJSX = () => {
    return (
      <div className="my-20">
        <h2 className="text-5xl text-center text-info">
          Questions & Answering
        </h2>
        <div className="card w-10/12 mx-auto bg-slate-900 m-6 p-8">
          <h3 className="text-white text-2xl mb-4">
            Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <p className="ml-3">
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally.
          </p>
        </div>
        <div className="card w-10/12 mx-auto bg-slate-900 m-6 p-8">
          <h3 className="text-white text-2xl mb-4">
            How to validate React props using PropTypes?
          </h3>
          <h4 className="mb-3 underline">React PropTypes validators :</h4>
          <p className="ml-3">
            <span className="font-bold">PropTypes.any:</span> The prop can be of
            any data type <br />
            <span className="font-bold">PropTypes.bool:</span> The prop should
            be a Boolean PropTypes.number: The prop should be a number <br />
            <span className="font-bold">PropTypes.string:</span> The prop should
            be a string <br />
            <span className="font-bold">PropTypes.func:</span> The prop should
            be a function PropTypes.array: The prop should be an array <br />
            <span className="font-bold">PropTypes.object:</span> The prop should
            be an object <br />
            <span className="font-bold">PropTypes.symbol:</span> The prop should
            be a symbol
          </p>
        </div>
        <div className="card w-10/12 mx-auto bg-slate-900 m-6 p-8">
          <h3 className="text-white text-2xl mb-4">
            Tell us the difference between nodejs and express js.
          </h3>
          <p className="ml-3">
            NodeJS is the package, which provides the JavaScript run-time
            environment, whereas Express is a framework that sits on top of
            NodeJS and helps us to handle requests and responses
          </p>
        </div>
        <div className="card w-10/12 mx-auto bg-slate-900 m-6 p-8">
          <h3 className="text-white text-2xl mb-4">
            What is a custom hook, and why will you create a custom hook?
          </h3>
          <p className="ml-3">
            Custom hooks are reusable functions that developers can use to add
            special and unique functionality according to their need in the
            React applications.
            <br />
            <span>Reason :</span> <br />
            it can be reused easily, which makes the code cleaner and reduces
            the time to write the code. It also enhances the rendering speed of
            the code as a custom hook does not need to be rendered again and
            again while rendering the whole code.
          </p>
        </div>
      </div>
    );
  };

  //  changes
  const printHandler = () => {
    // const printElement = pdfJSX();
    const printElement = ReactDOMServer.renderToString(pdfJSX());

    html2pdf().from(printElement).save();
  };
  //  changes

  return (
    <div>
      <div className="mt-20 ml-12">
        <button onClick={printHandler} className="btn btn-warning">
          Download pdf
        </button>
      </div>
      <div className="my-20">
        <h2 className="text-5xl text-center text-info">
          Questions & Answering
        </h2>
        <div className="card w-10/12 mx-auto bg-slate-900 m-6 p-8">
          <h3 className="text-white text-2xl mb-4">
            Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <p className="ml-3">
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally.
          </p>
        </div>
        <div className="card w-10/12 mx-auto bg-slate-900 m-6 p-8">
          <h3 className="text-white text-2xl mb-4">
            How to validate React props using PropTypes?
          </h3>
          <h4 className="mb-3 underline">React PropTypes validators :</h4>
          <p className="ml-3">
            <span className="font-bold">PropTypes.any:</span> The prop can be of
            any data type <br />
            <span className="font-bold">PropTypes.bool:</span> The prop should
            be a Boolean PropTypes.number: The prop should be a number <br />
            <span className="font-bold">PropTypes.string:</span> The prop should
            be a string <br />
            <span className="font-bold">PropTypes.func:</span> The prop should
            be a function PropTypes.array: The prop should be an array <br />
            <span className="font-bold">PropTypes.object:</span> The prop should
            be an object <br />
            <span className="font-bold">PropTypes.symbol:</span> The prop should
            be a symbol
          </p>
        </div>
        <div className="card w-10/12 mx-auto bg-slate-900 m-6 p-8">
          <h3 className="text-white text-2xl mb-4">
            Tell us the difference between nodejs and express js.
          </h3>
          <p className="ml-3">
            NodeJS is the package, which provides the JavaScript run-time
            environment, whereas Express is a framework that sits on top of
            NodeJS and helps us to handle requests and responses
          </p>
        </div>
        <div className="card w-10/12 mx-auto bg-slate-900 m-6 p-8">
          <h3 className="text-white text-2xl mb-4">
            What is a custom hook, and why will you create a custom hook?
          </h3>
          <p className="ml-3">
            Custom hooks are reusable functions that developers can use to add
            special and unique functionality according to their need in the
            React applications.
            <br />
            <span>Reason :</span> <br />
            it can be reused easily, which makes the code cleaner and reduces
            the time to write the code. It also enhances the rendering speed of
            the code as a custom hook does not need to be rendered again and
            again while rendering the whole code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
