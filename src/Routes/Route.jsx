import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Error from "../Pages/Home/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  },
]);

export default router;

// const Route = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default Route;
