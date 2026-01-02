import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Products";
import EditProduct from "../pages/EditProduct";
import { AddProduct } from "../pages/AddProduct";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/add",
        element: <AddProduct />,
      },
      {
        path: "/edit",
        element: <EditProduct />,
      },
    ],
  },
]);

export default router;
