import { MdOutlineDashboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

export const sideNavs = [
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
