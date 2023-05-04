import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Error from "../Pages/Home/Error/Error";
import Banner from "../Pages/Home/Banner/Banner";
import Cards from "../Pages/Home/Cards/Cards";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import ChefReceipe from "../Pages/ChefRecipes/ChefReceipe";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      // {
      //   path: "/chefReceipe",
      //   element: <ChefReceipe/>
      // },
      {
        path:"/chefReceipe/:id",
        element:<PrivateRoute><ChefReceipe/></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:3000/chefInfo/${params.id}`)
      }
    ],
  },
]);

export default router;


