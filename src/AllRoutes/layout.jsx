import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Layout = () => {
  return (
    <>
      <div className="h-16 mb-10">
        <Header />
      </div>
      <div className="max-width">
        <Outlet />
      </div>
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default Layout;
