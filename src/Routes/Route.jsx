import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
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
