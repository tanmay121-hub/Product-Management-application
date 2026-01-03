import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layout";
import EditProduct from "../pages/EditProduct";
import { AddProduct } from "../pages/AddProduct";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/products"} />,
      },
      { path: "/products", element: <Products /> },
      {
        path: "/add",
        element: <AddProduct />,
      },
      { path: "/edit", element: <div>Please select a product to edit.</div> },
      { path: "/edit/:id", element: <EditProduct /> },
    ],
  },
]);

export default router;
