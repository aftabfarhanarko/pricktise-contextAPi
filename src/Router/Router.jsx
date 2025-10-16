import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Homepage from "../components/Homepage";
import Profile from "../components/Profile";
import Logind from "../components/Logind";
import Register from "../components/Register";
import Dasbord from "../components/Dasbord";
import PrivetRouter from "../components/PrivetRouter";
import User from "../components/User";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/loging",
        Component: Logind,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path:"/dasbord",
        element: <PrivetRouter>
            <Dasbord></Dasbord>
        </PrivetRouter>
      },
      {
        path:'/user',
        element : <PrivetRouter>
            <User></User>
        </PrivetRouter>
      }
    ],
  },
]);
