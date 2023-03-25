import { createBrowserRouter } from "react-router-dom";
import Layout from "../componets/Layout";
import Home from "../pages/Home";
import Detail from "../pages/Detail.js";
import Add from "../pages/Add";
import Edit from "../pages/Edit"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/pokemon/:id",
        element: <Detail/>,
      },
      {
        path: "/pokemon/edit/:id",
        element: <Edit/>,
      },
    ],
  },
]);

export default router;
