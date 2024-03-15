import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const Layout = () => {
  return (
    <>
      <div className="h-16 mb-10">
        <Header />
      </div>
      <div className="max-width">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
