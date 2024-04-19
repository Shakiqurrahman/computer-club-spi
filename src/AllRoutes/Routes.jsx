import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../components/shared/ErrorPage";
import Layout from "./layout";
import AboutPage from "../Pages/AboutPage";
import EventPage from "../Pages/EventPage";
import ContactPage from "../Pages/ContactPage";
import Dashboard from "../dashboard/Dashboard";
import ResultPage from "../Pages/ResultPage";
import DLayout from "./DLayout";
import DEventPage from "../dashboard/DEventPage";
import DNoticePage from "../dashboard/DNoticePage";
import DTeachersPage from "../dashboard/DTeachersPage";

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
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },

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
        path: "/admin/dashboard/notice",
        element: <DNoticePage />,
      },
      {
        path: "/admin/dashboard/teachers",
        element: <DTeachersPage />,
      },
]},
]);
