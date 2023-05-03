import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Error from "../Pages/Home/Error/Error";
import Banner from "../Pages/Home/Banner/Banner";
import Cards from "../Pages/Home/Cards/Cards";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>

      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        //Banner + cardss + 2 sec in  home
        path:"/banner",
        element:<Banner/>
      },
      {
        path:"/cards",
        element:<Cards/>
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
