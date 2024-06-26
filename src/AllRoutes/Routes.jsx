import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import EventPage from "../Pages/EventPage";
import HomePage from "../Pages/HomePage";
import ResultPage from "../Pages/ResultPage";
import AllBookList from "../components/AllBookList";
import CgpaCalc from "../components/CgpaCalc";
import SingleBookList from "../components/SingleBookList";
import DCreateEvent from "../components/dashboard-comp/DCreateEvent";
import DCreateNotice from "../components/dashboard-comp/DCreateNotice";
import DCreateTeacher from "../components/dashboard-comp/DCreateTeacher";
import NoticeEdit from "../components/dashboard-comp/NoticEdit";
import TeacherEdit from "../components/dashboard-comp/TeacherEdit";
import EventEdit from "../components/dashboard-comp/eventEdit";
import DEventPage from "../dashboard/DEventPage";
import DNoticePage from "../dashboard/DNoticePage";
import DTeachersPage from "../dashboard/DTeachersPage";
import Dashboard from "../dashboard/Dashboard";
import DLayout from "./DLayout";
import Layout from "./layout";
import SignUp from "../components/users/signUp";
import SignIn from "../components/users/singIn";
import NoticePage from "../Pages/NoticePage";
import Techers from "../components/techers";

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
        path: "/notice",
        element: <NoticePage />,
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
      {
        path: "/techers",
        element: <Techers />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
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
