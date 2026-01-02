import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <h1>My App</h1>
      <ul>
        <li>
          <Link to={""}></Link>
          <Link to={"/add"}>Add Product</Link>
          <Link to={"/edit"}>Edit the Product</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Layout;
