import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import EventPage from "../Pages/EventPage";
import HomePage from "../Pages/HomePage";
import ResultPage from "../Pages/ResultPage";
import CgpaCalc from "../components/CgpaCalc";
import AllBookList from "../components/AllBookList";
import DCreateEvent from "../components/dashboard-comp/DCreateEvent";
import DCreateNotice from "../components/dashboard-comp/DCreateNotice";
import DCreateTeacher from "../components/dashboard-comp/DCreateTeacher";
import SingleBookList from "../components/SingleBookList";
import DEventPage from "../dashboard/DEventPage";
import DNoticePage from "../dashboard/DNoticePage";
import DTeachersPage from "../dashboard/DTeachersPage";
import Dashboard from "../dashboard/Dashboard";
import DLayout from "./DLayout";
import Layout from "./layout";
import TeacherEdit from "../components/dashboard-comp/TeacherEdit";
import NoticeEdit from "../components/dashboard-comp/NoticEdit";
import EventEdit from "../components/dashboard-comp/eventEdit";
import ErrorPage from "../components/shared/ErrorPage";

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
      {
        path: "/Others/booklists",
        element: <AllBookList />,
      },
      {
        path: "/Others/booklists/:id",
        element: <SingleBookList />,
      },
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
      {
        path: "/admin/dashboard/teacher/edit/:name",
        element: <TeacherEdit />,
      },
      {
        path: "/admin/dashboard/notic/edit/:id",
        element: <NoticeEdit />,
      },
      {
        path: "/admin/dashboard/event/edit/:id",
        element: <EventEdit />,
      },
    ],
  },
]);
