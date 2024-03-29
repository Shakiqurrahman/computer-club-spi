import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../components/shared/ErrorPage";
import Layout from "./layout";
import AboutPage from "../Pages/AboutPage";
import EventPage from "../Pages/EventPage";
import ContactPage from "../Pages/ContactPage";
import Dashboard from "../dashboard/Dashboard";

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
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },

  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
]);
