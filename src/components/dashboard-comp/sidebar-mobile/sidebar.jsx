import { Link } from "react-router-dom";
import logo from "../../../../public/logo.jpg";
import { IoClose } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Bar({ toggol }) {
    const sideNavs = [
    {
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
      route: "/admin/dashboard",
    },
    { name: "Events", icon: <RxDashboard />, route: "/admin/dashboard/events" },
    { name: "Notice", icon: <CiSaveDown2 />, route: "/admin/dashboard/notice" },
    {
      name: "Teachers",
      icon: <FaRegUser />,
      route: "/admin/dashboard/teachers",
    },
    { name: "Users", icon: <FaRegUser />, route: "/admin/dashboard/user" },
    {
      name: "Help",
      icon: <MdOutlineDashboard />,
      route: "/admin/dashboard/help",
    },
  ];

  return (
    <div className="inset-0 fixed bg-black/40 flex items-start justify-start">
      <div className="bg-white  min-w-[230px] sm:min-w-[300px] min-h-screen px-3 py-5 ">
        <div className="flex items-center gap-3 justify-between">
          <Link to="/" className="text-xl font-bold flex items-center ">
            <img src={logo} className=" h-12 mr-2" alt="Logo" />
          </Link>
          <div onClick={toggol} className="  duration-500 ease-in-out">
            <IoClose size={30} />
          </div>
        </div>

        <div className="mt-7 space-y-2">
          {sideNavs.map((sideNav, index) => (
            <li key={index} className="flex hover:bg-gray-100 px-3 py-2 duration-300 cursor-pointer">
              <Link
                onClick={toggol}
                to={sideNav.route}
                className="text-base text-gray-900 font-normal rounded-lg flex items-center    group"
              >
                {sideNav.icon}
                <span className="ml-3">{sideNav.name}</span>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bar;
