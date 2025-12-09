import { Outlet } from "react-router";
import NavBar from "../features/NavBar/NavBar";

const Layout = () => {
  return (
    <div className="d-flex flex-column justify-content-start">
      <NavBar />
      <div className="d-flex justify-content-center align-items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
