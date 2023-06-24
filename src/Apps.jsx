import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import Profile from './pages/Profile';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import ListData from './listData';
import Error from './pages/Error';
import themeContext from "./context/dataProvider";
import { useContext } from "react";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,

  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/data",
    element: <ListData />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

const Apps = () => {
  let { theme } = useContext(themeContext);
  return (
    <div className={`${theme}`}>
        <RouterProvider router={router} />
    </div>
  );
}

export default Apps;
