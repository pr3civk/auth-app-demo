import { Outlet } from "react-router-dom";
import ContentLogout from "../components/content-logout";

const ProtectedRoutes = ({ isLogged }) => {
  // console.log(isLogged, "ProtectedRoutes");
  return isLogged ? <Outlet /> : <ContentLogout />;
};

export default ProtectedRoutes;
