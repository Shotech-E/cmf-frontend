import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
// import Login from "../components/Login";
// import Register from "../components/Register";
import Member from "../components/Member";
import AddMember from "../components/AddMember";
import Priests from "../components/Priests";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/member",
    element: <Member />,
  },
  {
    path: "/add_member",
    element: <AddMember />,
  },
  {
    path: "/priests",
    element: <Priests />,
  },
  {
    path: "/about_us",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default Router;
