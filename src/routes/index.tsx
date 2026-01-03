import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layout";
import EditProduct from "../pages/EditProduct";
import { AddProduct } from "../pages/AddProduct";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import RequireAuth from "../auth/RequireAuth";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },

      // protected
      {
        element: <RequireAuth />,
        children: [
          { path: "/", element: <Navigate to="/products" /> },
          { path: "/products", element: <Products /> },
          { path: "/add", element: <AddProduct /> },
          { path: "/edit/:id", element: <EditProduct /> },
        ],
      },
    ],
  },
]);

export default router;
