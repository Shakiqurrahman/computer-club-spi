import DNavbar from "../components/dashboard-comp/DNavbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const DLayout = () => {
  return (
    <>
      <DNavbar />
      <div className="max-width">
        <Outlet />
      </div>
      <ScrollRestoration />
    </>
  );
};

export default DLayout;
