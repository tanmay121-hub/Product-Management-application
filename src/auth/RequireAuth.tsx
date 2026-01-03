import { Navigate, Outlet } from "react-router-dom";
import { getAuthUser } from "../utils/storage";

const RequireAuth = () => {
  const user = getAuthUser();
  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default RequireAuth;
