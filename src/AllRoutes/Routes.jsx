import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import EventPage from "../Pages/EventPage";
import HomePage from "../Pages/HomePage";
import ResultPage from "../Pages/ResultPage";
import CgpaCalc from "../components/CgpaCalc";
import DCreateEvent from "../components/dashboard-comp/DCreateEvent";
import DCreateTeacher from "../components/dashboard-comp/DCreateTeacher";
import DCreateNotice from "../components/dashboard-comp/DCreateNotice";
import ErrorPage from "../components/shared/ErrorPage";
import DNoticePage from "../dashboard/DNoticePage";
import DTeachersPage from "../dashboard/DTeachersPage";
import DEventPage from "../dashboard/DEventPage";
import Dashboard from "../dashboard/Dashboard";
import DLayout from "./DLayout";
import Layout from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventPage />,
      },
      {
        path: "/results",
        element: <ResultPage />,
      },
      {
        path: "/others/cgpa-calculator",
        element: <CgpaCalc />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      // {
      //   path: "/Others",
      //   element: <ContactPage />,
      // },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },

  {
    path: "/admin/dashboard",
    element: <DLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/events",
        element: <DEventPage />,
      },
      {
        path: "/admin/dashboard/create-event",
        element: <DCreateEvent />,
      },
      {
        path: "/admin/dashboard/notice",
        element: <DNoticePage />,
      },
      {
        path: "/admin/dashboard/create-notice",
        element: <DCreateNotice />,
      },
      {
        path: "/admin/dashboard/teachers",
        element: <DTeachersPage />,
      },
      {
        path: "/admin/dashboard/create-teacher",
        element: <DCreateTeacher />,
      },
    ],
  },
]);
