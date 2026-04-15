import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/Applayout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Newsroom } from "../pages/Newsroom";
import { Portfolio } from "../pages/Portfolio";
import { Distribution } from "../pages/Distribution";
import { Carrier } from "../pages/Carriers";
import { ErrorPage } from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/newsroom",
        element: <Newsroom />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/distribution",
        element: <Distribution />,
      },
      {
        path: "/carriers",
        element: <Carrier />,
      },
    ],
  },
]);
