import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../components/shared/ErrorPage";
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
        element: <div>Hello events page!</div>,
      },
      {
        path: "/about",
        element: <div>Hello about page!</div>,
      },
      {
        path: "/contact",
        element: <div>Hello contact page!</div>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
